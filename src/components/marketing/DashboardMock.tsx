import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/motion/Counter";

const stats = [
  { label: "Actions en cours", value: 24, suffix: "", tone: "brand" as const },
  { label: "Non-conformités", value: 3, suffix: "", tone: "danger" as const },
  { label: "Taux de clôture", value: 92, suffix: "%", tone: "success" as const },
];

const rows = [
  { name: "Audit site Lyon — Q3", status: "Maîtrisé" as const },
  { name: "Rapport EPI atelier 2", status: "À surveiller" as const },
  { name: "Non-conformité fournisseur X", status: "Critique" as const },
  { name: "Plan d'actions ISO 9001", status: "En cours" as const },
];

const statusVariant = {
  Maîtrisé: "success",
  "À surveiller": "warning",
  Critique: "danger",
  "En cours": "brand",
} as const;

export function DashboardMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-indigo-950/40 backdrop-blur">
      <div className="rounded-xl bg-white p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
              Tableau de bord
            </p>
            <p className="text-lg font-bold text-text">Vue d&apos;ensemble QHSE</p>
          </div>
          <Badge variant="neutral">Ce mois-ci</Badge>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border p-3 transition-colors hover:border-indigo-200 hover:bg-indigo-50/40"
            >
              <p className="text-2xl font-bold text-text">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] leading-tight text-text-secondary">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2.5">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded-lg border border-border px-3 py-2.5 transition-colors hover:border-indigo-200 hover:bg-indigo-50/40"
            >
              <span className="flex items-center gap-2 truncate text-sm text-text">
                {row.status === "Critique" && (
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-danger opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-danger" />
                  </span>
                )}
                {row.name}
              </span>
              <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
