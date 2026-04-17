import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Pictogram from '../Pictogram';
import { GameDefinition } from '../../types';

interface PlanningEngineProps {
  game: GameDefinition;
  isPrimary: boolean;
  onScoreChange: (score: number) => void;
  onGameEnd: (status: 'won' | 'lost') => void;
}

export default function PlanningEngine({ game, isPrimary, onScoreChange, onGameEnd }: PlanningEngineProps) {
  const [towerBlocks, setTowerBlocks] = useState<any[]>([]);
  const [placedBlocks, setPlacedBlocks] = useState<any[]>([]);
  const [clickFeedback, setClickFeedback] = useState<{ id: any, type: 'correct' | 'incorrect' } | null>(null);

  const gameId = game.id;

  useEffect(() => {
    if (towerBlocks.length === 0) {
      if (gameId.includes('torre') || gameId.includes('mudanza')) {
        const blocks = [
          { id: 1, size: 3, color: '#D4AF37', name: 'BASE', type: 'book' },
          { id: 2, size: 2, color: '#FF6321', name: 'CUERPO', type: 'book' },
          { id: 3, size: 1, color: '#2DD4BF', name: 'CIMA', type: 'book' }
        ];
        if (isPrimary) {
          blocks.unshift({ id: 4, size: 4, color: '#5A5A40', name: 'LIBRO GRUESO', type: 'book' });
          blocks.push({ id: 5, size: 0.5, color: '#ef4444', name: 'MARCADOR', type: 'star' });
        }
        setTowerBlocks(blocks);
      } else if (gameId.includes('maleta')) {
        const blocks = [
          { id: 0, name: 'ROPA', color: '#FF6321', type: 'shirt' },
          { id: 1, name: 'MAPA', color: '#D4AF37', type: 'map' },
          { id: 2, name: 'LLAVE', color: '#3B82F6', type: 'key' }
        ];
        setTowerBlocks(blocks.sort(() => Math.random() - 0.5));
      } else if (gameId.includes('migas')) {
        const blocks = [
          { id: 0, name: 'Pájaros', color: '#FF6321', type: 'star' },
          { id: 1, name: 'Migas', color: '#D4AF37', type: 'egg' },
          { id: 2, name: 'Casa', color: '#3B82F6', type: 'castle' }
        ];
        setTowerBlocks(blocks.sort(() => Math.random() - 0.5));
      } else if (gameId.includes('archivo')) {
        const blocks = [
          { id: 0, name: 'PERGAMINO', color: '#D4AF37', type: 'parchment' },
          { id: 1, name: 'PLUMA', color: '#3B82F6', type: 'quill' },
          { id: 2, name: 'SELLO', color: '#ef4444', type: 'shield' },
          { id: 3, name: 'ARCHIVO', color: '#2DD4BF', type: 'library' }
        ];
        setTowerBlocks(blocks.sort(() => Math.random() - 0.5));
      } else {
        const blocks = [
          { id: 0, name: 'Inicio', color: '#FF6321', type: 'sun' },
          { id: 1, name: 'Medio', color: '#D4AF37', type: 'cloud' },
          { id: 2, name: 'Final', color: '#3B82F6', type: 'moon' }
        ];
        setTowerBlocks(blocks.sort(() => Math.random() - 0.5));
      }
    }
  }, [gameId, isPrimary]);

  const handleBlockPlace = (block: any) => {
    let isCorrect = false;
    
    if (gameId.includes('torre') || gameId.includes('mudanza')) {
      const lastSize = placedBlocks.length > 0 ? placedBlocks[placedBlocks.length - 1].size : 10;
      isCorrect = block.size < lastSize;
    } else if (gameId.includes('archivo')) {
      const order = ['parchment', 'quill', 'shield', 'library'];
      isCorrect = block.type === order[placedBlocks.length];
    } else {
      isCorrect = block.id === placedBlocks.length;
    }

    if (isCorrect) {
      setClickFeedback({ id: block.id, type: 'correct' });
      const newPlaced = [...placedBlocks, block];
      onScoreChange(newPlaced.length * 10);
      setTimeout(() => {
        setPlacedBlocks(newPlaced);
        setTowerBlocks(prev => prev.filter(b => b.id !== block.id));
        setClickFeedback(null);
        if (towerBlocks.length === 1) onGameEnd('won');
      }, 400);
    } else {
      setClickFeedback({ id: block.id, type: 'incorrect' });
      setTimeout(() => onGameEnd('lost'), 500);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-4xl h-full">
      {/* Target Area (Tower) */}
      <div className="flex-1 w-full max-w-[340px] h-[450px] bg-slate-900/5 rounded-[4rem] border-2 border-slate-200 flex flex-col-reverse items-center p-8 gap-3 relative overflow-hidden group shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence>
          {placedBlocks.map((block, idx) => (
            <motion.div
              key={block.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{ 
                width: `${40 + (block.size || 1) * 40}px`, 
                height: '45px',
                backgroundColor: block.color 
              }}
              className="rounded-xl shadow-xl border-t-4 border-white/20 flex items-center justify-center relative group/block"
            >
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/block:opacity-100 transition-opacity" />
              <Pictogram term={block.type} size={24} className="opacity-50" />
            </motion.div>
          ))}
        </AnimatePresence>
        {placedBlocks.length === 0 && (
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-600 uppercase tracking-widest text-center">ARRASTRA LOS OBJETOS PARA CONSTRUIR LA HISTORIA</p>
        )}
      </div>

      {/* Source Area (Available Blocks) */}
      <div className="flex flex-wrap md:flex-col gap-4 justify-center items-center">
        {towerBlocks.map(block => (
          <motion.div
            key={block.id}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleBlockPlace(block)}
            style={{ 
              width: `${40 + (block.size || 1) * 40}px`, 
              height: '50px',
              backgroundColor: block.color 
            }}
            className={`rounded-2xl shadow-xl cursor-pointer flex items-center justify-center border-b-[6px] border-black/20 transition-all select-none ${
              clickFeedback?.id === block.id && clickFeedback.type === 'incorrect' ? 'animate-shake border-neon-red' : 'hover:brightness-110'
            }`}
          >
            <span className="text-[10px] font-black text-white/90 uppercase tracking-tighter drop-shadow-md">{block.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
