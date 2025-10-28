import React from 'react';
import { Shield } from 'lucide-react';

export default function StartVerificationCTA({ onStart }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Avvia verifica identità</h3>
          <p className="text-sm text-slate-500 mt-1">Completa la verifica per aumentare i tuoi limiti e proteggere il tuo account.</p>
        </div>
        <Shield className="h-6 w-6 text-slate-400" />
      </div>
      <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-slate-600">Tieni a portata di mano un documento valido: carta d’identità, passaporto o patente.</p>
        <button
          onClick={onStart}
          className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors"
        >
          Avvia verifica identità
        </button>
      </div>
    </section>
  );
}
