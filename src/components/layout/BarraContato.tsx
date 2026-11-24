import { empresa, linkWhatsApp, linkTelefone } from "@/config/empresa";
import { IconeWhats, IconeFone } from "@/components/ui/Botoes";

/**
 * Celular: barra fixa com Ligar + WhatsApp (contato a um toque em qualquer página).
 * Desktop: botão redondo de WhatsApp no canto.
 */
export function BarraContato() {
  const wa = linkWhatsApp();
  const tel = linkTelefone();
  if (!wa && !tel) return null;
  return (
    <>
      <div
        data-testid="barra-contato"
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-linha-escura bg-tinta/95 px-3 pt-2.5 backdrop-blur-lg md:hidden"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      >
        {tel && (
          <a
            href={tel}
            data-evento="telefone_click"
            data-local="barra-movel"
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-linha-escura font-semibold text-osso"
          >
            <IconeFone /> Ligar
          </a>
        )}
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            data-evento="whatsapp_click"
            data-local="barra-movel"
            className="flex min-h-12 flex-[1.6] items-center justify-center gap-2 rounded-full bg-cobre-claro font-semibold text-tinta"
          >
            <IconeWhats /> WhatsApp
          </a>
        )}
      </div>
      {wa && (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          data-evento="whatsapp_click"
          data-local="flutuante"
          aria-label={`Chamar a ${empresa.nome} no WhatsApp`}
          className="fixed bottom-6 right-6 z-40 hidden h-16 w-16 place-items-center rounded-full bg-cobre-forte text-white shadow-[0_18px_40px_-12px_rgb(164_86_47/0.9)] transition-transform duration-500 hover:scale-105 md:grid"
        >
          <IconeWhats className="h-7 w-7" />
        </a>
      )}
    </>
  );
}
