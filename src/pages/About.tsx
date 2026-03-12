import React from 'react';
import { Info, Gamepad2, Wrench, Zap, Layout } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-neon-green/10 flex items-center justify-center text-neon-green">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">About NexaPlay</h1>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">The Ultimate Web Portal</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-12 text-slate-400">
          <section className="space-y-6">
            <p className="text-xl leading-relaxed text-white font-medium">
              Welcome to NexaPlay (https://nexaplay.fun).
            </p>
            <p className="text-lg leading-relaxed">
              NexaPlay is an online platform that offers a collection of free browser-based games and useful online tools. Our goal is to create a simple and enjoyable place where users can play games instantly and use helpful tools without downloading any software.
            </p>
            <p className="text-lg leading-relaxed">
              At NexaPlay, we focus on providing a fast and user-friendly experience. All tools and games are designed to work directly in your browser so you can access them anytime from desktop or mobile devices.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">What You Can Find on NexaPlay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 group hover:border-neon-green/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                  <Gamepad2 className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Free Online Games</h3>
                  <p className="text-sm text-slate-500">Instant browser-based gaming across multiple genres.</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 group hover:border-neon-green/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                  <Wrench className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Smart Online Tools</h3>
                  <p className="text-sm text-slate-500">Essential utilities designed for everyday digital tasks.</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 group hover:border-neon-green/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                  <Zap className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Zero Downloads</h3>
                  <p className="text-sm text-slate-500">Fast and easy access without installing any software.</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4 group hover:border-neon-green/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
                  <Layout className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Modern Experience</h3>
                  <p className="text-sm text-slate-500">A clean, high-performance UI built for the modern web.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to continue improving the platform by adding new games, tools, and features that make the website more useful and entertaining.
            </p>
            <p className="text-lg leading-relaxed">
              If you have suggestions or feedback, feel free to contact us through our contact page.
            </p>
            <p className="text-lg leading-relaxed font-bold text-neon-green">
              Thank you for visiting NexaPlay.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
