import React from 'react';
import { Shield, CheckCircle2, Clock, XCircle, BadgeCheck } from 'lucide-react';

const STATUS_MAP = {
  verified: {
    label: 'Verificata',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dot: 'bg-emerald-500',
    icon: CheckCircle2,
    accent: 'text-emerald-700',
  },
  pending: {
    label: 'In revisione',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    dot: 'bg-amber-500',
    icon: Clock,
    accent: 'text-amber-700',
  },
  unverified: {
    label: 'Non verificata',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    dot: 'bg-rose-500',
    icon: XCircle,
    accent: 'text-rose-700',
  },
  not_started: {
    label: 'Non avviata',
    color: 'bg-slate-50 text-slate-700 border-slate-200',
    dot: 'bg-slate-400',
    icon: Shield,
    accent: 'text-slate-700',
  },
};

export default function VerificationStatusCard({ status = 'not_started' }) {
  const cfg = STATUS_MAP[status] || STATUS_MAP.not_started;
  const Icon = cfg.icon;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Verifica identità</h2>
          <p className="text-sm text-slate-500 mt-1">Stato attuale del processo KYC.</p>
        </div>
        <BadgeCheck className="h-6 w-6 text-slate-400" />
      </div>
      <div className="p-6 flex items-center justify-between gap-4">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm ${cfg.color}`}>
          <span className={`h-2 w-2 rounded-full ${cfg.dot}`} />
          <span className="font-medium">{cfg.label}</span>
        </div>
        <div className={`inline-flex items-center gap-2 text-sm ${cfg.accent}`}>
          <Icon className="h-5 w-5" />
          <span className="font-medium">{cfg.label}</span>
        </div>
      </div>
    </section>
  );
}
