import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-12 flex flex-col gap-4 justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-700/50 px-3 py-1 rounded-full w-max border border-slate-600">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Sicurezza digitale
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Identità digitale, semplice e sicura
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Visualizza e gestisci le tue informazioni personali e lo stato di verifica dell’identità in un’unica dashboard moderna.
            </p>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-full min-h-[320px]">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft light gradient to blend scene with background; doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
