import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-neon-green/10 flex items-center justify-center text-neon-green">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Terms of Service</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Last updated: 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
          <section>
            <p className="text-lg leading-relaxed">
              Welcome to NexaPlay (https://nexaplay.fun). By accessing or using our website, you agree to comply with the following terms and conditions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">1.</span> Use of the Website
            </h2>
            <p>NexaPlay provides free online games and utility tools for entertainment and informational purposes. You agree to use the website responsibly and in accordance with applicable laws.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">2.</span> Intellectual Property
            </h2>
            <p>All content on this website, including design, layout, graphics, and text, is the property of NexaPlay unless otherwise stated. Unauthorized copying or distribution is prohibited.</p>
            <p>Some games or embedded content may belong to their respective developers.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">3.</span> User Conduct
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempt to damage or disrupt the website</li>
              <li>Use automated systems to access the site excessively</li>
              <li>Engage in any illegal activities while using the website</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">4.</span> Third-Party Content
            </h2>
            <p>Our website may include third-party games, advertisements, or external links. We are not responsible for the content or policies of third-party services.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">5.</span> Limitation of Liability
            </h2>
            <p>NexaPlay is provided "as is" without warranties of any kind. We are not responsible for any loss, damage, or issues resulting from the use of the website.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">6.</span> Changes to Terms
            </h2>
            <p>We may update these Terms of Service at any time. Continued use of the website means you accept the updated terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">7.</span> Contact
            </h2>
            <p>If you have any questions regarding these Terms, please contact us through the contact page on our website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
