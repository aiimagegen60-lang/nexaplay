import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import GameDetail from './pages/games/GameDetail';
import ToolDetail from './pages/tools/ToolDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import About from './pages/About';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import DMCA from './pages/DMCA';

// Placeholder pages
const GamesList = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-bold text-white mb-4">All Games</h1>
    <p className="text-slate-400">Explore our collection of free HTML5 games.</p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {['snake', 'flappy', 'tetris'].map(id => (
        <a key={id} href={`/games/${id}`} className="glass p-12 rounded-3xl hover:border-neon-green transition-all">
          <span className="text-4xl block mb-4 capitalize">{id}</span>
          <span className="font-bold text-white uppercase tracking-widest text-sm">Play Now</span>
        </a>
      ))}
    </div>
  </div>
);

const ToolsList = () => (
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-bold text-white mb-4">Smart Tools</h1>
    <p className="text-slate-400">Essential online utilities for everyday tasks.</p>
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { id: 'age-bmi-combined', name: 'Age & BMI Combined' },
        { id: 'age-calculator', name: 'Age Calculator & Horoscope' },
        { id: 'bmi-calculator', name: 'BMI Calculator' },
        { id: 'ideal-weight-calculator', name: 'Ideal Weight Calculator' },
        { id: 'calorie-calculator', name: 'Daily Calorie Calculator' },
        { id: 'body-fat-calculator', name: 'Body Fat Calculator' },
        { id: 'water-intake-calculator', name: 'Water Intake Calculator' },
        { id: 'sleep-cycle-calculator', name: 'Sleep Cycle Calculator' },
        { id: 'password-generator', name: 'Password Generator' },
        { id: 'love-calculator', name: 'Love Calculator' }
      ].map(tool => (
        <a key={tool.id} href={`/tools/${tool.id}`} className="glass p-8 rounded-3xl hover:border-neon-green transition-all flex flex-col items-center justify-center gap-4 group">
          <span className="font-bold text-white group-hover:text-neon-green transition-colors">{tool.name}</span>
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-neon-green" />
          </div>
        </a>
      ))}
    </div>
  </div>
);

const StaticPage = ({ title }: { title: string }) => (
  <div className="max-w-3xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
    <div className="prose prose-invert text-slate-400 space-y-4">
      <p>Welcome to the {title} page of NexaPlay.</p>
      <p>NexaPlay is a modern gaming and tools portal designed to provide high-quality, free-to-use digital experiences. Our platform is built with the latest web technologies to ensure speed, security, and a premium user experience.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<GamesList />} />
              <Route path="/games/:id" element={<GameDetail />} />
              <Route path="/tools" element={<ToolsList />} />
              <Route path="/tools/:id" element={<ToolDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/dmca" element={<DMCA />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
