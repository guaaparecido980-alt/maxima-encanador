import type { ElementType } from "react";

type Props = {
  texto: string;
  /** Trecho do texto que sai em itálico cobre. */
  destaque?: string;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Abertura da página: anima por CSS já na primeira pintura (não espera o GSAP). */
  imediato?: boolean;
};

/**
 * Título com cada palavra numa máscara (<span class="palavra">), montado no servidor.
 * O GSAP só sobe as palavras ([data-titulo]); o texto continua inteiro no HTML para o Google.
 */
export function Titulo({ texto, destaque, as: Tag = "h2", className = "", id, imediato = false }: Props) {
  let n = 0;
  const ini = destaque ? texto.indexOf(destaque) : -1;
  const fim = ini >= 0 ? ini + destaque!.length : -1;
  const partes: { palavra: string; em: boolean }[] = [];
  let pos = 0;
  for (const palavra of texto.split(" ")) {
    const comeco = texto.indexOf(palavra, pos);
    pos = comeco + palavra.length;
    partes.push({ palavra, em: ini >= 0 && comeco >= ini && comeco < fim });
  }

  const grupos: { em: boolean; palavras: string[] }[] = [];
  for (const p of partes) {
    const ultimo = grupos[grupos.length - 1];
    if (ultimo && ultimo.em === p.em) ultimo.palavras.push(p.palavra);
    else grupos.push({ em: p.em, palavras: [p.palavra] });
  }

  const render = (palavras: string[]) =>
    palavras.map((w, i) => (
      <span key={i}>
        <span className="palavra">
          <span style={imediato ? ({ ["--i" as string]: n++ } as React.CSSProperties) : undefined}>{w}</span>
        </span>
        {i < palavras.length - 1 ? " " : ""}
      </span>
    ));

  return (
    <Tag id={id} className={`${className} ${imediato ? "titulo-entra" : ""}`} data-titulo={imediato ? undefined : true}>
      {grupos.map((g, i) => (
        <span key={i}>
          {g.em ? <em>{render(g.palavras)}</em> : render(g.palavras)}
          {i < grupos.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
