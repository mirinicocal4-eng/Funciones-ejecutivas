import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Pictogram from '../Pictogram';
import { GameDefinition } from '../../types';

interface InhibitionEngineProps {
  game: GameDefinition;
  isPrimary: boolean;
  onScoreChange: (score: number) => void;
  onGameEnd: (status: 'won' | 'lost') => void;
}

export default function InhibitionEngine({ game, isPrimary, onScoreChange, onGameEnd }: InhibitionEngineProps) {
  const [inhibTarget, setInhibTarget] = useState<'sun' | 'moon' | 'go' | 'stop'>('go');
  const [isPressing, setIsPressing] = useState(false);
  const [stroopColor, setStroopColor] = useState({ text: 'ROJO', color: '#ef4444' });
  const [clickFeedback, setClickFeedback] = useState<{ id: any, type: 'correct' | 'incorrect' } | null>(null);
  const [internalScore, setInternalScore] = useState(0);

  const [hasCounted, setHasCounted] = useState(false);

  const gameId = game.id;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextState = Math.random() > 0.4;
      setInhibTarget(nextState ? 'go' : 'stop');
      setHasCounted(false); // Reset when target flips
      
      if (gameId.includes('tinta')) {
        const colors = [
          { text: 'ROJO', color: '#ef4444' },
          { text: 'AZUL', color: '#3B82F6' },
          { text: 'VERDE', color: '#22c55e' }
        ];
        setStroopColor(colors[Math.floor(Math.random() * 3)]);
      } else if (gameId.includes('contrario')) {
        setInhibTarget(Math.random() > 0.5 ? 'sun' : 'moon');
      }
    }, isPrimary ? 1600 : 2500);
    return () => clearInterval(interval);
  }, [gameId, isPrimary]);

  useEffect(() => {
    if (gameId.includes('contrario') || gameId.includes('tinta')) return;

    if (isPressing && !hasCounted) {
      if (inhibTarget === 'stop') {
        setClickFeedback({ id: 'inhibition', type: 'incorrect' });
        setTimeout(() => onGameEnd('lost'), 500);
      } else if (inhibTarget === 'go') {
        const nextScore = internalScore + 1;
        setInternalScore(nextScore);
        onScoreChange(nextScore);
        setHasCounted(true);
        if (nextScore >= (isPrimary ? 15 : 6)) onGameEnd('won');
      }
    }
  }, [isPressing, inhibTarget, hasCounted]);

  const handleInhibClick = (target: string) => {
    // Stroop or Contrary
    if (gameId.includes('tinta')) {
      if (target === stroopColor.color) {
        setClickFeedback({ id: target, type: 'correct' });
        const nextScore = internalScore + 1;
        setInternalScore(nextScore);
        onScoreChange(nextScore);
        setTimeout(() => setClickFeedback(null), 300);
        if (nextScore >= 8) setTimeout(() => onGameEnd('won'), 400);
      } else {
        setClickFeedback({ id: target, type: 'incorrect' });
        setTimeout(() => onGameEnd('lost'), 500);
      }
    } else if (gameId.includes('contrario')) {
      const correct = (inhibTarget === 'sun' && target === 'moon') || (inhibTarget === 'moon' && target === 'sun');
      if (correct) {
        setClickFeedback({ id: target, type: 'correct' });
        const nextScore = internalScore + 1;
        setInternalScore(nextScore);
        onScoreChange(nextScore);
        setTimeout(() => setClickFeedback(null), 350);
        if (nextScore >= (isPrimary ? 8 : 4)) onGameEnd('won');
      } else {
        setClickFeedback({ id: target, type: 'incorrect' });
        setTimeout(() => onGameEnd('lost'), 500);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-lg">
      {gameId.includes('tinta') ? (
        <div className="flex flex-col items-center gap-12 text-center">
          <motion.div 
            key={stroopColor.text}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-12 bg-white rounded-[3rem] shadow-2xl border-b-[10px] border-slate-200 w-full"
          >
            <h3 style={{ color: stroopColor.color }} className="text-7xl font-serif font-bold tracking-tighter uppercase">
              {stroopColor.text}
            </h3>
          </motion.div>
          <div className="flex gap-6 justify-center">
            {[
              { name: 'ROJO', color: '#ef4444' },
              { name: 'AZUL', color: '#3B82F6' },
              { name: 'VERDE', color: '#22c55e' }
            ].map(c => (
              <button 
                key={c.color}
                onClick={() => handleInhibClick(c.color)}
                style={{ backgroundColor: c.color }}
                className={`w-20 h-20 rounded-full border-4 border-white active:scale-90 transition-all shadow-xl hover:brightness-110 flex items-center justify-center ${
                  clickFeedback?.id === c.color && clickFeedback.type === 'correct' ? 'ring-8 ring-neon-green scale-110' :
                  clickFeedback?.id === c.color && clickFeedback.type === 'incorrect' ? 'ring-8 ring-yellow-400 animate-shake' : ''
                }`}
              >
                <Pictogram term="palette" className="text-white/30" size={32} />
              </button>
            ))}
          </div>
          <p className="text-xs font-serif font-bold text-text-dim uppercase tracking-[2px]">TOCA EL COLOR DE LA TINTA, NO LA PALABRA</p>
        </div>
      ) : gameId.includes('contrario') ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="px-10 py-6 bg-slate-900/5 rounded-[3rem] border border-slate-200 min-w-[240px] shadow-inner">
              <p className="text-[10px] font-black text-accent uppercase tracking-[4px] mb-2 opacity-60">EL HADA SUSURRA:</p>
              <h3 className="text-5xl font-black text-slate-800 uppercase tracking-tight">
                {inhibTarget === 'sun' ? 'NOCHE' : 'DÍA'}
              </h3>
            </div>
          
          <div className="flex gap-16">
            <motion.button
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleInhibClick('sun')}
              className={`w-32 h-32 bg-white rounded-full shadow-2xl border-4 flex items-center justify-center filter drop-shadow-lg transition-all ${
                clickFeedback?.id === 'sun' && clickFeedback.type === 'correct' ? 'border-neon-green bg-neon-green/10' : 'border-white'
              }`}
            >
               <Pictogram term="sun" size={64} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleInhibClick('moon')}
              className={`w-32 h-32 bg-white rounded-full shadow-2xl border-4 flex items-center justify-center filter drop-shadow-lg transition-all ${
                clickFeedback?.id === 'moon' && clickFeedback.type === 'correct' ? 'border-neon-green bg-neon-green/10' : 'border-white'
              }`}
            >
               <Pictogram term="moon" size={64} />
            </motion.button>
          </div>
          <p className="text-xs font-black text-accent/60 uppercase tracking-widest max-w-[200px]">¡TOCA LO CONTRARIO DE LO QUE DICE EL HADA!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-8">
          <div className={`w-40 h-40 rounded-full flex items-center justify-center border-8 transition-all duration-500 shadow-2xl ${
            clickFeedback?.type === 'incorrect' ? 'border-neon-red bg-neon-red/20 animate-shake' :
            inhibTarget === 'go' ? 'border-neon-green shadow-neon-green/40 bg-neon-green/5' : 'border-neon-red shadow-neon-red/40 bg-neon-red/5'
          }`}>
            <motion.div
              animate={inhibTarget === 'go' && isPressing ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              {gameId.includes('pocion') ? (
                <div className="relative filter drop-shadow-xl">
                  <Pictogram term="cauldron" size={80} />
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full blur-xl animate-pulse transition-colors ${inhibTarget === 'go' ? 'bg-neon-green' : 'bg-neon-red'}`} />
                </div>
              ) : gameId.includes('parada') ? (
                <div className={`filter transition-all ${inhibTarget === 'go' && isPressing ? 'drop-shadow-[0_0_20px_rgba(255,99,33,0.8)]' : 'opacity-40 grayscale'}`}>
                  <Pictogram term="broom" size={100} />
                </div>
              ) : (
                <div className={`filter transition-all ${inhibTarget === 'go' && isPressing ? 'drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]' : 'opacity-40 grayscale'}`}>
                  <Pictogram term={inhibTarget === 'go' ? 'dog' : 'ghost'} size={80} />
                </div>
              )}
            </motion.div>
          </div>
          <div className="text-center space-y-2">
            <p className={`text-lg font-serif font-bold uppercase tracking-[4px] ${inhibTarget === 'go' ? 'text-neon-green' : 'text-neon-red'}`}>
              {gameId.includes('pocion') ? (inhibTarget === 'go' ? '¡GOTEO MÁGICO!' : '¡PARA LA MEZCLA!') : 
               gameId.includes('parada') ? (inhibTarget === 'go' ? '¡VUELA ALTO!' : '¡ATERRIZA YA!') :
               gameId.includes('semaforo') ? (inhibTarget === 'go' ? '¡CAMINA!' : '¡QUIETO, PINOCHO!') :
               gameId.includes('estatua') ? (inhibTarget === 'go' ? '¡BAILA!' : '¡ESTATUA!') :
               gameId.includes('archivo') ? (inhibTarget === 'go' ? '¡LEAL!' : '¡TRAIDOR!') :
               inhibTarget === 'go' ? '¡ACCIONA!' : '¡DETENTE!'}
            </p>
            <div className="w-48 h-2 bg-slate-200 rounded-full overflow-hidden mx-auto border border-slate-300">
              <motion.div 
                animate={{ width: `${(internalScore / (isPrimary ? 15 : 6)) * 100}%` }}
                className="h-full bg-neon-green shadow-[0_0_10px_rgba(74,222,128,0.8)]"
              />
            </div>
          </div>
          <button
            onMouseDown={() => setIsPressing(true)}
            onMouseUp={() => setIsPressing(false)}
            onTouchStart={() => setIsPressing(true)}
            onTouchEnd={() => setIsPressing(false)}
            className="w-56 h-56 bg-accent/5 border-4 border-accent rounded-full flex items-center justify-center active:bg-accent/20 transition-all select-none shadow-2xl group"
          >
            <div className="w-48 h-48 border-2 border-accent/30 rounded-full flex items-center justify-center group-active:scale-90 transition-transform">
              <span className="font-black text-accent text-xl tracking-widest">PULSAR</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
