import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Pictogram from '../Pictogram';
import { GameDefinition } from '../../types';

interface MemoryEngineProps {
  game: GameDefinition;
  isPrimary: boolean;
  onScoreChange: (score: number) => void;
  onGameEnd: (status: 'won' | 'lost') => void;
}

export default function MemoryEngine({ game, isPrimary, onScoreChange, onGameEnd }: MemoryEngineProps) {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [activeWindow, setActiveWindow] = useState<number | null>(null);
  const [clickFeedback, setClickFeedback] = useState<{ id: any, type: 'correct' | 'incorrect' } | null>(null);

  const gameId = game.id;

  const playSequence = async (seq: number[]) => {
    setIsShowingSequence(true);
    for (const id of seq) {
      setActiveWindow(id);
      await new Promise(r => setTimeout(r, isPrimary ? 600 : 1000));
      setActiveWindow(null);
      await new Promise(r => setTimeout(r, 300));
    }
    setIsShowingSequence(false);
  };

  useEffect(() => {
    if (sequence.length === 0) {
      const initialSeq = Array.from({ length: 2 }, () => Math.floor(Math.random() * (isPrimary ? 6 : 4)));
      setSequence(initialSeq);
      playSequence(initialSeq);
    }
  }, [gameId, isPrimary]);

  const handleWindowClick = (id: number) => {
    if (isShowingSequence) return;
    
    const isReverse = gameId.includes('eco');
    const targetIdx = isReverse
      ? sequence.length - 1 - userSequence.length 
      : userSequence.length;

    if (id === sequence[targetIdx]) {
      setClickFeedback({ id, type: 'correct' });
      const nextUserSeq = [...userSequence, id];
      setUserSequence(nextUserSeq);
      onScoreChange(nextUserSeq.length + (sequence.length - 2) * 5); // Arbitrary score calc
      setTimeout(() => setClickFeedback(null), 300);
      
      if (nextUserSeq.length === sequence.length) {
        if (sequence.length >= (isPrimary ? 6 : 4)) {
          setTimeout(() => onGameEnd('won'), 400);
        } else {
          const nextSeq = [...sequence, Math.floor(Math.random() * (isPrimary ? 6 : 4))];
          setTimeout(() => {
            setSequence(nextSeq);
            setUserSequence([]);
            playSequence(nextSeq);
          }, 800);
        }
      }
    } else {
      setClickFeedback({ id, type: 'incorrect' });
      setTimeout(() => onGameEnd('lost'), 500);
    }
  };

  const gridIds = isPrimary ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3];
  const terms = gameId.includes('bolsillo') || gameId.includes('baul') || gameId.includes('compra')
    ? ['apple', 'cookie', 'cake', 'icecream', 'gem', 'star'] 
    : gameId.includes('nubes') 
    ? ['cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud']
    : gameId.includes('farolillos')
    ? ['light', 'light', 'light', 'light', 'light', 'light']
    : ['book', 'book', 'book', 'book', 'book', 'book'];

  return (
    <div className={`grid ${isPrimary ? 'grid-cols-3' : 'grid-cols-2'} gap-6 w-full max-w-lg p-4`}>
      {gridIds.map(id => (
        <motion.div
          key={id}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleWindowClick(id)}
          className={`aspect-square rounded-3xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-center relative overflow-hidden backdrop-blur-sm ${
            clickFeedback?.id === id && clickFeedback.type === 'correct' ? 'bg-neon-green/20 border-white shadow-[0_0_30px_rgba(74,222,128,0.4)]' :
            clickFeedback?.id === id && clickFeedback.type === 'incorrect' ? 'bg-yellow-400/20 border-white shadow-[0_0_30px_rgba(250,204,21,0.4)]' :
            activeWindow === id ? 'bg-accent/30 border-white shadow-[0_0_40px_rgba(255,99,33,0.3)]' : 'bg-white/5 border-slate-700/30 hover:border-slate-500/50'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent ${activeWindow === id ? 'opacity-100' : 'opacity-0'}`} />
          <Pictogram term={terms[id % terms.length]} size={isPrimary ? 40 : 56} color={activeWindow === id ? 'gold' : 'blue'} />
        </motion.div>
      ))}
    </div>
  );
}
