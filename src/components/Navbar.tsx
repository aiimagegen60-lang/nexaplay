import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Wrench, Info, Mail, ShieldCheck, Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../utils/cn';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/', icon: null },
    { name: 'Games', path: '/games', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'Tools', path: '/tools', icon: <Wrench className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-green rounded-lg flex items-center justify-center neon-glow">
              <Gamepad2 className="text-dark-bg w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              NEXA<span className="text-neon-green">PLAY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-neon-green",
                  location.pathname === link.path ? "text-neon-green" : "text-slate-400"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass text-slate-400 hover:text-neon-green transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass text-slate-400 hover:text-neon-green transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors",
                location.pathname === link.path 
                  ? "bg-neon-green/10 text-neon-green" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
