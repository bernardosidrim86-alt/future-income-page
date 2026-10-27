import { useMemo, useState } from "react";
import { Lock } from "lucide-react";
import { SUBSCRIPTION, handlePayment } from "@/lib/payment";
import { cn } from "@/lib/utils";

type Kind = "foto" | "video";
type Filter = "todos" | "fotos" | "videos" | "pagos";
interface Item { id: number; kind: Kind; paid: boolean }

const ITEMS: Item[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  kind: i % 3 === 1 ? "video" : "foto",
  paid: i % 4 === 3,
}));

const FILTERS: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "fotos", label: "Fotos" },
  { id: "videos", label: "Vídeos" },
  { id: "pagos", label: "Pagos" },
];

export const ContentTabs = () => {
  const [tab, setTab] = useState<"posts" | "midias">("posts");
  const [filter, setFilter] = useState<Filter>("todos");
  const items = useMemo(
    () =>
      ITEMS.filter((it) =>
        filter === "fotos" ? it.kind === "foto" : filter === "videos" ? it.kind === "video" : filter === "pagos" ? it.paid : true,
      ),
    [filter],
  );

  return (
    <section className="mt-5 space-y-3">
      <div className="flex rounded-2xl border border-border bg-card px-3" role="tablist">
        {(["posts", "midias"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 border-b-2 py-3 text-sm transition",
              tab === t ? "border-primary font-bold text-primary-strong" : "border-transparent text-muted-foreground",
            )}
          >
            {t === "posts" ? "0 Postagens" : "0 Mídias"}
          </button>
        ))}
      </div>
      <div className="flex gap-1 rounded-2xl border border-border bg-card p-1">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            aria-pressed={filter === f.id}
            className={cn(
              "rounded-full px-4 py-1.5 text-[13px] transition",
              filter === f.id ? "bg-primary font-bold text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => handlePayment(SUBSCRIPTION)}
            aria-label="Conteúdo bloqueado"
            className="flex aspect-square items-center justify-center rounded-sm bg-locked text-card transition hover:brightness-110"
          >
            <Lock className="h-4 w-4" />
          </button>
        ))}
      </div>
    </section>
  );
};
