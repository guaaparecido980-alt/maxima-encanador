"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Movimento de rolagem (a abertura de cada página é CSS puro, ver globals.css).
 * Vocabulário:
 *  - [data-titulo]            palavras sobem por trás da máscara
 *  - [data-surge]             blocos entram com deslocamento curto
 *  - svg[data-desenha]        ícones de traço se desenham
 *  - [data-tubo]              cano vertical que "enche" com a rolagem (scrub)
 *  - [data-trilho]            serviços em trilho horizontal fixado (desktop)
 *  - [data-manometro]         ponteiro avança pelas etapas
 *  - [data-paralaxe]          deslocamento discreto
 *  - [data-ima]               botão magnético (só mouse)
 * Rolagem suave (Lenis) só com mouse. Com "reduzir movimento", nada disso roda.
 * Tudo começa depois do load + ocioso, em etapas curtas (sem travar o toque).
 */
export function Movimento() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelado = false;
    let timer: number | undefined;
    let idle: number | undefined;
    const limpezas: (() => void)[] = [];
    const html = document.documentElement;
    const folga = () => new Promise<void>((r) => window.setTimeout(r, 0));

    const iniciar = async () => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const mouse = matchMedia("(hover: hover) and (pointer: fine)").matches;
      const [{ gsap }, { ScrollTrigger }, lenisMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        mouse ? import("lenis") : Promise.resolve(null),
      ]);
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger);

      const etapa = async (fn: () => void) => {
        if (cancelado) return;
        const ctx = gsap.context(fn);
        limpezas.push(() => ctx.revert());
        await folga();
      };

      // Rolagem suave com mouse (no toque, a rolagem nativa do celular já é a melhor)
      if (lenisMod) {
        const lenis = new lenisMod.default({ lerp: 0.1, anchors: { offset: -96 } });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (t: number) => lenis.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        limpezas.push(() => {
          gsap.ticker.remove(tick);
          lenis.destroy();
        });
      }

      await etapa(() => {
        html.classList.add("gsap-ok");
        gsap.utils.toArray<HTMLElement>("[data-titulo]").forEach((t) => {
          const palavras = t.querySelectorAll(".palavra > span");
          gsap.fromTo(
            palavras,
            { yPercent: 108 },
            { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.06, scrollTrigger: { trigger: t, start: "top 88%", once: true } },
          );
        });
      });

      await etapa(() => {
        const surgem = gsap.utils.toArray<HTMLElement>("[data-surge]");
        gsap.set(surgem, { opacity: 0, y: 32 });
        ScrollTrigger.batch(surgem, {
          start: "top 90%",
          once: true,
          onEnter: (lote) => gsap.to(lote, { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.09, overwrite: true }),
        });

        gsap.utils.toArray<SVGSVGElement>("svg[data-desenha]").forEach((svg) => {
          const tracos = Array.from(svg.querySelectorAll<SVGGeometryElement>("path"));
          tracos.forEach((p) => p.setAttribute("pathLength", "1"));
          gsap.set(tracos, { strokeDasharray: 1, strokeDashoffset: 1 });
          gsap.to(tracos, {
            strokeDashoffset: 0,
            duration: 1.4,
            ease: "power2.inOut",
            stagger: 0.12,
            scrollTrigger: { trigger: svg, start: "top 90%", once: true },
          });
        });
      });

      await etapa(() => {
        gsap.utils.toArray<HTMLElement>("[data-tubo]").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "50% 0%",
              scrollTrigger: { trigger: el.parentElement!, start: "top 70%", end: "bottom 70%", scrub: 0.5 },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-paralaxe]").forEach((el) => {
          const forca = Number(el.dataset.paralaxe || 10);
          gsap.fromTo(
            el,
            { yPercent: -forca / 2 },
            { yPercent: forca / 2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
          );
        });
      });

      // Trilho horizontal de serviços (desktop): a seção fica presa e os cartões passam de lado
      await etapa(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          gsap.utils.toArray<HTMLElement>("[data-trilho]").forEach((secao) => {
            const faixa = secao.querySelector<HTMLElement>("[data-trilho-faixa]");
            if (!faixa) return;
            // quanto a faixa precisa andar para o último cartão parar alinhado à margem direita
            const distancia = () => {
              const pai = faixa.parentElement!;
              const margem = pai.getBoundingClientRect().left + parseFloat(getComputedStyle(pai).paddingLeft);
              return Math.max(0, faixa.scrollWidth + margem * 2 - document.documentElement.clientWidth);
            };
            gsap.to(faixa, {
              x: () => -distancia(),
              ease: "none",
              scrollTrigger: {
                trigger: secao,
                start: "top top",
                end: () => `+=${distancia()}`,
                pin: true,
                scrub: 0.6,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            });
          });
        });
        limpezas.push(() => mm.revert());
      });

      // Manômetro: o ponteiro aponta para a etapa que está no centro da tela
      await etapa(() => {
        gsap.utils.toArray<HTMLElement>("[data-manometro]").forEach((secao) => {
          const ponteiro = secao.querySelector<SVGGElement>("[data-ponteiro-etapas]");
          const etapas = gsap.utils.toArray<HTMLElement>(secao.querySelectorAll("[data-etapa]"));
          if (!ponteiro || !etapas.length) return;
          const angulos = (ponteiro.closest("[data-angulos]") as HTMLElement | null)?.dataset.angulos?.split(",").map(Number) ?? [
            -105, -35, 35, 105,
          ];
          etapas.forEach((el, i) => {
            ScrollTrigger.create({
              trigger: el,
              start: "top 50%",
              end: "bottom 50%",
              toggleClass: "ativa",
              onToggle: (s) => {
                if (s.isActive)
                  gsap.to(ponteiro, { attr: { transform: `rotate(${angulos[i]} 160 160)` }, duration: 1.2, ease: "elastic.out(1, 0.5)", overwrite: true });
              },
            });
          });
        });
      });

      // Botões magnéticos (só mouse)
      if (mouse) {
        await etapa(() => {
          gsap.utils.toArray<HTMLElement>("[data-ima]").forEach((el) => {
            const x = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
            const y = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
            const mover = (e: PointerEvent) => {
              const r = el.getBoundingClientRect();
              x((e.clientX - r.left - r.width / 2) * 0.22);
              y((e.clientY - r.top - r.height / 2) * 0.3);
            };
            const sair = () => {
              x(0);
              y(0);
            };
            el.addEventListener("pointermove", mover);
            el.addEventListener("pointerleave", sair);
            limpezas.push(() => {
              el.removeEventListener("pointermove", mover);
              el.removeEventListener("pointerleave", sair);
            });
          });
        });
      }

      if (!cancelado) ScrollTrigger.refresh();
    };

    const agendar = () => {
      timer = window.setTimeout(() => {
        if ("requestIdleCallback" in window) idle = window.requestIdleCallback(() => void iniciar(), { timeout: 1500 });
        else void iniciar();
      }, 30);
    };
    if (document.readyState === "complete") agendar();
    else window.addEventListener("load", agendar, { once: true });

    return () => {
      cancelado = true;
      window.removeEventListener("load", agendar);
      window.clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      limpezas.splice(0).reverse().forEach((f) => f());
      html.classList.remove("gsap-ok");
    };
  }, [pathname]);

  return null;
}
