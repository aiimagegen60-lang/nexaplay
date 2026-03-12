import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Wrench, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import AdPlaceholder from '../components/AdPlaceholder';

export default function Home() {
  const featuredGames = [
    { id: 'snake', name: 'Snake Game', description: 'Classic retro snake action.', icon: '🐍' },
    { id: 'flappy', name: 'Flappy Bird', description: 'Avoid pipes, fly high.', icon: '🐦' },
    { id: 'tetris', name: 'Tetris', description: 'The ultimate puzzle game.', icon: '🧱' },
  ];

  const featuredTools = [
    { id: 'age-bmi-combined', name: 'Age & BMI', description: 'Calculate both in one click.', icon: '⚡' },
    { id: 'age-calculator', name: 'Age Calculator & Horoscope', description: 'Find your exact age.', icon: '📅' },
    { id: 'bmi-calculator', name: 'Advanced BMI', description: 'BMI, Diet & Weight Plan.', icon: '⚖️' },
    { id: 'password-generator', name: 'Password Gen', description: 'Secure random passwords.', icon: '🔐' },
  ];

  const healthTools = [
    { id: 'bmi-calculator', name: 'BMI Calculator', description: 'Check your health index.', icon: '⚖️' },
    { id: 'ideal-weight-calculator', name: 'Ideal Weight', description: 'Find your target weight.', icon: '🎯' },
    { id: 'calorie-calculator', name: 'Calorie Needs', description: 'Daily nutrition guide.', icon: '🍎' },
    { id: 'body-fat-calculator', name: 'Body Fat %', description: 'Analyze body composition.', icon: '📉' },
    { id: 'water-intake-calculator', name: 'Water Intake', description: 'Stay perfectly hydrated.', icon: '💧' },
    { id: 'sleep-cycle-calculator', name: 'Sleep Cycle', description: 'Wake up refreshed.', icon: '🌙' },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Play Free Games & Use <span className="text-neon-green">Smart Tools</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Experience the next generation of online gaming and utility tools. 
            No downloads, no subscriptions, just pure performance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              to="/games" 
              className="px-8 py-4 bg-neon-green text-dark-bg font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 neon-glow"
            >
              <Gamepad2 className="w-5 h-5" />
              Play Games
            </Link>
            <Link 
              to="/tools" 
              className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Wrench className="w-5 h-5" />
              Explore Tools
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[120px] -z-10" />
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AdPlaceholder label="TOP AD" className="mb-12" />

        {/* Featured Games */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Gamepad2 className="text-neon-green" />
              Featured Games
            </h2>
            <Link to="/games" className="text-neon-green hover:underline flex items-center gap-1 text-sm font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGames.map((game, idx) => (
              <motion.div
                key={game.id}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-green/50 transition-all group"
              >
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{game.description}</p>
                <Link 
                  to={`/games/${game.id}`}
                  className="w-full py-3 glass rounded-xl text-center text-sm font-bold text-white group-hover:bg-neon-green group-hover:text-dark-bg transition-all block"
                >
                  Play Now
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <AdPlaceholder label="MIDDLE AD" className="mb-20" />

        {/* Featured Tools */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="text-neon-green" />
              Smart Tools
            </h2>
            <Link to="/tools" className="text-neon-green hover:underline flex items-center gap-1 text-sm font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ scale: 1.02 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-all"
              >
                <div className="text-3xl mb-4">{tool.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
                <p className="text-slate-400 text-xs mb-4">{tool.description}</p>
                <Link 
                  to={`/tools/${tool.id}`}
                  className="text-neon-green text-sm font-bold hover:underline flex items-center gap-1"
                >
                  Open Tool <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Health & Fitness Tools */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Heart className="text-neon-green" />
              Health & Fitness Tools
            </h2>
            <Link to="/tools" className="text-neon-green hover:underline flex items-center gap-1 text-sm font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthTools.map((tool) => (
              <motion.div
                key={tool.id}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-neon-green/50 transition-all group"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{tool.description}</p>
                <Link 
                  to={`/tools/${tool.id}`}
                  className="w-full py-3 glass rounded-xl text-center text-sm font-bold text-white group-hover:bg-neon-green group-hover:text-dark-bg transition-all block"
                >
                  Open Tool
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <AdPlaceholder label="BOTTOM AD" />
      </div>
    </div>
  );
}
