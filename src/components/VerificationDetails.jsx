import React from 'react';
import { FileText, Calendar, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function VerificationDetails({ status, details }) {
  if (status === 'not_started') return null;

  const isRejected = status === 'unverified';
  const isPending = status === 'pending';
  const isVerified = status === 'verified';

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-base font-semibold text-slate-900">Dettagli verifica</h3>
        <p className="text-sm text-slate-500 mt-1">Informazioni sul documento e sui prossimi passi.</p>
      </div>

      <div className="p-6 grid sm:grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5 rounded-lg bg-slate-100 text-slate-700 p-2 border border-slate-200">
            <FileText className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-wide text-slate-500">Tipo documento</p>
            <p className="text-slate-900 font-medium truncate">{details?.documentType || '—'}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5 rounded-lg bg-slate-100 text-slate-700 p-2 border border-slate-200">
            <Calendar className="h-4 w-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-wide text-slate-500">Data invio</p>
            <p className="text-slate-900 font-medium truncate">{details?.submittedAt || '—'}</p>
          </div>
        </div>
      </div>

      {isPending && (
        <div className="px-6 pb-6">
          <div className="rounded-xl border border-amber-200 bg-amber-50 text-amber-800 p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-sm">
              La tua verifica è in revisione. Riceverai una notifica via email appena sarà completata.
            </div>
          </div>
        </div>
      )}

      {isRejected && (
        <div className="px-6 pb-6">
          <div className="rounded-xl border border-rose-200 bg-rose-50 text-rose-800 p-4 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-sm">
              {details?.message || 'La verifica non è andata a buon fine. Assicurati che la foto del documento sia nitida e che i dati coincidano con il profilo.'}
            </div>
          </div>
        </div>
      )}

      {isVerified && (
        <div className="px-6 pb-6">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-4 flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
            <div className="text-sm">Identità verificata. Non è richiesta alcuna azione.</div>
          </div>
        </div>
      )}
    </section>
  );
}
