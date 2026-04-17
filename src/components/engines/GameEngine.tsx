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
  const [gameStatus, setGameStatus] = useState<'briefing' | 'playing' | 'won' | 'lost'>('briefing');
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
    <div className="flex flex-col h-full overflow-hidden bg-slate-50 relative">
      {/* Game Header */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b-2 border-slate-200 shadow-sm relative z-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
            <Target className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-black text-slate-800 tracking-tight leading-none mb-1">{game.name}</h2>
            <div className="flex gap-3 items-center">
               <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent/10">{game.executiveFunction}</span>
               <div className="w-1 h-1 rounded-full bg-slate-300" />
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{game.grade}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
             <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Puntos</p>
                <p className="text-2xl font-serif font-black text-slate-800 leading-none">{score}</p>
             </div>
          </div>
          <button 
            onClick={onExit}
            className="p-3 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-800"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,99,33,0.02)_0%,transparent_100%)]">
        <AnimatePresence mode="wait">
          {gameStatus === 'briefing' ? (
            <motion.div 
              key="briefing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-slate-900/5 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-accent-2" />
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent/20">
                   <Target className="text-accent w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-black text-slate-800 mb-4 tracking-tight uppercase">Tu Misión</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {game.gameplay}
                </p>
                <button 
                  onClick={() => setGameStatus('playing')}
                  className="w-full py-4 bg-accent hover:bg-accent/90 text-bg rounded-2xl font-black text-sm uppercase tracking-[3px] transition-all active:scale-95 shadow-xl shadow-accent/20"
                >
                  ¡Comenzar Aventura!
                </button>
              </div>
            </motion.div>
          ) : gameStatus === 'playing' ? (
            <motion.div 
              key="playing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center p-8"
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
              className="absolute inset-0 flex items-center justify-center p-8 z-50 bg-bg/40 backdrop-blur-sm"
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
