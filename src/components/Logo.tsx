import React from 'react';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-12 h-12" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5"
      >
        {/* Monogram A */}
        <path d="M25 80 L50 20 L75 80" />
        <path d="M35 60 L65 60" />
        
        {/* Monogram H - overlapping style */}
        <path d="M55 20 L55 80" />
        <path d="M85 20 L85 80" />
        <path d="M55 50 L85 50" />
      </svg>
      <span className="text-[8px] uppercase tracking-[0.3em] font-body font-medium whitespace-nowrap">
        Ahsanul Habib Safin
      </span>
    </div>
  );
}
