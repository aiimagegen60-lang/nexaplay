import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-neon-green/10 flex items-center justify-center text-neon-green">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Privacy Policy</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Last updated: 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
          <section>
            <p className="text-lg leading-relaxed">
              At NexaPlay (https://nexaplay.fun), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">1.</span> Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information you voluntarily provide (such as email if you contact us)</li>
              <li>Non-personal information such as browser type, device type, and IP address</li>
              <li>Usage data such as pages visited and time spent on the website</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">2.</span> Cookies
            </h2>
            <p>Our website may use cookies to improve user experience and analyze website traffic. Cookies help remember user preferences and improve performance.</p>
            <p>You can disable cookies in your browser settings if you prefer not to allow them.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">3.</span> Third-Party Advertising
            </h2>
            <p>We may use third-party advertising companies to serve ads when you visit our website. These companies may use cookies and web beacons to collect non-personal information about your visits to provide relevant advertisements.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">4.</span> External Links
            </h2>
            <p>NexaPlay may contain links to external websites or embedded games. We are not responsible for the privacy practices or content of those websites.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">5.</span> Children's Information
            </h2>
            <p>Our website does not knowingly collect personal information from children under the age of 13. If you believe that a child has provided personal information, please contact us so we can remove it.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">6.</span> Security
            </h2>
            <p>We take reasonable steps to protect your information, but no method of transmission over the internet is completely secure.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">7.</span> Changes to This Policy
            </h2>
            <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
              <span className="text-neon-green">8.</span> Contact Us
            </h2>
            <p>If you have any questions regarding this Privacy Policy, please contact us through the contact page on our website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
