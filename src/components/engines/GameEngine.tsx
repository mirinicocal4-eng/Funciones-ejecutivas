import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, AlertTriangle, Target } from 'lucide-react';
import { GameDefinition } from '../../types';
import AttentionEngine from './AttentionEngine';
import MemoryEngine from './MemoryEngine';
import InhibitionEngine from './InhibitionEngine';
import FlexibilityEngine from './FlexibilityEngine';
import PlanningEngine from './PlanningEngine';
import GameResult from '../GameResult';

interface GameEngineProps {
  game: GameDefinition;
  onExit: () => void;
}

export default function GameEngine({ game, onExit }: GameEngineProps) {
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [score, setScore] = useState(0);

  const isPrimary = game.grade.includes('Primaria');

  const handleGameEnd = (status: 'won' | 'lost') => {
    setGameStatus(status);
  };

  const handleRetry = () => {
    setScore(0);
    setGameStatus('playing');
  };

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-slate-50 relative">
      {/* Game Header */}
      <div className="flex-shrink-0 flex items-center justify-between px-8 py-4 bg-white border-b-2 border-slate-200 shadow-sm relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
            <Target className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-sm font-serif font-black text-slate-800 tracking-tight mb-0.5">{game.name}</h2>
            <div className="flex gap-2 items-center">
               <span className="text-[8px] font-black text-accent uppercase tracking-widest leading-none">{game.executiveFunction}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
             <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Puntos</p>
             <p className="text-xl font-serif font-black text-slate-800 leading-none">{score}</p>
          </div>
          <button 
            onClick={onExit}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-800"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,99,33,0.02)_0%,transparent_100%)]">
        <AnimatePresence mode="wait">
          {gameStatus === 'playing' ? (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {game.executiveFunction === 'Atención' && (
                <AttentionEngine 
                  game={game} 
                  isPrimary={isPrimary} 
                  onScoreChange={setScore} 
                  onGameEnd={handleGameEnd} 
                />
              )}
              {game.executiveFunction === 'Memoria de Trabajo' && (
                <MemoryEngine 
                  game={game} 
                  isPrimary={isPrimary} 
                  onScoreChange={setScore} 
                  onGameEnd={handleGameEnd} 
                />
              )}
              {game.executiveFunction === 'Control Inhibitorio' && (
                <InhibitionEngine 
                  game={game} 
                  isPrimary={isPrimary} 
                  onScoreChange={setScore} 
                  onGameEnd={handleGameEnd} 
                />
              )}
              {game.executiveFunction === 'Flexibilidad Cognitiva' && (
                <FlexibilityEngine 
                  game={game} 
                  isPrimary={isPrimary} 
                  onScoreChange={setScore} 
                  onGameEnd={handleGameEnd} 
                />
              )}
              {game.executiveFunction === 'Planificación' && (
                <PlanningEngine 
                  game={game} 
                  isPrimary={isPrimary} 
                  onScoreChange={setScore} 
                  onGameEnd={handleGameEnd} 
                />
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center p-8 z-50 bg-white/40 backdrop-blur-sm"
            >
              <GameResult 
                status={gameStatus === 'won' ? 'won' : 'lost'} 
                score={score} 
                onRetry={handleRetry} 
                onExit={onExit} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="px-8 py-3 bg-white border-t-2 border-slate-200 flex justify-center gap-10">
        {['Latencia Táctil', 'Errores Omisión', 'Perseveración', 'Curva Aprendizaje', 'Puntos de Fatiga'].map(tag => (
          <span key={tag} className="text-[0.6rem] px-2 py-1 bg-slate-100 rounded border border-slate-200 text-slate-400 font-bold uppercase tracking-widest italic">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
