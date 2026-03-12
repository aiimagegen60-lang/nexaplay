import React from 'react';
import { Shield, Mail, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export default function DMCA() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">DMCA Policy</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Intellectual Property Protection</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-12 text-slate-400">
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              NexaPlay respects the intellectual property rights of others and expects users of the website to do the same.
            </p>
            <div className="flex items-start gap-4 p-6 glass rounded-2xl border border-white/5 bg-white/5">
              <AlertTriangle className="w-6 h-6 text-neon-green shrink-0 mt-1" />
              <p className="text-lg leading-relaxed text-white font-medium">
                If you believe that any content on <span className="text-neon-green">https://nexaplay.fun</span> infringes upon your copyright, you may submit a DMCA takedown request.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <FileText className="w-6 h-6 text-neon-green" />
              Required Information
            </h2>
            <p className="text-lg leading-relaxed">
              Your request should include the following information:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {[
                'Your full name and contact information',
                'Identification of the copyrighted work',
                'The exact URL of the infringing content',
                'A statement of good faith belief',
                'A statement that the notice is accurate'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 glass p-4 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-neon-green shrink-0" />
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
              <Mail className="w-6 h-6 text-neon-green" />
              Submission
            </h2>
            <p className="text-lg leading-relaxed">
              Please send DMCA requests to:
            </p>
            <a 
              href="mailto:nexaplay.fun@gmail.com" 
              className="inline-flex items-center gap-4 glass p-6 rounded-2xl border border-neon-green/20 hover:border-neon-green/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:bg-neon-green/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Address</p>
                <p className="text-white font-bold text-lg group-hover:text-neon-green transition-colors">nexaplay.fun@gmail.com</p>
              </div>
            </a>
          </section>

          <section className="pt-8 border-t border-white/5">
            <p className="text-lg leading-relaxed italic">
              Once we receive a valid request, we will review the claim and remove the content if necessary.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
