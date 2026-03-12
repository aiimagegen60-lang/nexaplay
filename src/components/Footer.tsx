import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Info, Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">
                NEXA<span className="text-neon-green">PLAY</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              The ultimate destination for free web games and smart online utilities. 
              Built for speed, privacy, and performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-neon-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-neon-green transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-neon-green transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/games" className="hover:text-neon-green transition-colors">All Games</Link></li>
              <li><Link to="/tools" className="hover:text-neon-green transition-colors">Smart Tools</Link></li>
              <li><Link to="/about" className="hover:text-neon-green transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-neon-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/privacy-policy" className="hover:text-neon-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-neon-green transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-neon-green transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-neon-green transition-colors">Disclaimer</Link></li>
              <li><Link to="/dmca" className="hover:text-neon-green transition-colors">DMCA Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 NexaPlay. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
