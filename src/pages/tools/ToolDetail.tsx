import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, RefreshCw, Type, Hash, Sparkles, AlertTriangle, CheckCircle, Star, Moon, Sun, Zap, Heart, Briefcase, Gem, Fingerprint, Activity, Compass, Scale, Clock, Utensils, Dumbbell, Calendar, User, Info, Droplets, Bed, Percent, Ruler, ShieldCheck, CaseSensitive, Share2, Check } from 'lucide-react';
import AdPlaceholder from '../../components/AdPlaceholder';
import { cn } from '../../utils/cn';

// Simple Tool Implementations
const ObesityConversion = () => (
  <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
    <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-3xl">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h5 className="text-white font-bold mb-1">Your BMI indicates obesity — would you like a free weight loss guide?</h5>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your BMI indicates obesity. This may increase the risk of health issues such as heart disease, diabetes, and high blood pressure.
          </p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="glass p-6 rounded-3xl border border-white/5">
        <h5 className="text-white font-bold mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-neon-green" />
          Quick Tips to Start Improving Your Health
        </h5>
        <ul className="space-y-3">
          {[
            "Reduce sugar and processed foods",
            "Walk or exercise for at least 30 minutes daily",
            "Drink more water and avoid sugary drinks",
            "Increase vegetables, fiber, and protein in meals",
            "Maintain a consistent sleep schedule"
          ].map((tip, i) => (
            <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
              <span className="text-neon-green mt-0.5 font-bold">{i + 1}️⃣</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="glass p-6 rounded-3xl border border-neon-green/20 bg-neon-green/5">
        <h5 className="text-white font-bold mb-2">Want Faster and Safer Weight Loss?</h5>
        <p className="text-xs text-slate-400 mb-4">Our detailed diet and fitness guide helps you lose weight step by step with structured meal plans and workout routines.</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {[
            "30-Day diet plan",
            "Beginner workout routine",
            "Fat loss tips",
            "Weekly progress guide"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] text-slate-300 font-bold uppercase tracking-tighter">
              <CheckCircle className="w-3 h-3 text-neon-green" />
              {item}
            </div>
          ))}
        </div>
        <button className="w-full py-3 bg-neon-green text-dark-bg font-black rounded-xl text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(0,255,159,0.2)]">
          View Complete Diet Course
        </button>
      </div>
    </div>

    <div className="p-6 glass rounded-3xl border border-white/5 text-center">
      <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">What You'll Learn</h5>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "Healthy meal planning",
          "Portion control",
          "Fat burning habits",
          "Long-term weight management"
        ].map((item, i) => (
          <div key={i} className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-white/5">
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PasswordGenerator = () => {
  const [mode, setMode] = React.useState<'random' | 'custom'>('random');
  const [length, setLength] = React.useState(16);
  const [password, setPassword] = React.useState('');
  
  // Custom mode states
  const [baseWords, setBaseWords] = React.useState('');
  const [customDigits, setCustomDigits] = React.useState('');
  const [includeSymbols, setIncludeSymbols] = React.useState(true);
  const [includeNumbers, setIncludeNumbers] = React.useState(true);
  const [includeUppercase, setIncludeUppercase] = React.useState(true);
  const [includeLowercase, setIncludeLowercase] = React.useState(true);
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLengthChange = (val: string) => {
    const num = parseInt(val);
    if (isNaN(num)) return;
    setLength(Math.min(Math.max(num, 4), 128));
  };

  const handleCustomDigitsChange = (val: string) => {
    // Only allow numbers
    const numericVal = val.replace(/[^0-9]/g, '');
    setCustomDigits(numericVal);
  };

  const generate = () => {
    if (mode === 'random') {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
      let retVal = "";
      for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      setPassword(retVal);
    } else {
      let result = baseWords;
      if (customDigits) result += customDigits;
      
      const symbols = "!@#$%^&*()_+";
      const numbers = "0123456789";
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lower = "abcdefghijklmnopqrstuvwxyz";

      if (includeSymbols) {
        for(let i=0; i<2; i++) result += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
      if (includeNumbers && !customDigits) {
        for(let i=0; i<2; i++) result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      if (includeUppercase) {
        for(let i=0; i<1; i++) result += upper.charAt(Math.floor(Math.random() * upper.length));
      }
      if (includeLowercase && !baseWords) {
        for(let i=0; i<2; i++) result += lower.charAt(Math.floor(Math.random() * lower.length));
      }
      
      // If empty, fallback to random
      if (!result) {
        const charset = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 12; i++) {
          result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
      }
      
      // Shuffle the result for better security
      const shuffled = result.split('').sort(() => Math.random() - 0.5).join('');
      setPassword(shuffled);
    }
  };

  React.useEffect(() => {
    if (mode === 'random') generate();
  }, [length, mode]);

  return (
    <div className="space-y-8">
      {/* Mode Switcher */}
      <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/5 max-w-sm mx-auto">
        <button 
          onClick={() => setMode('random')}
          className={cn(
            "flex-1 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all",
            mode === 'random' ? "bg-neon-green text-dark-bg shadow-[0_0_20px_rgba(0,255,159,0.3)]" : "text-slate-500 hover:text-white"
          )}
        >
          Random Mode
        </button>
        <button 
          onClick={() => setMode('custom')}
          className={cn(
            "flex-1 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl transition-all",
            mode === 'custom' ? "bg-neon-green text-dark-bg shadow-[0_0_20px_rgba(0,255,159,0.3)]" : "text-slate-500 hover:text-white"
          )}
        >
          Custom Mode
        </button>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
        <input 
          type="text" 
          readOnly 
          value={password} 
          className="relative w-full glass p-8 rounded-2xl text-3xl font-mono text-neon-green border-none focus:ring-0 text-center tracking-wider"
        />
        <button 
          onClick={handleCopy}
          className={cn(
            "absolute right-6 top-1/2 -translate-y-1/2 p-4 glass rounded-2xl transition-all",
            copied ? "text-neon-green scale-110 bg-neon-green/10" : "text-slate-400 hover:text-neon-green hover:scale-110"
          )}
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
        </button>
      </div>

      {mode === 'random' ? (
        <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Password Length</label>
              <div className="flex items-center gap-2">
                <input 
                  type="number"
                  min="4"
                  max="128"
                  value={length}
                  onChange={(e) => handleLengthChange(e.target.value)}
                  className="w-16 bg-white/5 border border-white/10 rounded-lg p-1 text-center text-neon-green font-mono text-xl focus:ring-1 focus:ring-neon-green/50 outline-none"
                />
              </div>
            </div>
            <input 
              type="range" 
              min="4" 
              max="128" 
              value={length} 
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-neon-green"
            />
          </div>
          <button 
            onClick={generate} 
            className="w-full py-4 glass rounded-2xl text-neon-green font-black uppercase tracking-widest hover:bg-neon-green hover:text-dark-bg transition-all flex items-center justify-center gap-3"
          >
            <RefreshCw className="w-5 h-5" />
            Regenerate
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Base Content Section */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-2">Core Content</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Type className="w-4 h-4" />
                  <label className="text-[10px] font-black uppercase tracking-widest">Base Words</label>
                </div>
                <input 
                  type="text"
                  placeholder="e.g. Nexa, Player"
                  value={baseWords}
                  onChange={(e) => setBaseWords(e.target.value)}
                  className="w-full bg-white/5 p-4 rounded-2xl text-white border border-white/5 focus:border-neon-green/50 focus:ring-0 transition-colors text-sm"
                />
              </div>
              
              <div className="glass p-6 rounded-3xl border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <Hash className="w-4 h-4" />
                  <label className="text-[10px] font-black uppercase tracking-widest">Custom Digits</label>
                </div>
                <input 
                  type="text"
                  placeholder="e.g. 2024, 777"
                  value={customDigits}
                  onChange={(e) => handleCustomDigitsChange(e.target.value)}
                  className="w-full bg-white/5 p-4 rounded-2xl text-white border border-white/5 focus:border-neon-green/50 focus:ring-0 transition-colors text-sm"
                />
              </div>
            </div>
          </div>

          {/* Character Rules Section */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-2">Character Injections</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Uppercase', state: includeUppercase, setter: setIncludeUppercase, icon: <CaseSensitive className="w-4 h-4" /> },
                { label: 'Lowercase', state: includeLowercase, setter: setIncludeLowercase, icon: <Type className="w-4 h-4" /> },
                { label: 'Numbers', state: includeNumbers, setter: setIncludeNumbers, icon: <Hash className="w-4 h-4" /> },
                { label: 'Symbols', state: includeSymbols, setter: setIncludeSymbols, icon: <Sparkles className="w-4 h-4" /> },
              ].map((toggle) => (
                <button
                  key={toggle.label}
                  onClick={() => toggle.setter(!toggle.state)}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-3xl border transition-all",
                    toggle.state 
                      ? "bg-neon-green/10 border-neon-green/30 text-neon-green" 
                      : "glass border-white/5 text-slate-500 hover:text-white"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-colors",
                    toggle.state ? "bg-neon-green/20" : "bg-white/5"
                  )}>
                    {toggle.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest">{toggle.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={generate}
            className="w-full py-8 bg-neon-green text-dark-bg font-black rounded-3xl shadow-[0_20px_50px_rgba(0,255,159,0.3)] hover:shadow-[0_25px_60px_rgba(0,255,159,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-4 group"
          >
            <ShieldCheck className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Generate Custom Password
          </button>
        </div>
      )}
    </div>
  );
};

const NUMEROLOGY_DATA: Record<number, any> = {
  1: { traits: ['Leader', 'Independent', 'Ambitious'], challenges: ['Stubbornness', 'Impatience'], advice: 'Focus on your unique path and lead with confidence today. Avoid being overly critical of others.' },
  2: { traits: ['Diplomatic', 'Sensitive', 'Cooperative'], challenges: ['Over-sensitivity', 'Indecision'], advice: 'Seek harmony in your interactions. Trust your intuition but don\'t let others sway your decisions too easily.' },
  3: { traits: ['Creative', 'Expressive', 'Optimistic'], challenges: ['Scattered focus', 'Emotional sensitivity'], advice: 'Focus on creativity and communication. Avoid overthinking small issues and let your light shine.' },
  4: { traits: ['Practical', 'Disciplined', 'Reliable'], challenges: ['Rigidity', 'Stubbornness'], advice: 'Build strong foundations today. Stay organized but remain open to new ways of doing things.' },
  5: { traits: ['Adventurous', 'Versatile', 'Curious'], challenges: ['Restlessness', 'Impulsiveness'], advice: 'Embrace change and freedom. Stay adaptable but try to maintain a sense of direction.' },
  6: { traits: ['Nurturing', 'Responsible', 'Harmonious'], challenges: ['Self-sacrifice', 'Perfectionism'], advice: 'Focus on home and service. Take care of others but don\'t forget to nurture yourself as well.' },
  7: { traits: ['Analytical', 'Introspective', 'Spiritual'], challenges: ['Isolation', 'Skepticism'], advice: 'Seek knowledge and inner truth. Spend time in reflection but stay connected to the world.' },
  8: { traits: ['Ambitious', 'Powerful', 'Materialistic'], challenges: ['Workaholism', 'Authoritarianism'], advice: 'Focus on abundance and achievement. Use your power wisely and maintain a balance between work and life.' },
  9: { traits: ['Compassionate', 'Idealistic', 'Humanitarian'], challenges: ['Emotional baggage', 'Over-idealism'], advice: 'Focus on global awareness and endings. Let go of what no longer serves you and help others.' }
};

const calculateLifePathNumber = (date: Date) => {
  const digits = date.toISOString().split('T')[0].replace(/-/g, '');
  let sum = digits.split('').reduce((acc, d) => acc + parseInt(d), 0);
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  
  // For simplicity in this tool, we'll reduce master numbers to single digits as per user example logic
  if (sum > 9) {
    sum = sum.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  
  return sum;
};

const ZODIAC_DATA: Record<string, any> = {
  Aries: { rashi: 'Mesh', element: 'Fire', color: 'Red', number: 9, horoscope: 'A day of energy and new beginnings. Take the lead in projects.', career: 'Focus on leadership roles.', relationship: 'Be bold but patient.', energy: 'High - perfect for physical activity.' },
  Taurus: { rashi: 'Vrishabh', element: 'Earth', color: 'Pink', number: 6, horoscope: 'Stability is key today. Trust your instincts on financial matters.', career: 'Steady progress is better than rushing.', relationship: 'Show appreciation for loved ones.', energy: 'Moderate - focus on endurance.' },
  Gemini: { rashi: 'Mithun', element: 'Air', color: 'Green', number: 5, horoscope: 'Communication flows easily. A great day for networking and ideas.', career: 'New ideas will be well-received.', relationship: 'Engage in deep conversations.', energy: 'Vibrant - great for social interaction.' },
  Cancer: { rashi: 'Kark', element: 'Water', color: 'White', number: 2, horoscope: 'Emotions are strong. Focus on home and personal comfort.', career: 'Trust your intuition at work.', relationship: 'Nurture your closest bonds.', energy: 'Calm - prioritize self-care.' },
  Leo: { rashi: 'Simha', element: 'Fire', color: 'Gold', number: 1, horoscope: 'Your charisma shines. It is your time to be in the spotlight.', career: 'Recognition for your efforts is coming.', relationship: 'Generosity will strengthen bonds.', energy: 'Radiant - use it to inspire others.' },
  Virgo: { rashi: 'Kanya', element: 'Earth', color: 'Silver', number: 5, horoscope: 'Attention to detail pays off. Organize your space and mind.', career: 'Efficiency is your superpower today.', relationship: 'Helpfulness is your love language.', energy: 'Focused - ideal for complex tasks.' },
  Libra: { rashi: 'Tula', element: 'Air', color: 'Blue', number: 6, horoscope: 'Balance and harmony are within reach. Seek beauty in everything.', career: 'Collaboration leads to success.', relationship: 'Seek compromise and fairness.', energy: 'Graceful - good for creative work.' },
  Scorpio: { rashi: 'Vrishchik', element: 'Water', color: 'Black', number: 9, horoscope: 'Intensity and passion drive you. Dive deep into your interests.', career: 'Research and investigation are favored.', relationship: 'Deep emotional connections are possible.', energy: 'Powerful - use it with intention.' },
  Sagittarius: { rashi: 'Dhanu', element: 'Fire', color: 'Purple', number: 3, horoscope: 'Adventure awaits. Look at the big picture and stay optimistic.', career: 'Expand your horizons through learning.', relationship: 'Honesty is the best policy.', energy: 'Adventurous - try something new.' },
  Capricorn: { rashi: 'Makar', element: 'Earth', color: 'Brown', number: 8, horoscope: 'Hard work brings results. Stay disciplined and focused on goals.', career: 'Your ambition is driving you forward.', relationship: 'Commitment is highlighted today.', energy: 'Disciplined - good for long-term goals.' },
  Aquarius: { rashi: 'Kumbh', element: 'Air', color: 'Cyan', number: 4, horoscope: 'Innovation is your strength. Think outside the box and be unique.', career: 'Unconventional approaches will work.', relationship: 'Value your independence and space.', energy: 'Electric - great for brainstorming.' },
  Pisces: { rashi: 'Meen', element: 'Water', color: 'Sea Green', number: 7, horoscope: 'Dream big and trust your imagination. Compassion is your guide.', career: 'Creative projects will flourish.', relationship: 'Empathy will heal old wounds.', energy: 'Dreamy - good for artistic pursuits.' }
};

const getZodiacSign = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  return 'Pisces';
};

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<{ 
    years: number; 
    totalMonths: number; 
    totalDays: number;
    zodiac: string;
    zodiacInfo: any;
    lifePath: number;
    numerologyInfo: any;
  } | null>(null);

  const calculateAge = () => {
    setError(null);
    setResult(null);

    if (!birthDate) {
      setError("Please select your birth date.");
      return;
    }

    const birth = new Date(birthDate);
    const now = new Date();

    if (isNaN(birth.getTime())) {
      setError("Invalid date format.");
      return;
    }

    if (birth > now) {
      setError("Birth date cannot be in the future.");
      return;
    }
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;
    const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    
    const zodiac = getZodiacSign(birth);
    const zodiacInfo = ZODIAC_DATA[zodiac];
    
    const lifePath = calculateLifePathNumber(birth);
    const numerologyInfo = NUMEROLOGY_DATA[lifePath];

    setResult({ years, totalMonths, totalDays, zodiac, zodiacInfo, lifePath, numerologyInfo });
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Enter Your Date of Birth</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)}
            className="flex-1 glass p-5 rounded-2xl text-white border-none [color-scheme:dark] focus:ring-2 focus:ring-neon-green/50 transition-all"
          />
          <button 
            onClick={calculateAge}
            className="px-10 py-5 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-xs"
          >
            Calculate My Destiny
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm text-center animate-shake">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* Age Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <Zap className="w-6 h-6 text-neon-green" />
              Your Age Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Years', value: result.years, desc: 'Full Years Lived' },
                { label: 'Months', value: result.totalMonths, desc: 'Total Months' },
                { label: 'Days', value: result.totalDays, desc: 'Total Days' }
              ].map((item) => (
                <div key={item.label} className="glass p-8 rounded-3xl border border-white/5 group hover:border-neon-green/30 transition-all">
                  <p className="text-4xl font-black text-neon-green mb-1">{item.value.toLocaleString()}</p>
                  <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-2">{item.label}</p>
                  <p className="text-[10px] text-slate-600 uppercase font-bold">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Numerology Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <Fingerprint className="w-6 h-6 text-neon-green" />
              Numerology Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Hash className="w-32 h-32 text-neon-green" />
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Life Path Number</p>
                    <p className="text-6xl font-black text-neon-green">{result.lifePath}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Strengths</p>
                      <div className="flex flex-wrap gap-2">
                        {result.numerologyInfo.traits.map((trait: string) => (
                          <span key={trait} className="px-3 py-1 bg-neon-green/10 text-neon-green text-[10px] font-bold rounded-full border border-neon-green/20 uppercase">{trait}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Challenges</p>
                      <div className="flex flex-wrap gap-2">
                        {result.numerologyInfo.challenges.map((challenge: string) => (
                          <span key={challenge} className="px-3 py-1 bg-red-500/10 text-red-400 text-[10px] font-bold rounded-full border border-red-500/20 uppercase">{challenge}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-[2rem] border border-white/5">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-neon-green" />
                  Today's Numerology Advice
                </h4>
                <p className="text-lg text-white font-medium leading-relaxed italic">
                  "{result.numerologyInfo.advice}"
                </p>
                <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-2">Quick Insight</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Your number {result.lifePath} suggests that today is a day for {result.lifePath % 2 === 0 ? 'stability and focus' : 'exploration and expression'}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Zodiac Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Moon className="w-32 h-32 text-neon-green" />
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-500" />
                Zodiac Identity
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Your Zodiac Sign</p>
                  <p className="text-3xl font-black text-white">{result.zodiac} <span className="text-neon-green">({result.zodiacInfo.rashi})</span></p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Element</p>
                    <p className="text-sm font-bold text-white">{result.zodiacInfo.element}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Color</p>
                    <p className="text-sm font-bold text-white">{result.zodiacInfo.color}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Number</p>
                    <p className="text-sm font-bold text-white">{result.zodiacInfo.number}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
                <Sun className="w-6 h-6 text-orange-500" />
                Today's Horoscope
              </h3>
              <div className="space-y-6">
                <p className="text-slate-400 leading-relaxed italic">"{result.zodiacInfo.horoscope}"</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    <p className="text-sm text-slate-300"><span className="font-bold text-white">Career:</span> {result.zodiacInfo.career}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <p className="text-sm text-slate-300"><span className="font-bold text-white">Relationship:</span> {result.zodiacInfo.relationship}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <p className="text-sm text-slate-300"><span className="font-bold text-white">Energy:</span> {result.zodiacInfo.energy}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="glass p-8 rounded-[2rem] border border-white/5">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-neon-green" />
              Astrology Tips for Today
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Meditate for 10 minutes to align your energy centers.",
                "Wear your lucky color to attract positive vibrations.",
                "Avoid making major financial decisions during Rahu Kaal.",
                "Practice gratitude to enhance your planetary influences.",
                "Stay hydrated to keep your element in balance."
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-neon-green shrink-0 mt-1" />
                  <p className="text-sm text-slate-400 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Section */}
          <div className="p-1 bg-gradient-to-r from-neon-green/20 via-yellow-500/20 to-neon-green/20 rounded-[2.5rem]">
            <div className="glass p-10 rounded-[2.4rem] border border-white/10 text-center space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Unlock Your Full Destiny Report</h3>
                <p className="text-slate-400 max-w-lg mx-auto">Unlock the secrets of your destiny with our comprehensive planetary analysis, numerology insights, and future predictions.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Personalized birth chart",
                  "Marriage compatibility",
                  "Career astrology",
                  "Financial growth",
                  "Numerology analysis",
                  "Future predictions"
                ].map((item) => (
                  <div key={item} className="px-5 py-2 bg-white/5 rounded-full border border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {item}
                  </div>
                ))}
              </div>

              <button className="px-12 py-6 bg-white text-dark-bg font-black rounded-2xl hover:bg-neon-green transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto group">
                <Gem className="w-5 h-5 group-hover:animate-bounce" />
                Get Full Destiny Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const NumerologyCalculator = () => {
  const [birthDate, setBirthDate] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<{ lifePath: number; info: any } | null>(null);

  const calculate = () => {
    setError(null);
    setResult(null);

    if (!birthDate) {
      setError("Please select your birth date.");
      return;
    }

    const birth = new Date(birthDate);
    if (isNaN(birth.getTime())) {
      setError("Invalid date format.");
      return;
    }

    const lifePath = calculateLifePathNumber(birth);
    setResult({ lifePath, info: NUMEROLOGY_DATA[lifePath] });
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Date of Birth</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)}
            className="flex-1 glass p-5 rounded-2xl text-white border-none [color-scheme:dark]"
          />
          <button 
            onClick={calculate}
            className="px-10 py-5 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-105 transition-transform uppercase tracking-widest text-xs"
          >
            Calculate My Number
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="glass p-10 rounded-[2.5rem] border border-white/5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Fingerprint className="w-64 h-64 text-neon-green" />
            </div>
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">Your Life Path Number</p>
            <p className="text-9xl font-black text-neon-green mb-8">{result.lifePath}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <Star className="w-4 h-4 text-neon-green" />
                  Personality Traits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.info.traits.map((trait: string) => (
                    <span key={trait} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-xs font-bold text-slate-300 uppercase tracking-tighter">{trait}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Key Challenges
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.info.challenges.map((challenge: string) => (
                    <span key={challenge} className="px-4 py-2 bg-red-500/5 rounded-xl border border-red-500/10 text-xs font-bold text-red-400/80 uppercase tracking-tighter">{challenge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-[2rem] border border-white/5">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-neon-green" />
              Today's Numerology Advice
            </h4>
            <p className="text-xl text-white font-medium leading-relaxed italic">
              "{result.info.advice}"
            </p>
          </div>

          <div className="p-1 bg-gradient-to-r from-neon-green/20 via-yellow-500/20 to-neon-green/20 rounded-[2.5rem]">
            <div className="glass p-10 rounded-[2.4rem] border border-white/10 text-center space-y-8">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Unlock Your Full Numerology Report</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Personality Analysis", "Career Guidance", "Relationship Compatibility", "Future Predictions"].map(item => (
                  <div key={item} className="p-4 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {item}
                  </div>
                ))}
              </div>
              <button className="px-12 py-6 bg-white text-dark-bg font-black rounded-2xl hover:bg-neon-green transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto">
                <Gem className="w-5 h-5" />
                Get Full Numerology Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PremiumHealthPlan = () => (
  <div className="mt-12 p-1 bg-gradient-to-r from-neon-green/20 via-blue-500/20 to-neon-green/20 rounded-[2.5rem]">
    <div className="glass p-10 rounded-[2.4rem] border border-white/10 text-center space-y-8">
      <div className="space-y-2">
        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Want a Personalized Health Plan?</h3>
        <p className="text-slate-400 max-w-lg mx-auto">Unlock a comprehensive 30-day transformation guide tailored to your unique health profile, including diet, workouts, and habit tracking.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["30-Day Diet Plan", "Weight Loss Strategy", "Workout Routine", "Habit Tracking"].map(item => (
          <div key={item} className="p-4 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
            {item}
          </div>
        ))}
      </div>

      <button className="px-12 py-6 bg-white text-dark-bg font-black rounded-2xl hover:bg-neon-green transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto group">
        <Gem className="w-5 h-5 group-hover:animate-bounce" />
        Get My Personalized Plan
      </button>
    </div>
  </div>
);

const HeightInput = ({ 
  value, 
  onChange, 
  label = "Height", 
  labelClassName = "text-[10px] font-black text-slate-500 uppercase tracking-widest",
  inputClassName = "w-full glass p-5 rounded-2xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
}: { 
  value: string, 
  onChange: (val: string) => void, 
  label?: string, 
  labelClassName?: string,
  inputClassName?: string
}) => {
  const [unit, setUnit] = React.useState<'cm' | 'ft'>('cm');
  const [ft, setFt] = React.useState('');
  const [inch, setInch] = React.useState('');

  const handleCmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleFtInChange = (f: string, i: string) => {
    setFt(f);
    setInch(i);
    const feet = parseFloat(f) || 0;
    const inches = parseFloat(i) || 0;
    const totalCm = (feet * 30.48) + (inches * 2.54);
    onChange(totalCm > 0 ? totalCm.toFixed(1) : '');
  };

  const toggleUnit = (newUnit: 'cm' | 'ft') => {
    if (newUnit === unit) return;
    
    if (newUnit === 'ft' && value) {
      const totalInches = parseFloat(value) / 2.54;
      const f = Math.floor(totalInches / 12);
      const i = Math.round(totalInches % 12);
      setFt(f.toString());
      setInch(i.toString());
    } else if (newUnit === 'cm' && ft) {
      const feet = parseFloat(ft) || 0;
      const inches = parseFloat(inch) || 0;
      const totalCm = (feet * 30.48) + (inches * 2.54);
      onChange(totalCm.toFixed(1));
    }
    setUnit(newUnit);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className={labelClassName}>{label}</label>
        <div className="flex bg-white/5 rounded-lg p-0.5">
          <button 
            type="button"
            onClick={() => toggleUnit('cm')}
            className={cn("px-2 py-1 text-[8px] font-bold rounded-md transition-all", unit === 'cm' ? "bg-neon-green text-dark-bg" : "text-slate-400")}
          >
            CM
          </button>
          <button 
            type="button"
            onClick={() => toggleUnit('ft')}
            className={cn("px-2 py-1 text-[8px] font-bold rounded-md transition-all", unit === 'ft' ? "bg-neon-green text-dark-bg" : "text-slate-400")}
          >
            FT/IN
          </button>
        </div>
      </div>
      
      {unit === 'cm' ? (
        <input 
          type="number" 
          value={value} 
          onChange={handleCmChange}
          placeholder="cm"
          className={inputClassName}
        />
      ) : (
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input 
              type="number" 
              value={ft} 
              onChange={(e) => handleFtInChange(e.target.value, inch)}
              placeholder="ft"
              className={cn(inputClassName, "pr-10")}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-500 uppercase">ft</span>
          </div>
          <div className="relative flex-1">
            <input 
              type="number" 
              value={inch} 
              onChange={(e) => handleFtInChange(ft, e.target.value)}
              placeholder="in"
              className={cn(inputClassName, "pr-10")}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-500 uppercase">in</span>
          </div>
        </div>
      )}
    </div>
  );
};

const IdealWeightCalculator = () => {
  const [height, setHeight] = React.useState<string>('170');
  const [weight, setWeight] = React.useState<string>('70');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [result, setResult] = React.useState<{ min: number; max: number; diff: number; action: 'gain' | 'lose' | 'maintain' } | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || h <= 0 || isNaN(w) || w <= 0) return;
    
    const min = parseFloat((18.5 * ((h / 100) ** 2)).toFixed(1));
    const max = parseFloat((24.9 * ((h / 100) ** 2)).toFixed(1));
    
    let diff = 0;
    let action: 'gain' | 'lose' | 'maintain' = 'maintain';
    
    if (w > max) {
      diff = parseFloat((w - max).toFixed(1));
      action = 'lose';
    } else if (w < min) {
      diff = parseFloat((min - w).toFixed(1));
      action = 'gain';
    }
    
    setResult({ min, max, diff, action });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HeightInput value={height} onChange={setHeight} />
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Current Weight (kg)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            className="w-full glass p-5 rounded-2xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gender</label>
          <div className="flex gap-2">
            {['male', 'female'].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g as any)}
                className={cn(
                  "flex-1 py-4 rounded-2xl font-bold uppercase text-xs transition-all border border-white/5",
                  gender === g ? "bg-neon-green text-dark-bg" : "glass text-slate-400 hover:bg-white/5"
                )}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button onClick={calculate} className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm">
        Calculate Ideal Weight
      </button>

      {result && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="glass p-10 rounded-[2.5rem] border border-white/5 text-center space-y-4">
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Your Healthy Weight Range</p>
            <p className="text-6xl font-black text-white">{result.min} kg – {result.max} kg</p>
            <p className="text-slate-400 text-sm">Based on a healthy BMI range of 18.5 to 24.9.</p>
          </div>

          {result.action !== 'maintain' ? (
            <div className={cn(
              "glass p-8 rounded-[2rem] border text-center space-y-2",
              result.action === 'lose' ? "border-red-500/20 bg-red-500/5" : "border-blue-500/20 bg-blue-500/5"
            )}>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Recommendation</p>
              <p className="text-2xl font-black text-white">
                You should {result.action} <span className={result.action === 'lose' ? "text-red-400" : "text-blue-400"}>{result.diff} kg</span> to reach your ideal range.
              </p>
            </div>
          ) : (
            <div className="glass p-8 rounded-[2rem] border border-neon-green/20 bg-neon-green/5 text-center">
              <p className="text-2xl font-black text-neon-green uppercase tracking-tighter">You are at an ideal weight!</p>
            </div>
          )}
        </div>
      )}

      <PremiumHealthPlan />
    </div>
  );
};

const CalorieCalculator = () => {
  const [weight, setWeight] = React.useState<string>('70');
  const [height, setHeight] = React.useState<string>('170');
  const [age, setAge] = React.useState<string>('25');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [activity, setActivity] = React.useState<'sedentary' | 'light' | 'moderate' | 'very'>('sedentary');
  const [result, setResult] = React.useState<{ maintenance: number; loss: number } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);
    if (isNaN(w) || isNaN(h) || isNaN(a)) return;

    const bmr = gender === 'male' 
      ? (10 * w) + (6.25 * h) - (5 * a) + 5
      : (10 * w) + (6.25 * h) - (5 * a) - 161;
    
    const multipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725 };
    const maintenance = Math.round(bmr * multipliers[activity]);
    setResult({ maintenance, loss: maintenance - 500 });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
        </div>
        <HeightInput value={height} onChange={setHeight} />
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gender</label>
          <div className="flex gap-2">
            {['male', 'female'].map((g) => (
              <button key={g} onClick={() => setGender(g as any)} className={cn("flex-1 py-4 rounded-2xl font-bold uppercase text-xs border border-white/5", gender === g ? "bg-neon-green text-dark-bg" : "glass text-slate-400")}>{g}</button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Activity Level</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value as any)} className="w-full glass p-5 rounded-2xl text-white border-none appearance-none">
            <option value="sedentary">Sedentary (Little/No Exercise)</option>
            <option value="light">Lightly Active (1-3 days/week)</option>
            <option value="moderate">Moderately Active (3-5 days/week)</option>
            <option value="very">Very Active (6-7 days/week)</option>
          </select>
        </div>
      </div>

      <button onClick={calculate} className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm">
        Calculate Calories
      </button>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="glass p-8 rounded-[2rem] border border-white/5 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Maintenance Calories</p>
            <p className="text-4xl font-black text-white">{result.maintenance.toLocaleString()} <span className="text-sm text-slate-500">kcal</span></p>
          </div>
          <div className="glass p-8 rounded-[2rem] border border-neon-green/20 text-center">
            <p className="text-[10px] font-black text-neon-green uppercase tracking-widest mb-2">Weight Loss Calories</p>
            <p className="text-4xl font-black text-white">{result.loss.toLocaleString()} <span className="text-sm text-slate-500">kcal</span></p>
          </div>
        </div>
      )}

      <PremiumHealthPlan />
    </div>
  );
};

const BodyFatCalculator = () => {
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [height, setHeight] = React.useState<string>('170');
  const [weight, setWeight] = React.useState<string>('70');
  const [waist, setWaist] = React.useState<string>('80');
  const [neck, setNeck] = React.useState<string>('40');
  const [hip, setHip] = React.useState<string>('90');
  const [result, setResult] = React.useState<{ percentage: number; category: string } | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hi = parseFloat(hip);
    if (isNaN(h) || isNaN(w) || isNaN(n)) return;

    let fatPercentage = 0;
    if (gender === 'male') {
      fatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      if (isNaN(hi)) return;
      fatPercentage = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.221 * Math.log10(h)) - 450;
    }

    const getCategory = (p: number) => {
      if (gender === 'male') {
        if (p < 6) return 'Essential Fat';
        if (p < 14) return 'Athletes';
        if (p < 18) return 'Fitness';
        if (p < 25) return 'Average';
        return 'Obese';
      } else {
        if (p < 14) return 'Essential Fat';
        if (p < 21) return 'Athletes';
        if (p < 25) return 'Fitness';
        if (p < 32) return 'Average';
        return 'Obese';
      }
    };

    setResult({ percentage: parseFloat(fatPercentage.toFixed(1)), category: getCategory(fatPercentage) });
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gender</label>
          <div className="flex gap-2">
            {['male', 'female'].map((g) => (
              <button key={g} onClick={() => setGender(g as any)} className={cn("flex-1 py-4 rounded-2xl font-bold uppercase text-xs border border-white/5", gender === g ? "bg-neon-green text-dark-bg" : "glass text-slate-400")}>{g}</button>
            ))}
          </div>
        </div>
        <HeightInput value={height} onChange={setHeight} />
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Waist (cm)</label>
          <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Neck (cm)</label>
          <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
        </div>
        {gender === 'female' && (
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Hip (cm)</label>
            <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
          </div>
        )}
      </div>

      <button onClick={calculate} className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm">
        Calculate Body Fat
      </button>

      {result && (
        <div className="glass p-10 rounded-[2.5rem] border border-white/5 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Estimated Body Fat</p>
          <p className="text-7xl font-black text-white">{result.percentage}%</p>
          <p className="text-neon-green font-black uppercase tracking-widest">Category: {result.category}</p>
        </div>
      )}

      <PremiumHealthPlan />
    </div>
  );
};

const WaterIntakeCalculator = () => {
  const [weight, setWeight] = React.useState<string>('70');
  const [activity, setActivity] = React.useState<string>('30');
  const [result, setResult] = React.useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const a = parseFloat(activity);
    if (isNaN(w) || isNaN(a)) return;
    // Basic formula: Weight (kg) * 0.033 + (Activity mins / 30 * 0.35)
    const intake = (w * 0.033) + (a / 30 * 0.35);
    setResult(parseFloat(intake.toFixed(1)));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Daily Activity (minutes)</label>
          <input type="number" value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none" />
        </div>
      </div>

      <button onClick={calculate} className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm">
        Calculate Water Intake
      </button>

      {result && (
        <div className="glass p-10 rounded-[2.5rem] border border-white/5 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
          <Droplets className="w-12 h-12 text-blue-400 mx-auto mb-2" />
          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Recommended Daily Intake</p>
          <p className="text-7xl font-black text-white">{result} <span className="text-2xl text-slate-500">Liters</span></p>
          <p className="text-slate-400 text-sm">Stay hydrated for peak performance and recovery.</p>
        </div>
      )}

      <PremiumHealthPlan />
    </div>
  );
};

const SleepCycleCalculator = () => {
  const [time, setTime] = React.useState<string>('07:00');
  const [mode, setMode] = React.useState<'wake' | 'sleep'>('wake');
  const [cycles, setCycles] = React.useState<string[]>([]);

  const calculate = () => {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0);

    const results = [];
    if (mode === 'wake') {
      // If I want to wake up at X, when should I sleep?
      // 6 cycles (9h), 5 cycles (7.5h), 4 cycles (6h), 3 cycles (4.5h)
      for (let i = 6; i >= 3; i--) {
        const d = new Date(date.getTime() - (i * 90 * 60 * 1000) - (15 * 60 * 1000)); // 15 mins to fall asleep
        results.push(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    } else {
      // If I sleep at X, when should I wake up?
      for (let i = 3; i <= 6; i++) {
        const d = new Date(date.getTime() + (i * 90 * 60 * 1000) + (15 * 60 * 1000));
        results.push(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    }
    setCycles(results);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-4">
        <button onClick={() => setMode('wake')} className={cn("px-6 py-3 rounded-xl font-bold text-xs uppercase transition-all", mode === 'wake' ? "bg-neon-green text-dark-bg" : "glass text-slate-400")}>I want to wake up at...</button>
        <button onClick={() => setMode('sleep')} className={cn("px-6 py-3 rounded-xl font-bold text-xs uppercase transition-all", mode === 'sleep' ? "bg-neon-green text-dark-bg" : "glass text-slate-400")}>I'm going to bed at...</button>
      </div>

      <div className="max-w-xs mx-auto space-y-2">
        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center block">Select Time</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full glass p-5 rounded-2xl text-white border-none text-center text-2xl font-black [color-scheme:dark]" />
      </div>

      <button onClick={calculate} className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm">
        Find Best Times
      </button>

      {cycles.length > 0 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center">
            <Bed className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Ideal {mode === 'wake' ? 'Bedtimes' : 'Wake Times'}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cycles.map((c, i) => (
                <div key={i} className={cn("p-6 rounded-3xl border border-white/5", i === 2 || i === 3 ? "bg-neon-green/10 border-neon-green/20" : "glass")}>
                  <p className="text-2xl font-black text-white">{c}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{6 - i} Cycles</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-slate-400 text-xs italic">Includes 15 minutes to fall asleep. Aim for 5-6 cycles for optimal recovery. A minimum of 6 hours of sleep is essential for good health.</p>
        </div>
      )}

      <div className="flex items-center gap-3 p-4 glass rounded-2xl border border-white/5 text-slate-400">
        <Info className="w-5 h-5 text-neon-green shrink-0" />
        <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
          Health Tip: A minimum of 6 hours of sleep is essential for good health and cognitive function.
        </p>
      </div>

      <PremiumHealthPlan />
    </div>
  );
};

const BMICalculator = () => {
  const [weight, setWeight] = React.useState<string>('70');
  const [height, setHeight] = React.useState<string>('170');
  const [age, setAge] = React.useState<string>('25');
  const [gender, setGender] = React.useState<'male' | 'female'>('male');
  const [activity, setActivity] = React.useState<'sedentary' | 'light' | 'moderate' | 'very'>('sedentary');
  const [error, setError] = React.useState<string | null>(null);
  const [showResult, setShowResult] = React.useState(false);

  const weightNum = parseFloat(weight);
  const heightNum = parseFloat(height);
  const ageNum = parseInt(age);

  const calculate = () => {
    if (!weight || !height || !age) {
      setError("Please fill in all fields.");
      setShowResult(false);
      return;
    }
    if (isNaN(weightNum) || isNaN(heightNum) || isNaN(ageNum) || weightNum <= 0 || heightNum <= 0 || ageNum <= 0) {
      setError("Please enter valid positive numbers.");
      setShowResult(false);
      return;
    }
    setError(null);
    setShowResult(true);
  };

  // BMI Logic
  const bmi = parseFloat((weightNum / ((heightNum / 100) ** 2)).toFixed(1));
  const getCategory = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-blue-400', bg: 'bg-blue-500/10', desc: 'You are below the healthy weight range for your height.' };
    if (val < 25) return { label: 'Normal', color: 'text-neon-green', bg: 'bg-neon-green/10', desc: 'You are in a healthy weight range for your height.' };
    if (val < 30) return { label: 'Overweight', color: 'text-yellow-400', bg: 'bg-yellow-500/10', desc: 'You are slightly above the healthy weight range.' };
    return { label: 'Obese', color: 'text-red-400', bg: 'bg-red-500/10', desc: 'You are significantly above the healthy weight range.' };
  };
  const category = getCategory(bmi);

  // Ideal Weight Logic
  const minIdeal = parseFloat((18.5 * ((heightNum / 100) ** 2)).toFixed(1));
  const maxIdeal = parseFloat((24.9 * ((heightNum / 100) ** 2)).toFixed(1));
  const weightDiff = weightNum > maxIdeal ? weightNum - maxIdeal : weightNum < minIdeal ? minIdeal - weightNum : 0;

  // Calorie Logic (Mifflin-St Jeor)
  const bmr = gender === 'male' 
    ? (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5
    : (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161;
  
  const activityMultipliers = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725 };
  const tdee = Math.round(bmr * activityMultipliers[activity]);
  const lossCalories = tdee - 500;

  // Timeline Logic
  const weeksToIdeal = Math.ceil(weightDiff / 0.75); // 0.75kg per week average

  const overweightObeseAdvice = [
    {
      title: "Increase Physical Activity",
      desc: "Try to move more throughout the day.",
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      suggestions: ["Walk at least 30–45 minutes daily", "Use stairs instead of elevators", "Try light exercises such as jogging, cycling, or home workouts"]
    },
    {
      title: "Improve Diet Quality",
      desc: "Simple nutritional guidance for better health.",
      icon: <Utensils className="w-5 h-5 text-green-400" />,
      suggestions: ["Reduce fried and processed foods", "Eat more vegetables and fruits", "Include protein sources (eggs, beans, tofu, lean meat)", "Prefer whole grains instead of refined carbs"]
    },
    {
      title: "Portion Control",
      desc: "Overeating contributes significantly to weight gain.",
      icon: <Scale className="w-5 h-5 text-yellow-400" />,
      suggestions: ["Use smaller plates", "Avoid second servings", "Stop eating when 80% full"]
    },
    {
      title: "Stay Hydrated",
      desc: "Hydration is key for metabolism and health.",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
      suggestions: ["Drink 2–3 liters of water daily", "Avoid sugary drinks and sodas", "Prefer water or herbal drinks"]
    },
    {
      title: "Improve Sleep Routine",
      desc: "Quality sleep impacts weight management.",
      icon: <Moon className="w-5 h-5 text-purple-400" />,
      suggestions: ["Sleep 7–8 hours every night", "Avoid late-night snacking", "Maintain a consistent sleep schedule"]
    }
  ];

  const generalAdvice = {
    Underweight: [
      "Focus on nutrient-dense, high-calorie foods",
      "Include healthy fats like avocados and nuts",
      "Try strength training to build muscle mass",
      "Eat smaller, more frequent meals",
      "Consult a nutritionist for a weight gain plan"
    ],
    Normal: [
      "Maintain a balanced diet with whole foods",
      "Keep consistent with physical activity",
      "Focus on hydration and quality sleep",
      "Monitor your weight monthly",
      "Include both cardio and strength training"
    ]
  };

  return (
    <div className="space-y-12">
      {/* Input Section */}
      <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-8">
        <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
          <Scale className="w-6 h-6 text-neon-green" />
          Health Profile
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weight (kg)</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}
              className="w-full glass p-5 rounded-2xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
            />
          </div>
          <HeightInput value={height} onChange={setHeight} />
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Age</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
              className="w-full glass p-5 rounded-2xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Gender</label>
            <div className="flex gap-2">
              {['male', 'female'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g as any)}
                  className={cn(
                    "flex-1 py-4 rounded-2xl font-bold uppercase text-xs transition-all border border-white/5",
                    gender === g ? "bg-neon-green text-dark-bg" : "glass text-slate-400 hover:bg-white/5"
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2 lg:col-span-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Activity Level</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'sedentary', label: 'Sedentary' },
                { id: 'light', label: 'Light' },
                { id: 'moderate', label: 'Moderate' },
                { id: 'very', label: 'Very Active' }
              ].map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActivity(a.id as any)}
                  className={cn(
                    "py-3 rounded-xl font-bold text-[10px] uppercase transition-all border border-white/5",
                    activity === a.id ? "bg-neon-green text-dark-bg" : "glass text-slate-400 hover:bg-white/5"
                  )}
                >
                  {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm"
        >
          Analyze My Health
        </button>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm text-center animate-shake">
            {error}
          </div>
        )}
      </div>

      {showResult && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          {/* BMI Result */}
          <div className={cn("glass p-10 rounded-[2.5rem] border border-white/5 text-center space-y-4", category.bg)}>
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Your BMI Score</p>
            <p className="text-8xl font-black text-white">{bmi}</p>
            <div className="space-y-2">
              <p className={cn("text-2xl font-black uppercase tracking-tighter", category.color)}>
                Category: {category.label}
              </p>
              <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
                {category.desc}
              </p>
            </div>
          </div>

          {/* Ideal Weight & Calories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3">
                <Info className="w-5 h-5 text-neon-green" />
                Ideal Weight Range
              </h3>
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Healthy Range</p>
                  <p className="text-2xl font-black text-white">{minIdeal} kg – {maxIdeal} kg</p>
                </div>
                {weightDiff > 0 && (
                  <div className="p-6 bg-neon-green/5 rounded-2xl border border-neon-green/10">
                    <p className="text-sm text-slate-300">
                      To reach a healthy BMI, you may need to {weightNum > maxIdeal ? 'lose' : 'gain'} approximately <span className="font-black text-neon-green">{weightDiff.toFixed(1)} kg</span>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3">
                <Utensils className="w-5 h-5 text-neon-green" />
                Daily Calorie Needs
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-1">To Maintain Weight</p>
                  <p className="text-2xl font-black text-white">{tdee.toLocaleString()} <span className="text-sm font-bold text-slate-500">kcal</span></p>
                </div>
                <div className="p-6 bg-neon-green/5 rounded-2xl border border-neon-green/10">
                  <p className="text-[10px] text-neon-green uppercase font-black mb-1">For Weight Loss</p>
                  <p className="text-2xl font-black text-neon-green">{lossCalories.toLocaleString()} <span className="text-sm font-bold text-neon-green/50">kcal</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline & Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3">
                <Clock className="w-5 h-5 text-neon-green" />
                Weight Loss Timeline
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-slate-400 uppercase font-bold">Healthy Speed</p>
                  <p className="text-sm font-black text-white">0.5 – 1 kg / week</p>
                </div>
                <div className="text-center p-8 bg-neon-green/5 rounded-[2rem] border border-neon-green/10">
                  <Calendar className="w-8 h-8 text-neon-green mx-auto mb-4" />
                  <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Estimated Time to Goal</p>
                  <p className="text-3xl font-black text-white">{weeksToIdeal} – {Math.ceil(weeksToIdeal * 1.5)} Weeks</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-xs font-black text-white uppercase mb-2">Healthy Weight Goal</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    A safe and healthy weight loss goal is about <span className="text-neon-green font-bold text-sm">0.5–1 kg per week</span> through balanced diet and exercise.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-lg font-black text-white uppercase tracking-tighter flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-neon-green" />
                {bmi >= 25 ? "Healthy Weight Improvement Tips" : "Personalized Advice"}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {bmi >= 25 ? (
                  overweightObeseAdvice.map((item, i) => (
                    <div key={i} className="space-y-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-neon-green/20 transition-colors">
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <h4 className="text-xs font-black text-white uppercase tracking-widest">{item.title}</h4>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed">{item.desc}</p>
                      <div className="space-y-1">
                        {item.suggestions.map((s, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-neon-green shrink-0" />
                            <p className="text-[10px] text-slate-400">{s}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  (generalAdvice[category.label as keyof typeof generalAdvice] || []).map((tip, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <CheckCircle className="w-4 h-4 text-neon-green shrink-0 mt-1" />
                      <p className="text-sm text-slate-400 leading-relaxed">{tip}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Suggested Routine */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-8">
            <h3 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
              <Dumbbell className="w-6 h-6 text-neon-green" />
              Suggested Daily Routine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { time: 'Morning', icon: <Sun className="w-5 h-5 text-orange-400" />, task: 'Drink warm water and walk for 20 minutes' },
                { time: 'Afternoon', icon: <Utensils className="w-5 h-5 text-blue-400" />, task: 'Balanced lunch with vegetables and protein' },
                { time: 'Evening', icon: <Activity className="w-5 h-5 text-neon-green" />, task: 'Light exercise or stretching' },
                { time: 'Night', icon: <Moon className="w-5 h-5 text-purple-400" />, task: 'Light dinner before 8–9 PM' }
              ].map((item) => (
                <div key={item.time} className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <p className="text-xs font-black text-white uppercase tracking-widest">{item.time}</p>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Offer */}
          <div className="p-1 bg-gradient-to-r from-neon-green/20 via-blue-500/20 to-neon-green/20 rounded-[2.5rem]">
            <div className="glass p-10 rounded-[2.4rem] border border-white/10 text-center space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                  {bmi >= 25 ? "Want a Personalized Weight Plan?" : "Get a Personalized Diet & Fitness Plan"}
                </h3>
                <p className="text-slate-400 max-w-lg mx-auto">
                  {bmi >= 25 
                    ? "Unlock a detailed diet and fitness plan tailored to your body type, metabolism, and weight goals."
                    : "Unlock a comprehensive 30-day transformation guide tailored to your unique health profile."}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["30-Day Diet Plan", "Fat Loss Workout", "Habit Tracker", "Weekly Progress"].map(item => (
                  <div key={item} className="p-4 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    {item}
                  </div>
                ))}
              </div>

              <button className="px-12 py-6 bg-white text-dark-bg font-black rounded-2xl hover:bg-neon-green transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto group">
                <Gem className="w-5 h-5 group-hover:animate-bounce" />
                {bmi >= 25 ? "Get My Personalized Weight Plan" : "Start My Weight Loss Plan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LoveCalculator = () => {
  const [name1, setName1] = React.useState('');
  const [name2, setName2] = React.useState('');
  const [result, setResult] = React.useState<{ score: number; message: string } | null>(null);
  const [displayScore, setDisplayScore] = React.useState(0);
  const [isCalculating, setIsCalculating] = React.useState(false);

  const getMessage = (score: number) => {
    if (score >= 90) return "Perfect Match";
    if (score >= 75) return "Strong Compatibility";
    if (score >= 60) return "Good Connection";
    return "Needs Effort";
  };

  const getDeterministicScore = (n1: string, n2: string) => {
    const norm1 = n1.toLowerCase().trim().replace(/\s+/g, '');
    const norm2 = n2.toLowerCase().trim().replace(/\s+/g, '');
    const combined = [norm1, norm2].sort().join('');
    
    // Simple hash algorithm
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    const absHash = Math.abs(hash);
    return (absHash % 51) + 50; // 50-100
  };

  const calculate = () => {
    if (!name1 || !name2) return;
    
    const norm1 = name1.toLowerCase().trim().replace(/\s+/g, '');
    const norm2 = name2.toLowerCase().trim().replace(/\s+/g, '');
    const storageKey = `love_score_${[norm1, norm2].sort().join('_')}`;
    
    setIsCalculating(true);
    setResult(null);
    setDisplayScore(0);

    // Check localStorage first
    const cached = localStorage.getItem(storageKey);
    const finalScore = cached ? parseInt(cached) : getDeterministicScore(name1, name2);
    
    if (!cached) {
      localStorage.setItem(storageKey, finalScore.toString());
    }

    // Simulate calculation delay
    setTimeout(() => {
      setResult({ score: finalScore, message: getMessage(finalScore) });
      setIsCalculating(false);
      
      // Smooth number animation
      let current = 0;
      const step = finalScore / 30;
      const interval = setInterval(() => {
        current += step;
        if (current >= finalScore) {
          setDisplayScore(finalScore);
          clearInterval(interval);
        } else {
          setDisplayScore(Math.floor(current));
        }
      }, 20);
    }, 1500);
  };

  const copyResult = () => {
    if (!result) return;
    const text = `Love Compatibility between ${name1} and ${name2}: ${result.score}% - ${result.message}! Check yours at NexaPlay.`;
    navigator.clipboard.writeText(text);
  };

  const shareResult = () => {
    if (!result) return;
    const text = `Love Compatibility between ${name1} and ${name2}: ${result.score}% - ${result.message}!`;
    if (navigator.share) {
      navigator.share({
        title: 'Love Calculator | NexaPlay',
        text: text,
        url: window.location.href,
      });
    } else {
      copyResult();
      alert('Result copied to clipboard!');
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Name 1</label>
          <input 
            type="text" 
            value={name1} 
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter first name"
            className="w-full glass p-5 rounded-2xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Name 2</label>
          <input 
            type="text" 
            value={name2} 
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter second name"
            className="w-full glass p-5 rounded-2xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
          />
        </div>
      </div>

      <button 
        onClick={calculate} 
        disabled={isCalculating || !name1 || !name2}
        className="w-full py-6 bg-neon-green text-dark-bg font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(0,255,159,0.3)] uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
      >
        {isCalculating ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Calculating...
          </>
        ) : (
          <>
            <Heart className="w-5 h-5 fill-current" />
            Calculate Love Score
          </>
        )}
      </button>

      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="glass p-10 rounded-[2.5rem] border border-white/5 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50" />
            
            <div className="flex justify-center">
              <div className="relative">
                <Heart className="w-24 h-24 text-red-500 fill-red-500 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-black text-white">{displayScore}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">Love Compatibility</p>
              <p className="text-5xl font-black text-white tracking-tighter">{displayScore}%</p>
              <p className={cn(
                "text-xl font-black uppercase tracking-widest",
                result.score >= 90 ? "text-neon-green" : 
                result.score >= 75 ? "text-blue-400" : 
                result.score >= 60 ? "text-yellow-400" : "text-red-400"
              )}>
                {result.message}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button 
                onClick={copyResult}
                className="p-4 glass rounded-2xl text-slate-400 hover:text-neon-green hover:scale-110 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
              <button 
                onClick={shareResult}
                className="p-4 glass rounded-2xl text-slate-400 hover:text-neon-green hover:scale-110 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            <p className="text-[9px] text-slate-500 uppercase tracking-widest pt-4 border-t border-white/5">
              Results are based on name compatibility and are for entertainment purposes only.
            </p>
          </div>

          <div className="mt-12 p-1 bg-gradient-to-r from-neon-green/20 via-blue-500/20 to-neon-green/20 rounded-[2.5rem]">
            <div className="glass p-10 rounded-[2.4rem] border border-white/10 text-center space-y-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Want Detailed Relationship Compatibility?</h3>
                <p className="text-slate-400 max-w-lg mx-auto">Get a professional deep-dive into your connection using advanced astrological and numerological alignment techniques.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3">
                  <Star className="w-4 h-4 text-neon-green" />
                  Astrology Compatibility Report
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3">
                  <Hash className="w-4 h-4 text-blue-400" />
                  Numerology Compatibility Analysis
                </div>
              </div>

              <button className="px-12 py-6 bg-white text-dark-bg font-black rounded-2xl hover:bg-neon-green transition-all uppercase tracking-widest text-sm flex items-center gap-3 mx-auto group">
                <Gem className="w-5 h-5 group-hover:animate-bounce" />
                Get Full Compatibility Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CombinedCalculator = () => {
  const [birthDate, setBirthDate] = React.useState('');
  const [weight, setWeight] = React.useState<string>('70');
  const [height, setHeight] = React.useState<string>('170');
  const [error, setError] = React.useState<string | null>(null);
  const [ageResult, setAgeResult] = React.useState<{ years: number; months: number; days: number } | null>(null);
  const [bmiResult, setBmiResult] = React.useState<{ score: number; category: { label: string; color: string } } | null>(null);

  const calculateAll = () => {
    setError(null);
    setAgeResult(null);
    setBmiResult(null);

    // Validations
    if (!birthDate) {
      setError("Please enter your date of birth.");
      return;
    }

    const birth = new Date(birthDate);
    const now = new Date();
    if (isNaN(birth.getTime())) {
      setError("Invalid date format.");
      return;
    }
    if (birth > now) {
      setError("Birth date cannot be in the future.");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError("Please enter valid numeric values for height and weight.");
      return;
    }

    if (weightNum <= 0 || heightNum <= 0) {
      setError("Height and weight must be greater than zero.");
      return;
    }

    // Age Calculation
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAgeResult({ years, months, days });

    // BMI Calculation
    const bmiScore = parseFloat((weightNum / ((heightNum / 100) ** 2)).toFixed(1));
    const getCategory = (val: number) => {
      if (val < 18.5) return { label: 'Underweight', color: 'text-blue-400' };
      if (val < 25) return { label: 'Normal', color: 'text-neon-green' };
      if (val < 30) return { label: 'Overweight', color: 'text-yellow-400' };
      return { label: 'Obese', color: 'text-red-400' };
    };
    setBmiResult({ score: bmiScore, category: getCategory(bmiScore) });
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase">Date of Birth</label>
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full glass p-4 rounded-xl text-white border-none [color-scheme:dark]"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-500 uppercase">Weight (kg)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            className="w-full glass p-4 rounded-xl text-white border-none"
          />
        </div>
        <HeightInput 
          value={height} 
          onChange={setHeight} 
          labelClassName="text-xs font-bold text-slate-500 uppercase"
          inputClassName="w-full glass p-4 rounded-xl text-white border-none focus:ring-2 focus:ring-neon-green/50 transition-all"
        />
      </div>

      <button 
        onClick={calculateAll}
        className="w-full py-4 bg-neon-green text-dark-bg font-black rounded-2xl neon-glow uppercase tracking-tighter hover:scale-[1.02] transition-transform"
      >
        Calculate Everything
      </button>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      {(ageResult || bmiResult) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ageResult && (
            <div className="glass p-6 rounded-3xl border border-white/5">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-widest">Age Result</h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Yrs', value: ageResult.years },
                  { label: 'Mos', value: ageResult.months },
                  { label: 'Days', value: ageResult.days }
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 p-3 rounded-xl text-center">
                    <p className="text-xl font-black text-neon-green">{item.value}</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {bmiResult && (
            <div className="glass p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-2 tracking-widest">BMI Result</h4>
              <p className="text-4xl font-black text-neon-green">{bmiResult.score}</p>
              <p className={cn("text-xs font-bold uppercase tracking-tighter mt-1", bmiResult.category.color)}>
                {bmiResult.category.label}
              </p>
            </div>
          )}
        </div>
      )}

      {bmiResult && bmiResult.score >= 30 && <ObesityConversion />}
    </div>
  );
};

const TOOLS_CONFIG: Record<string, { title: string; description: string; component: React.ReactNode }> = {
  'password-generator': { 
    title: 'Password Generator', 
    description: 'Generate ultra-secure random passwords instantly.',
    component: <PasswordGenerator />
  },
  'bmi-calculator': {
    title: 'BMI Calculator | NexaPlay',
    description: 'Calculate your Body Mass Index and get practical health advice to maintain a healthy weight.',
    component: <BMICalculator />
  },
  'ideal-weight-calculator': {
    title: 'Ideal Weight Calculator | NexaPlay',
    description: 'Find your healthy weight range based on your height and gender.',
    component: <IdealWeightCalculator />
  },
  'calorie-calculator': {
    title: 'Daily Calorie Calculator | NexaPlay',
    description: 'Calculate your daily calorie needs and plan your nutrition easily.',
    component: <CalorieCalculator />
  },
  'body-fat-calculator': {
    title: 'Body Fat Calculator | NexaPlay',
    description: 'Estimate your body fat percentage using the U.S. Navy method.',
    component: <BodyFatCalculator />
  },
  'water-intake-calculator': {
    title: 'Water Intake Calculator | NexaPlay',
    description: 'Calculate how much water you should drink daily based on your weight and activity.',
    component: <WaterIntakeCalculator />
  },
  'sleep-cycle-calculator': {
    title: 'Sleep Cycle Calculator | NexaPlay',
    description: 'Find the best times to wake up or go to bed based on 90-minute sleep cycles.',
    component: <SleepCycleCalculator />
  },
  'age-calculator': {
    title: 'Age Calculator & Horoscope',
    description: 'Calculate your age instantly and discover your zodiac sign, life path number, and today\'s horoscope.',
    component: <AgeCalculator />
  },
  'numerology-calculator': {
    title: 'Free Numerology Calculator by Date of Birth',
    description: 'Calculate your life path number and discover your numerology personality traits.',
    component: <NumerologyCalculator />
  },
  'age-bmi-combined': {
    title: 'Age & BMI Combined',
    description: 'Calculate both your age and BMI in one simple interface.',
    component: <CombinedCalculator />
  },
  'love-calculator': {
    title: 'Love Calculator | NexaPlay',
    description: 'Check love compatibility instantly using our fun love calculator.',
    component: <LoveCalculator />
  }
};

export default function ToolDetail() {
  const { id } = useParams();
  const tool = id ? TOOLS_CONFIG[id] : null;

  if (!tool) return <div className="p-20 text-center">Tool not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/tools" className="flex items-center gap-2 text-slate-400 hover:text-neon-green mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Tools
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">{tool.title}</h1>
        <p className="text-slate-400">{tool.description}</p>
      </div>

      <AdPlaceholder label="TOP AD" className="mb-8" />

      <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        {tool.component}
      </div>

      <AdPlaceholder label="BOTTOM AD" className="mt-8" />
    </div>
  );
}
