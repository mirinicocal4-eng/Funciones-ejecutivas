import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Target, Search, Cpu, Shield, Rocket, Zap, RefreshCw, GitBranch, Map as MapIcon, Layers, Bot, Library, BookOpen, CircleDollarSign, ToyBrick, Bird, Flame, Sparkles, Wand2, Pipette, Dot, Wheat, Castle, Mountain, MountainSnow, Waves } from 'lucide-react';
import { GameDefinition } from '../types';

export const ICON_MAP: Record<string, any> = {
  Target, Search, Cpu, Shield, Rocket, Zap, RefreshCw, GitBranch, Map: MapIcon, Layers, Bot, Library, BookOpen,
  CircleDollarSign, ToyBrick, Bird, Flame, Sparkles, Wand2, Pipette, Dot, Wheat, Castle, Mountain, MountainSnow, Waves
};

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

export function NavButton({ active, onClick, icon, label }: NavButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-1.5 rounded transition-all duration-200
        ${active ? 'bg-accent/10 text-accent' : 'text-text-dim hover:text-text'}
      `}
    >
      {icon}
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}

interface GameCardProps {
  game: GameDefinition;
  onClick: () => void;
  key?: string | number;
}

export function GameCard({ game, onClick }: GameCardProps) {
  const Icon = ICON_MAP[game.icon] || Target;
  
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative bg-card border border-slate-700 rounded-lg p-5 cursor-pointer overflow-hidden transition-all hover:border-accent"
    >
      <div className="absolute top-2 right-2 text-[0.6rem] px-2 py-0.5 rounded-full bg-bg/50 border border-slate-700 text-text-dim">
        {game.grade}
      </div>
      
      <div className="relative z-10 space-y-3">
        <div className="w-10 h-10 bg-bg rounded flex items-center justify-center border border-slate-700 group-hover:border-accent/30 transition-colors">
          <Icon className="text-accent w-5 h-5" />
        </div>
        
        <div>
          <h4 className="font-serif font-bold text-text group-hover:text-accent transition-colors leading-tight mb-1">{game.name}</h4>
          <p className="text-[10px] uppercase tracking-widest text-text-dim font-bold">{game.executiveFunction}</p>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/10 transition-colors" />
    </motion.div>
  );
}

export function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col gap-1 border-l-2 border-slate-700 pl-4 py-1">
      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{label}</span>
      <span className="text-sm font-medium text-text">{value}</span>
    </div>
  );
}
