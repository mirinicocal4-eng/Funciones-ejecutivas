import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Pictogram from '../Pictogram';
import { GameDefinition } from '../../types';

interface AttentionEngineProps {
  game: GameDefinition;
  isPrimary: boolean;
  onScoreChange: (score: number) => void;
  onGameEnd: (status: 'won' | 'lost') => void;
}

export default function AttentionEngine({ game, isPrimary, onScoreChange, onGameEnd }: AttentionEngineProps) {
  const [shapes, setShapes] = useState<{ id: number, type: string, x: number, y: number, color: string, value?: string }[]>([]);
  const [clickFeedback, setClickFeedback] = useState<{ id: any, type: 'correct' | 'incorrect' } | null>(null);
  const [internalScore, setInternalScore] = useState(0);

  const gameId = game.id;

  useEffect(() => {
    const interval = setInterval(() => {
      let type = 'star';
      let color = Math.random() > 0.5 ? 'blue' : 'gold';
      let value = ""; 
      
      if (gameId.includes('bosque')) {
        type = Math.random() > 0.8 ? 'dragon' : 'tree';
        color = type === 'dragon' ? 'red' : 'teal';
      } else if (gameId.includes('manzanas')) {
        type = Math.random() > 0.5 ? 'manzana-roja' : 'manzana-verde';
        color = type === 'manzana-roja' ? 'red' : 'teal';
      } else if (gameId.includes('hadas')) {
        type = 'star';
        color = 'gold';
      } else if (gameId.includes('desvan')) {
        const items = ['key', 'rabbit', 'clock', 'book'];
        type = items[Math.floor(Math.random() * items.length)];
        color = 'blue';
      } else if (gameId.includes('piratas')) {
        type = Math.random() > 0.4 ? 'ship' : 'boat';
        color = type === 'ship' ? 'red' : 'blue';
      } else if (gameId.includes('cartas')) {
        type = 'letter';
        color = Math.random() > 0.7 ? 'gold' : 'blue';
      } else if (gameId.includes('mapa')) {
        type = 'map';
        color = 'gold';
      } else if (gameId.includes('escritor')) {
        type = 'socks';
        color = Math.random() > 0.5 ? 'blue' : 'gold';
      } else if (gameId.includes('cronista')) {
        const ancient = ['Vuestra Merced', 'Dulcinea', 'Hidalgo', 'Rocinante', 'Fervor'];
        const modern = ['Smartphone', 'Laptop', 'WiFi', 'TikTok', 'Avión'];
        const isModern = Math.random() > 0.7;
        type = 'parchment';
        value = isModern ? modern[Math.floor(Math.random() * modern.length)] : ancient[Math.floor(Math.random() * ancient.length)];
        color = isModern ? 'red' : 'gold';
      }

      const newShape = {
        id: Date.now() + Math.random(),
        type,
        color,
        value,
        x: Math.random() * 70 + 15,
        y: Math.random() * 60 + 20
      };
      setShapes(prev => [...prev.slice(-10), newShape]);
    }, isPrimary ? 800 : 1200);
    return () => clearInterval(interval);
  }, [gameId, isPrimary]);

  const handleAttentionClick = (item: any) => {
    let correct = false;
    if (gameId.includes('bosque')) correct = item.type === 'dragon';
    else if (gameId.includes('manzanas')) correct = item.type === 'manzana-roja';
    else if (gameId.includes('hadas')) correct = true;
    else if (gameId.includes('desvan')) correct = ['key', 'rabbit', 'clock'].includes(item.type);
    else if (gameId.includes('piratas')) correct = item.type === 'ship';
    else if (gameId.includes('cartas')) correct = item.color === 'gold';
    else if (gameId.includes('mapa')) correct = true;
    else if (gameId.includes('escritor')) correct = item.color === 'blue';
    else if (gameId.includes('cronista')) correct = item.color === 'red';
    else correct = true;

    if (correct) {
      setClickFeedback({ id: item.id, type: 'correct' });
      const newScore = internalScore + 1;
      setInternalScore(newScore);
      onScoreChange(newScore);
      setTimeout(() => {
        setClickFeedback(null);
        setShapes(prev => prev.filter(s => s.id !== item.id));
        if (newScore >= (isPrimary ? 10 : 5)) onGameEnd('won');
      }, 300);
    } else {
      setClickFeedback({ id: item.id, type: 'incorrect' });
      setTimeout(() => onGameEnd('lost'), 500);
    }
  };

  return (
    <div className={`relative w-full h-full border-4 border-accent-2/20 rounded-[2.5rem] flex items-center justify-center overflow-hidden transition-colors ${
      gameId.includes('bosque') ? 'bg-green-900/10' : 
      gameId.includes('manzanas') ? 'bg-red-50/20' : 
      gameId.includes('cronista') ? 'bg-amber-50/20' : 'bg-[#fdfcf8]'
    }`}>
      {/* Scene Decorations */}
      {gameId.includes('bosque') && <Pictogram term="tree" size={200} className="absolute bottom-0 right-0 opacity-10 -rotate-12 translate-x-12 translate-y-12 pointer-events-none" />}
      {gameId.includes('manzanas') && <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none"><Pictogram term="apple" size={120} /></div>}
      {gameId.includes('cronista') && <div className="absolute top-4 left-4 opacity-20 pointer-events-none"><Pictogram term="scroll" size={140} /></div>}

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,99,33,0.03)_0%,transparent_80%)]" />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-serif italic text-accent uppercase tracking-[4px] bg-white/90 px-8 py-3 rounded-2xl border-2 border-accent/10 backdrop-blur-sm shadow-2xl z-20">
        LA MISIÓN DEL DÍA: {
          gameId.includes('bosque') ? 'BUSCA AL GRÚFALO' : 
          gameId.includes('manzanas') ? 'MANZANAS ROJAS' : 
          gameId.includes('hadas') ? 'POLVO DE ESTRELLAS' : 
          gameId.includes('desvan') ? 'OBJETOS DE ALICIA' : 
          gameId.includes('piratas') ? 'BARCOS PIRATAS' : 
          gameId.includes('cartas') ? 'SELLOS REALES' :
          gameId.includes('mapa') ? 'ERRORES EN NARNIA' :
          gameId.includes('escritor') ? 'HUELLAS AZULES' :
          gameId.includes('cronista') ? 'INTRUSOS MODERNOS' : 'OBJETOS MÁGICOS'
        }
      </div>

      {shapes.map(shape => (
        <motion.div
          key={shape.id}
          initial={{ scale: 0, opacity: 0, rotate: -20 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
          onClick={() => handleAttentionClick(shape)}
          style={{ left: `${shape.x}%`, top: `${shape.y}%` }}
          className={`absolute cursor-pointer w-20 h-20 flex items-center justify-center transition-all active:scale-90 ${
            clickFeedback?.id === shape.id && clickFeedback.type === 'correct' ? 'scale-125 z-50' :
            clickFeedback?.id === shape.id && clickFeedback.type === 'incorrect' ? 'animate-shake' : ''
          }`}
        >
          {(() => {
            const isCorrect = clickFeedback?.id === shape.id && clickFeedback.type === 'correct';
            const isIncorrect = clickFeedback?.id === shape.id && clickFeedback.type === 'incorrect';
            
            const mainColor = isCorrect ? '#22c55e' : 
                            isIncorrect ? '#facc15' : 
                            shape.color === 'blue' ? '#3B82F6' :
                            shape.color === 'gold' ? '#D4AF37' :
                            shape.color === 'teal' ? '#2DD4BF' :
                            shape.color === 'red' ? '#ef4444' : '#FF6321';

            return (
              <div className={`relative flex items-center justify-center transition-all ${
                isCorrect ? 'scale-125' :
                isIncorrect ? 'animate-shake' : ''
              }`}>
                <div className="absolute inset-0 blur-2xl opacity-20 rounded-full" style={{ backgroundColor: mainColor }} />
                <div className="relative z-10 filter drop-shadow-[0_2px_0_white] drop-shadow-[0_-2px_0_white] drop-shadow-[2px_0_0_white] drop-shadow-[-2px_0_0_white] drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] flex flex-col items-center">
                  <Pictogram term={shape.type} color={shape.color} size={56} />
                  {shape.value && (
                    <div className="absolute top-full mt-2 px-3 py-1 bg-white border-2 border-slate-800 rounded-lg shadow-xl whitespace-nowrap">
                      <span className="text-[14px] font-black text-slate-800 font-serif uppercase tracking-tight">{shape.value}</span>
                    </div>
                  )}
                </div>
                {shape.color === 'blue' && gameId.includes('escritor') && (
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none filter drop-shadow-[0_1px_0_white] drop-shadow-[0_-1px_0_white] drop-shadow-[1px_0_0_white] drop-shadow-[-1px_0_0_white]">
                    <Pictogram term="clue" size={40} className="opacity-40" />
                  </div>
                )}
              </div>
            );
          })()}
        </motion.div>
      ))}
    </div>
  );
}
