import React from 'react';
import { User, Mail, Phone, Calendar, Globe } from 'lucide-react';

export default function PersonalInfoCard({ user }) {
  const Item = ({ icon: Icon, label, value }) => (
    <div className="flex items-start gap-3 py-3">
      <div className="shrink-0 mt-0.5 rounded-lg bg-slate-100 text-slate-700 p-2 border border-slate-200">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
        <p className="text-slate-900 font-medium truncate">{value || '—'}</p>
      </div>
    </div>
  );

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-900">Informazioni personali</h2>
        <p className="text-sm text-slate-500 mt-1">Dati di profilo associati al tuo account.</p>
      </div>
      <div className="p-6 grid sm:grid-cols-2 gap-4">
        <Item icon={User} label="Nome" value={`${user.firstName} ${user.lastName}`} />
        <Item icon={Mail} label="Email" value={user.email} />
        <Item icon={Phone} label="Telefono" value={user.phone} />
        <Item icon={Calendar} label="Data di nascita" value={user.birthDate} />
        <Item icon={Globe} label="Nazionalità" value={user.nationality} />
      </div>
    </section>
  );
}
