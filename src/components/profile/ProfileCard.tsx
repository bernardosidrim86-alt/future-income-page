import { useState } from "react";
import { BadgeCheck, Heart, Image, Video } from "lucide-react";
import { PROMOTIONS, SUBSCRIPTION, handlePayment, type Plan } from "@/lib/payment";
import { cn } from "@/lib/utils";

const BIO =
  "Escreva aqui a sua bio. Este é um texto de exemplo para mostrar como a bio longa aparece. Clique em ler mais para abrir o texto completo e em ler menos para recolher novamente.";

const PlanButton = ({ plan, tone }: { plan: Plan; tone: 1 | 2 | 3 }) => (
  <button
    type="button"
    onClick={() => handlePayment(plan)}
    className={cn(
      "flex w-full items-center justify-between rounded-full px-5 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      tone === 1 && "bg-plan-1",
      tone === 2 && "bg-plan-2",
      tone === 3 && "bg-plan-3",
    )}
  >
    <span>
      {plan.label}
      {plan.discount && <span className="ml-2 text-[11px] font-normal">{plan.discount}</span>}
    </span>
    <span>{plan.price}</span>
  </button>
);

export const ProfileCard = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      {/* Capa — substitua por <img> */}
      <div className="h-[200px] bg-muted" aria-label="Foto de capa" />
      <div className="relative px-5 pb-5">
        {/* Foto de perfil — substitua por <img> */}
        <div className="absolute -top-10 left-4 h-[88px] w-[88px] rounded-full border-[3px] border-primary bg-muted" aria-label="Foto de perfil" />
        <div className="flex justify-end gap-3 pt-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1"><Image className="h-3.5 w-3.5" />0</span>
          <span className="flex items-center gap-1"><Video className="h-3.5 w-3.5" />0</span>
          <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" />0</span>
        </div>
        <h1 className="mt-5 flex items-center gap-1.5 text-base font-bold text-foreground">
          Seu Nome <BadgeCheck className="h-4 w-4 fill-primary text-card" />
        </h1>
        <p className="text-xs text-primary">@seuusuario</p>
        <p className={cn("mt-3 text-[13.5px] leading-relaxed text-muted-foreground", !expanded && "line-clamp-2")}>{BIO}</p>
        <button type="button" onClick={() => setExpanded((v) => !v)} className="mt-0.5 text-[13px] font-bold text-primary hover:underline">
          {expanded ? "Ler menos" : "Ler mais"}
        </button>

        <div className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-3">
          <p className="text-xs font-bold text-muted-foreground">Assinaturas</p>
          <PlanButton plan={SUBSCRIPTION} tone={1} />
          <p className="pt-2 text-xs font-bold text-muted-foreground">Promoções</p>
          {PROMOTIONS.map((p, i) => (
            <PlanButton key={p.id} plan={p} tone={i === 0 ? 2 : 3} />
          ))}
        </div>
      </div>
    </section>
  );
};
