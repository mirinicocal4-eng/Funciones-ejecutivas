import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface GameResultProps {
  status: 'won' | 'lost';
  score: number;
  onRetry: () => void;
  onExit: () => void;
}

export default function GameResult({ status, score, onRetry, onExit }: GameResultProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 p-10 bg-white/95 rounded-[3rem] shadow-2xl border-4 border-slate-900/5 backdrop-blur-md text-center"
    >
      {status === 'won' ? (
        <>
          <div className="w-24 h-24 bg-neon-green/10 rounded-full flex items-center justify-center border border-neon-green/30 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <CheckCircle2 className="text-neon-green w-12 h-12" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-serif font-bold text-neon-green uppercase tracking-tight">¡Misión Cumplida!</h3>
            <p className="text-text-dim text-xs">Puntuación: <span className="text-slate-800 font-bold">{score}</span></p>
            <p className="text-text-dim text-xs">Has completado esta aventura literaria con éxito.</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-24 h-24 bg-neon-red/10 rounded-full flex items-center justify-center border border-neon-red/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <AlertCircle className="text-neon-red w-12 h-12" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-serif font-bold text-neon-red uppercase tracking-tight">¡Casi lo logras!</h3>
            <p className="text-text-dim text-xs">Puntuación final: <span className="text-slate-800 font-bold">{score}</span></p>
            <p className="text-text-dim text-xs">El misterio sigue sin resolverse. ¿Lo intentas de nuevo?</p>
          </div>
        </>
      )}

      <div className="flex flex-col w-full max-w-[240px] gap-3 mt-4">
        <button 
          onClick={onRetry}
          className="py-3 bg-accent text-bg font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20"
        >
          Reintentar Aventura
        </button>
        <button 
          onClick={onExit}
          className="py-3 bg-slate-800 text-text font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-slate-700 transition-all active:scale-95"
        >
          Volver al Mapa
        </button>
      </div>
    </motion.div>
  );
}
