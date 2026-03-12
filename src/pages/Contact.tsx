import React from 'react';
import { Mail, Globe, Clock, AlertTriangle, Send } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Contact NexaPlay</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              If you have any questions, feedback, or business inquiries, you can contact us using the information below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a 
              href="mailto:nexaplay.fun@gmail.com" 
              className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4 group hover:border-neon-green/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center text-neon-green group-hover:bg-neon-green/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-white font-bold group-hover:text-neon-green transition-colors">nexaplay.fun@gmail.com</p>
              </div>
            </a>

            <div className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Website</p>
                <p className="text-white font-bold">https://nexaplay.fun</p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Response Time</p>
                <p className="text-white font-bold">Usually within 24–48 hours</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold mb-1">Reporting an Issue?</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Please include the page URL and details in your message so we can review it quickly.
              </p>
            </div>
          </div>

          <p className="text-neon-green font-bold text-lg">Thank you for using NexaPlay.</p>
        </div>

        {/* Right Side: Form */}
        <div className="glass p-8 md:p-10 rounded-[2rem] border border-white/5">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Send a Message</h2>
          
          {formStatus === 'sent' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400">We'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-neon-green font-bold uppercase tracking-widest text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-green/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-green/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-green/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                disabled={formStatus === 'sending'}
                type="submit"
                className="w-full bg-neon-green text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? 'Sending...' : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
