import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Maximize2, Share2, Info } from 'lucide-react';
import AdPlaceholder from '../../components/AdPlaceholder';

const GAMES_DATA: Record<string, { title: string; icon: string; description: string }> = {
  snake: { title: 'Snake Game', icon: '🐍', description: 'Control the snake, eat food, and grow longer. Don\'t hit the walls or yourself!' },
  flappy: { title: 'Flappy Bird', description: 'Tap to flap your wings and navigate through the pipes. How far can you go?', icon: '🐦' },
  tetris: { title: 'Tetris', description: 'Classic block-stacking puzzle. Clear lines to score points and keep the board clean.', icon: '🧱' },
};

export default function GameDetail() {
  const { id } = useParams();
  const game = id ? GAMES_DATA[id] : null;

  if (!game) return <div className="p-20 text-center">Game not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/games" className="flex items-center gap-2 text-slate-400 hover:text-neon-green mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Games
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="text-4xl mb-2">{game.icon}</div>
          <h1 className="text-4xl font-bold text-white mb-2">{game.title}</h1>
          <p className="text-slate-400 max-w-xl">{game.description}</p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 glass rounded-xl text-slate-400 hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-3 glass rounded-xl text-slate-400 hover:text-white transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AdPlaceholder label="TOP AD" className="mb-8" />

      {/* Game Container */}
      <div className="relative aspect-video glass rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center justify-center group">
        <div className="absolute inset-0 bg-dark-bg/50 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity">
           <button className="px-10 py-4 bg-neon-green text-dark-bg font-black rounded-2xl neon-glow uppercase tracking-tighter">
             Click to Play
           </button>
        </div>
        
        {/* PASTE HTML5 GAME OR IFRAME HERE */}
        <div className="text-slate-600 font-mono text-sm text-center p-12">
          [ Game Canvas / Iframe Container ]
          <br />
          <span className="text-xs mt-2 block">Game logic for {game.title} would be initialized here.</span>
        </div>

        <button className="absolute bottom-4 right-4 p-2 glass rounded-lg text-slate-400 hover:text-white z-20">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      <AdPlaceholder label="BOTTOM AD" className="mt-8" />
      
      <section className="mt-16 glass p-8 rounded-3xl border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-4">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-400">
          <div>
            <h3 className="text-neon-green font-bold mb-2 uppercase tracking-widest text-xs">Controls</h3>
            <p>Use Arrow Keys or WASD to move. Space to pause.</p>
          </div>
          <div>
            <h3 className="text-neon-green font-bold mb-2 uppercase tracking-widest text-xs">Objective</h3>
            <p>Score as many points as possible without crashing.</p>
          </div>
          <div>
            <h3 className="text-neon-green font-bold mb-2 uppercase tracking-widest text-xs">Tips</h3>
            <p>Stay calm and focus on the rhythm of the game.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
