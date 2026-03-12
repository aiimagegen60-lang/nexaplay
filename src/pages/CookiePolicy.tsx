import React from 'react';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-neon-green/10 flex items-center justify-center text-neon-green">
            <Cookie className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Cookie Policy</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Last updated: 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
          <section>
            <p className="text-lg leading-relaxed">
              This Cookie Policy explains how NexaPlay (https://nexaplay.fun) uses cookies and similar technologies when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">1.</span> What Are Cookies
            </h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help improve website functionality and user experience.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">2.</span> How We Use Cookies
            </h2>
            <p>We may use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remember user preferences</li>
              <li>Analyze website traffic and performance</li>
              <li>Improve website functionality</li>
              <li>Deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">3.</span> Third-Party Cookies
            </h2>
            <p>Some third-party services, such as advertising networks, may place cookies on your device to serve ads and track performance.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">4.</span> Managing Cookies
            </h2>
            <p>You can choose to disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain parts of the website.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">5.</span> Changes to This Policy
            </h2>
            <p>We may update this Cookie Policy from time to time. Any updates will be posted on this page.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">6.</span> Contact
            </h2>
            <p>If you have any questions about our Cookie Policy, please contact us through the website's contact page.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
