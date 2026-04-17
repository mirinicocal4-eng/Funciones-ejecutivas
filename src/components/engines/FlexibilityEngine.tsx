import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Pictogram from '../Pictogram';
import { RefreshCw } from 'lucide-react';
import { GameDefinition } from '../../types';

interface FlexibilityEngineProps {
  game: GameDefinition;
  isPrimary: boolean;
  onScoreChange: (score: number) => void;
  onGameEnd: (status: 'won' | 'lost') => void;
}

export default function FlexibilityEngine({ game, isPrimary, onScoreChange, onGameEnd }: FlexibilityEngineProps) {
  const [flexItems, setFlexItems] = useState<any[]>([]);
  const [flexRule, setFlexRule] = useState<'color' | 'size' | 'shape'>('color');
  const [clickFeedback, setClickFeedback] = useState<{ id: any, type: 'correct' | 'incorrect' } | null>(null);
  const [internalScore, setInternalScore] = useState(0);

  const gameId = game.id;

  useEffect(() => {
    const initialItems = gameId.includes('clima') ? [
      { id: 1, color: 'red', size: 'small', type: 'sun' },
      { id: 2, color: 'blue', size: 'large', type: 'cloud' },
      { id: 3, color: 'red', size: 'large', type: 'sun' }
    ] : gameId.includes('disfraces') ? [
      { id: 1, color: 'blue', size: 'small', type: 'cloak' },
      { id: 2, color: 'red', size: 'large', type: 'cloak' },
      { id: 3, color: 'blue', size: 'large', type: 'cloak' }
    ] : [
      { id: 1, color: 'blue', size: 'small', type: 'star' },
      { id: 2, color: 'red', size: 'large', type: 'gem' },
      { id: 3, color: 'blue', size: 'large', type: 'crown' }
    ];
    setFlexItems(initialItems);
  }, [gameId]);

  const handleFlexClick = (item: any) => {
    let target = flexRule === 'color' ? 'blue' : 
                flexRule === 'size' ? 'large' : 
                gameId.includes('clima') ? 'rainbow' :
                gameId.includes('disfraces') ? 'cloak' :
                gameId.includes('monstruo') ? 'book' :
                gameId.includes('cocina') ? 'apple' :
                gameId.includes('paradoja') ? 'clock' :
                gameId.includes('biblioteca') ? 'book' : 'star';

    let correct = false;
    if (flexRule === 'color') correct = item.color === target;
    else if (flexRule === 'size') correct = item.size === target;
    else if (flexRule === 'shape') correct = item.type === target;
    
    if (correct) {
      setClickFeedback({ id: item.id, type: 'correct' });
      const remaining = flexItems.filter(i => i.id !== item.id);
      
      if (remaining.length === 0) {
        setTimeout(() => {
          const nextRule = flexRule === 'color' ? 'size' : flexRule === 'size' ? 'shape' : 'color';
          setFlexRule(nextRule);
          
          if (nextRule === 'shape' && !isPrimary) {
            onGameEnd('won');
            return;
          }

          if (internalScore + 1 >= 2) {
            onGameEnd('won');
          } else {
            const nextScore = internalScore + 1;
            setInternalScore(nextScore);
            onScoreChange(nextScore);
            
            const nextItems = gameId.includes('clima') ? [
              { id: Date.now() + 1, color: 'blue', size: 'large', type: 'cloud' },
              { id: Date.now() + 2, color: 'red', size: 'small', type: 'sun' },
              { id: Date.now() + 3, color: 'blue', size: 'small', type: 'rainbow' }
            ] : gameId.includes('emociones') ? [
              { id: Date.now() + 1, color: Math.random() > 0.5 ? 'blue' : 'red', size: 'large', type: 'book' },
              { id: Date.now() + 2, color: Math.random() > 0.5 ? 'blue' : 'red', size: 'small', type: 'book' },
              { id: Date.now() + 3, color: Math.random() > 0.5 ? 'blue' : 'red', size: 'small', type: 'book' }
            ] : gameId.includes('paradoja') ? [
              { id: Date.now() + 1, color: 'gold', size: 'large', type: 'clock' },
              { id: Date.now() + 2, color: 'blue', size: 'small', type: 'glass' },
              { id: Date.now() + 3, color: 'gold', size: 'small', type: 'glass' }
            ] : [
              { id: Date.now() + 1, color: Math.random() > 0.5 ? 'blue' : 'red', size: 'large', type: 'star' },
              { id: Date.now() + 2, color: Math.random() > 0.5 ? 'blue' : 'red', size: 'small', type: 'gem' },
              { id: Date.now() + 3, color: Math.random() > 0.5 ? 'blue' : 'red', size: 'small', type: 'crown' }
            ];
            setFlexItems(nextItems);
            setClickFeedback(null);
          }
        }, 300);
      } else {
        setTimeout(() => {
          setFlexItems(remaining);
          setClickFeedback(null);
        }, 300);
      }
    } else {
      setClickFeedback({ id: item.id, type: 'incorrect' });
      setTimeout(() => onGameEnd('lost'), 500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-16 w-full max-w-2xl">
      <div className="text-center select-none pointer-events-none">
        <p className="text-[10px] font-black text-accent uppercase tracking-[4px] mb-1 opacity-40">REGLA ACTUAL</p>
        <p className="text-2xl font-serif font-black text-slate-800 uppercase tracking-tighter">
          {flexRule === 'color' ? 'Atención al COLOR' : 
           flexRule === 'size' ? 'Atención al TAMAÑO' : 'Atención a la FORMA'}
        </p>
      </div>
      <div className="flex gap-12 justify-center w-full h-40 items-center">
        {flexItems.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleFlexClick(item)}
            className={`cursor-pointer flex items-center justify-center rounded-2xl border-4 shadow-xl transition-all ${
              clickFeedback?.id === item.id && clickFeedback.type === 'correct' ? 'bg-neon-green border-white scale-110' :
              clickFeedback?.id === item.id && clickFeedback.type === 'incorrect' ? 'bg-yellow-400 border-white animate-shake' :
              item.color === 'blue' ? 'bg-blue/10 border-blue/40' : 
              item.color === 'gold' ? 'bg-gold/10 border-gold/40' : 'bg-neon-red/10 border-neon-red/40'
            } ${item.size === 'large' ? 'w-24 h-24' : 'w-16 h-16'}`}
          >
            <Pictogram term={item.type} size={item.size === 'large' ? 48 : 32} />
          </motion.div>
        ))}
      </div>
      <div className="w-full h-32 bg-slate-900/5 rounded-[3rem] border-2 border-slate-200 flex flex-col items-center justify-center group shadow-inner">
        <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-1 shadow-sm">
          <RefreshCw size={20} className="text-slate-400 group-hover:rotate-180 transition-transform duration-700" />
        </div>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[3px]">CUMPLE LA REGLA</p>
      </div>
    </div>
  );
}
