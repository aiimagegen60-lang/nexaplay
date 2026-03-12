import React from 'react';

interface AdPlaceholderProps {
  label: string;
  className?: string;
}

export default function AdPlaceholder({ label, className }: AdPlaceholderProps) {
  return (
    <div className={`w-full glass rounded-xl flex items-center justify-center border-dashed border-white/20 min-h-[100px] ${className}`}>
      <div className="text-center">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-[10px] text-slate-600 italic">
          {/* AD NETWORK CODE HERE */}
          Ad Space
        </p>
      </div>
    </div>
  );
}
