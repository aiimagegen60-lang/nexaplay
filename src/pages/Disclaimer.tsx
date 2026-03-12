import React from 'react';
import { AlertCircle, ShieldAlert, ExternalLink, CheckCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Disclaimer</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Legal Notice & Terms of Use</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-12 text-slate-400">
          <section className="space-y-6">
            <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-white/5 bg-white/5">
              <ShieldAlert className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
              <p className="text-lg leading-relaxed text-white font-medium">
                All the information on this website (https://nexaplay.fun) is published in good faith and for general information and entertainment purposes only.
              </p>
            </div>
            
            <p className="text-lg leading-relaxed">
              NexaPlay provides online games and utility tools for users. While we try to ensure that all information and tools work correctly, we do not make any warranties about the completeness, reliability, or accuracy of the content.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 text-sm">01</span>
              Limitation of Liability
            </h2>
            <p className="text-lg leading-relaxed">
              Any action you take upon the information you find on this website is strictly at your own risk. NexaPlay will not be liable for any losses or damages related to the use of our website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 text-sm">02</span>
              External Links
            </h2>
            <div className="flex items-start gap-4">
              <ExternalLink className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">
                Our website may contain links to external websites or embedded games from third-party sources. We do not control or take responsibility for the content or policies of these external websites.
              </p>
            </div>
          </section>

          <section className="pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 text-neon-green">
              <CheckCircle className="w-5 h-5" />
              <p className="text-lg font-bold">
                By using this website, you agree to this disclaimer and its terms.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
