import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import PersonalInfoCard from './components/PersonalInfoCard';
import VerificationStatusCard from './components/VerificationStatusCard';
import VerificationDetails from './components/VerificationDetails';
import StartVerificationCTA from './components/StartVerificationCTA';

export default function App() {
  // Demo data – in a real scenario this would come from your API
  const [status, setStatus] = useState('pending'); // 'verified' | 'pending' | 'unverified' | 'not_started'

  const user = useMemo(
    () => ({
      firstName: 'Giulia',
      lastName: 'Rossi',
      email: 'giulia.rossi@example.com',
      phone: '+39 345 123 4567',
      birthDate: '12/04/1992',
      nationality: 'Italia',
    }),
    []
  );

  const details = useMemo(
    () => ({
      documentType: 'Passaporto',
      submittedAt: '21/10/2025',
      message: 'Documento fuori fuoco. Ripeti la procedura in un ambiente ben illuminato.',
    }),
    []
  );

  const handleStart = () => {
    alert('Avvio procedura di verifica...');
    setStatus('pending');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PersonalInfoCard user={user} />
            <VerificationDetails status={status} details={details} />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <VerificationStatusCard status={status} />
            {status === 'not_started' && <StartVerificationCTA onStart={handleStart} />}
          </div>
        </div>

        <div className="pt-2">
          <StatusSwitcher status={status} setStatus={setStatus} />
        </div>
      </div>
    </div>
  );
}

function StatusSwitcher({ status, setStatus }) {
  const options = [
    { id: 'not_started', label: 'Non avviata' },
    { id: 'pending', label: 'In revisione' },
    { id: 'verified', label: 'Verificata' },
    { id: 'unverified', label: 'Non verificata' },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 flex flex-wrap items-center gap-2 text-sm">
      <span className="text-slate-500">Simula stato:</span>
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setStatus(opt.id)}
          className={`px-3 py-1.5 rounded-full border transition-colors ${
            status === opt.id
              ? 'bg-slate-900 text-white border-slate-900'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
