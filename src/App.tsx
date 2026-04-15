import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, Search, Cpu, Shield, Rocket, Zap, RefreshCw, GitBranch, Map as MapIcon, Layers, 
  Brain, Info, BarChart3, ChevronRight, Play, X, CheckCircle2, AlertCircle, Filter, ArrowLeft, Bot
} from 'lucide-react';
import { GAMES, METRICS } from './constants';
import { GameDefinition, Grade } from './types';
import Assistant from './components/Assistant';

const ICON_MAP: Record<string, any> = {
  Target, Search, Cpu, Shield, Rocket, Zap, RefreshCw, GitBranch, Map: MapIcon, Layers, Bot
};

const GRADES: Grade[] = [
  'Infantil 3 años', 'Infantil 4 años', 'Infantil 5 años',
  'Primaria 1º', 'Primaria 2º', 'Primaria 3º',
  'Primaria 4º', 'Primaria 5º', 'Primaria 6º'
];

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

interface GameCardProps {
  game: GameDefinition;
  onClick: () => void;
  key?: string | number;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'city' | 'theory' | 'metrics'>('city');
  const [selectedGame, setSelectedGame] = useState<GameDefinition | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<Grade | 'Todos'>('Todos');
  const [isPlaying, setIsPlaying] = useState(false);

  const filteredGames = selectedGrade === 'Todos' 
    ? GAMES 
    : GAMES.filter(g => g.grade === selectedGrade);

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/30">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-2/5 blur-[120px] rounded-full" />
      </div>

      <Assistant 
        gameName={selectedGame?.name} 
        context={selectedGame ? `${selectedGame.executiveFunction}: ${selectedGame.gameplay}` : undefined} 
      />

      {/* Header */}
      <header className="sticky top-0 z-30 border-b-2 border-accent bg-card/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center shadow-lg shadow-accent/20">
              <Brain className="text-bg w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-wider text-accent uppercase">
                Metrópolis Matemática v2.0
              </h1>
              <div className="flex gap-4 text-[10px] font-mono text-text-dim uppercase">
                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-neon-green" /> SISTEMA: ACTIVO</span>
                <span className="hidden sm:inline">MODO: DISEÑO EDUCATIVO</span>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-1 bg-bg/50 p-1 rounded border border-slate-700">
            <NavButton 
              active={activeTab === 'city'} 
              onClick={() => setActiveTab('city')}
              icon={<MapIcon size={16} />}
              label="Ciudad"
            />
            <NavButton 
              active={activeTab === 'theory'} 
              onClick={() => setActiveTab('theory')}
              icon={<Info size={16} />}
              label="Teoría"
            />
            <NavButton 
              active={activeTab === 'metrics'} 
              onClick={() => setActiveTab('metrics')}
              icon={<BarChart3 size={16} />}
              label="Métricas"
            />
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'city' && (
            <motion.div 
              key="city"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-bold mb-4">Centro de Mando</h2>
                  <p className="text-white/60 text-lg">
                    Explora los distritos de la ciudad. Cada zona entrena una capacidad específica de tu cerebro.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] font-bold uppercase tracking-[2px] text-accent-2 flex items-center gap-2">
                    <Filter size={12} /> FILTRAR POR CURSO
                  </label>
                  <select 
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value as any)}
                    className="bg-card border border-slate-700 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-accent transition-colors cursor-pointer text-text"
                  >
                    <option value="Todos" className="bg-bg">Todos los cursos</option>
                    {GRADES.map(g => (
                      <option key={g} value={g} className="bg-bg">{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onClick={() => setSelectedGame(game)}
                  />
                ))}
              </div>

              {filteredGames.length === 0 && (
                <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
                  <p className="text-white/20 italic">No hay juegos disponibles para este filtro todavía.</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'theory' && (
            <motion.div 
              key="theory"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-4xl mx-auto"
            >
              <TheorySection />
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div 
              key="metrics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <MetricsSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedGame(null);
                setIsPlaying(false);
              }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-card border border-slate-700 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
            >
              {!isPlaying ? (
                <div className="grid grid-cols-1 md:grid-cols-2 relative">
                  <button 
                    onClick={() => setSelectedGame(null)}
                    className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-700 rounded-lg transition-colors text-text-dim"
                  >
                    <X size={20} />
                  </button>
                  <div className="p-8 md:p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-bg rounded flex items-center justify-center border border-slate-700">
                        {(() => {
                          const Icon = ICON_MAP[selectedGame.icon] || Target;
                          return <Icon className="text-accent w-6 h-6" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-accent-2">
                          {selectedGame.executiveFunction}
                        </span>
                        <h3 className="text-2xl font-bold text-text">{selectedGame.name}</h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <InfoItem label="Curso" value={selectedGame.grade} />
                      <InfoItem label="Mecánica" value={selectedGame.gameplay} />
                      <InfoItem label="Controles" value={selectedGame.controls} />
                      <InfoItem label="Progresión" value={selectedGame.progression} />
                      <InfoItem label="Feedback" value={selectedGame.feedback} />
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => setIsPlaying(true)}
                        className="flex-1 py-3 bg-accent hover:bg-accent/90 text-bg rounded font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wider"
                      >
                        <Play size={16} fill="currentColor" />
                        Iniciar Simulación
                      </button>
                      <button 
                        onClick={() => setSelectedGame(null)}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-text rounded font-bold text-sm transition-all active:scale-95 uppercase tracking-wider"
                      >
                        Volver
                      </button>
                    </div>
                  </div>
                  <div className="bg-bg flex items-center justify-center p-12 border-l border-slate-700">
                    <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <div className="absolute inset-0 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-colors" />
                      <div className="relative w-56 h-56 border border-dashed border-slate-700 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite]">
                        <div className="w-40 h-40 border border-accent/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
                          <div className="w-24 h-24 bg-accent/5 rounded-full flex items-center justify-center">
                            <Play className="text-accent w-10 h-10 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[600px] flex flex-col">
                  <div className="p-4 border-b border-slate-700 flex items-center justify-between bg-bg">
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider">{selectedGame.name}</h4>
                    <button 
                      onClick={() => setIsPlaying(false)}
                      className="p-1.5 hover:bg-slate-700 rounded transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <div className="flex-1 relative overflow-hidden bg-bg">
                    <GameEngine game={selectedGame} onExit={() => setIsPlaying(false)} />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: NavButtonProps) {
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

function GameCard({ game, onClick }: GameCardProps) {
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
          <span className="text-[0.65rem] font-bold uppercase tracking-[1px] text-accent-2">
            {game.executiveFunction}
          </span>
          <h3 className="text-sm font-bold text-text mt-0.5">{game.name}</h3>
          <p className="text-[0.7rem] text-text-dim line-clamp-2 mt-1 leading-tight">
            {game.gameplay}
          </p>
        </div>
        
        <div className="flex items-center gap-2 pt-3 border-t border-slate-700/50">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green" />
          <span className="text-[0.6rem] text-text-dim uppercase tracking-tighter">{game.controls}</span>
        </div>
      </div>
    </motion.div>
  );
}

function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[0.65rem] font-bold uppercase tracking-[2px] text-accent-2">{label}</p>
      <p className="text-xs text-text-dim leading-relaxed">{value}</p>
    </div>
  );
}

function TheorySection() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-text">Manual Neuroeducativo</h2>
        <p className="text-sm text-text-dim max-w-xl mx-auto">
          Estrategias de entrenamiento cognitivo para la Metrópolis Matemática.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TheoryCard 
          title="Atención" 
          desc="Filtro de estímulos críticos. En nuestra ciudad, es el radar que detecta señales en el ruido digital."
        />
        <TheoryCard 
          title="Memoria de Trabajo" 
          desc="Retención operativa de datos. Es la energía que mantiene activos los hologramas mientras resolvemos un puzzle."
        />
        <TheoryCard 
          title="Control Inhibitorio" 
          desc="Control de impulsos automáticos. Es el sistema de seguridad que evita acciones precipitadas."
        />
        <TheoryCard 
          title="Flexibilidad Cognitiva" 
          desc="Adaptación a cambios de reglas. Es la capacidad de cambiar de estrategia cuando el entorno evoluciona."
        />
        <TheoryCard 
          title="Planificación" 
          desc="Estrategia secuencial hacia metas. Es el diseño lógico de las redes de energía de la ciudad."
        />
      </div>

      <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
          <Brain size={14} /> Neuro-Arquitectura
        </h3>
        <p className="text-xs text-text-dim leading-relaxed">
          La ciudad utiliza estímulos geométricos de alto contraste para activar el córtex prefrontal. Cada zona entrena una FE específica mediante el juego inmersivo, reduciendo la ansiedad matemática mediante una narrativa de exploración futurista.
        </p>
      </div>
    </div>
  );
}

function TheoryCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-5 bg-card border border-slate-700 rounded-lg space-y-2">
      <h3 className="text-sm font-bold text-accent uppercase tracking-wider">{title}</h3>
      <p className="text-text-dim text-[0.75rem] leading-snug">{desc}</p>
    </div>
  );
}

function MetricsSection() {
  return (
    <div className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-text">Centro de Mando</h2>
        <p className="text-sm text-text-dim max-w-xl mx-auto">
          Monitorización de rendimiento ejecutivo en tiempo real.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {METRICS.map((m, i) => (
          <div key={i} className="flex flex-col gap-2 p-4 bg-card border border-slate-700 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-[0.7rem] font-bold text-text uppercase tracking-wider">{m.label}</h3>
              <span className="text-[0.6rem] font-mono text-accent">STATUS: OK</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${70 + Math.random() * 20}%` }}
                className="h-full bg-accent"
              />
            </div>
            <p className="text-[0.65rem] text-text-dim italic">{m.description}</p>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-800">
        <div className="text-[0.65rem] font-bold uppercase tracking-[2px] text-accent-2 mb-4">Métricas Registro</div>
        <div className="flex flex-wrap gap-2">
          {['Latencia Táctil', 'Errores Omisión', 'Perseveración', 'Curva Aprendizaje', 'Puntos de Fatiga'].map(tag => (
            <span key={tag} className="text-[0.6rem] px-2 py-1 bg-slate-800 rounded border border-slate-700 text-text-dim uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Advanced Game Engine for all 45 games
function GameEngine({ game, onExit }: { game: GameDefinition, onExit: () => void }) {
  const [gameStatus, setGameStatus] = useState<'briefing' | 'playing' | 'won' | 'lost'>('briefing');
  const [score, setScore] = useState(0);
  const gameId = game.id;
  
  // Attention State
  const [shapes, setShapes] = useState<{ id: number, type: string, x: number, y: number, color: string, value?: string, icon?: any }[]>([]);
  
  // Memory State
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [activeWindow, setActiveWindow] = useState<number | null>(null);

  // Inhibition State
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const [isPressing, setIsPressing] = useState(false);
  const [stroopColor, setStroopColor] = useState({ text: 'ROJO', color: '#FB7185' });

  // Flexibility State
  const [draggedItem, setDraggedItem] = useState<any>(null);
  const [flexItems, setFlexItems] = useState<any[]>([]);
  const [flexRule, setFlexRule] = useState<'color' | 'size' | 'shape'>('color');

  // Planning State
  const [towerBlocks, setTowerBlocks] = useState<any[]>([]);
  const [placedBlocks, setPlacedBlocks] = useState<any[]>([]);

  const isPrimary = game.grade.includes('Primaria');

  // --- ATTENTION LOGIC ---
  useEffect(() => {
    if (gameId.includes('at-') && gameStatus === 'playing') {
      const interval = setInterval(() => {
        let type = 'circle';
        if (gameId.includes('letras')) type = 'letter';
        else if (gameId.includes('escaner')) type = 'number';
        else if (gameId.includes('formas')) type = Math.random() > 0.5 ? 'circle' : 'square';
        
        const vowels = 'AEIOU';
        const consonants = 'BCDFG';
        const value = type === 'letter' 
          ? (Math.random() > 0.4 ? vowels[Math.floor(Math.random() * 5)] : consonants[Math.floor(Math.random() * 5)])
          : type === 'number' ? Math.floor(Math.random() * 10).toString() : undefined;
        
        const color = Math.random() > 0.5 ? 'blue' : 'red';
        
        const newShape = {
          id: Date.now(),
          type,
          value,
          color,
          x: Math.random() * 70 + 15,
          y: Math.random() * 60 + 20
        };
        setShapes(prev => [...prev.slice(-6), newShape]);
      }, isPrimary ? 1000 : 1500);
      return () => clearInterval(interval);
    }
  }, [gameId, gameStatus, isPrimary]);

  const handleAttentionClick = (item: any) => {
    let correct = false;
    if (gameId.includes('at-i3')) correct = item.color === 'blue';
    else if (gameId.includes('at-i4')) correct = item.type === 'circle';
    else if (gameId.includes('escaner')) correct = item.value === '5';
    else if (gameId.includes('letras')) correct = 'AEIOU'.includes(item.value || '');
    else correct = true;

    if (correct) {
      setScore(s => s + 1);
      setShapes(prev => prev.filter(s => s.id !== item.id));
      if (score + 1 >= (isPrimary ? 8 : 5)) setGameStatus('won');
    } else {
      setGameStatus('lost');
    }
  };

  // --- MEMORY LOGIC ---
  useEffect(() => {
    if (gameId.includes('wm-') && sequence.length === 0 && gameStatus === 'playing') {
      const startSeq = isPrimary ? [1, 3] : [0];
      setSequence(startSeq);
      playSequence(startSeq);
    }
  }, [gameId, gameStatus]);

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

  const handleWindowClick = (id: number) => {
    if (isShowingSequence || gameStatus !== 'playing') return;
    
    const targetIdx = gameId.includes('p2') || gameId.includes('p3') 
      ? sequence.length - 1 - userSequence.length 
      : userSequence.length;

    if (id === sequence[targetIdx]) {
      const nextUserSeq = [...userSequence, id];
      setUserSequence(nextUserSeq);
      if (nextUserSeq.length === sequence.length) {
        if (sequence.length >= (isPrimary ? 5 : 3)) {
          setGameStatus('won');
        } else {
          const nextSeq = [...sequence, Math.floor(Math.random() * 4)];
          setSequence(nextSeq);
          setUserSequence([]);
          setTimeout(() => playSequence(nextSeq), 1000);
        }
      }
    } else {
      setGameStatus('lost');
    }
  };

  // --- INHIBITION LOGIC ---
  useEffect(() => {
    if (gameId.includes('ci-') && gameStatus === 'playing') {
      const interval = setInterval(() => {
        setIsMusicPlaying(prev => !prev);
        if (gameId.includes('stroop')) {
          const colors = [
            { text: 'ROJO', color: '#FB7185' },
            { text: 'AZUL', color: '#38BDF8' },
            { text: 'VERDE', color: '#4ADE80' }
          ];
          setStroopColor({
            text: colors[Math.floor(Math.random() * 3)].text,
            color: colors[Math.floor(Math.random() * 3)].color
          });
        }
      }, isPrimary ? 1800 : 3000);
      return () => clearInterval(interval);
    }
  }, [gameId, gameStatus, isPrimary]);

  useEffect(() => {
    if (gameId.includes('ci-') && !gameId.includes('stroop') && gameStatus === 'playing') {
      if (isPressing && !isMusicPlaying) {
        setGameStatus('lost');
      }
      if (isPressing && isMusicPlaying) {
        setScore(s => s + 0.1);
        if (score > 5) setGameStatus('won');
      }
    }
  }, [isPressing, isMusicPlaying, score, gameId, gameStatus]);

  // --- FLEXIBILITY LOGIC ---
  useEffect(() => {
    if (gameId.includes('fx-') && flexItems.length === 0 && gameStatus === 'playing') {
      const items = [
        { id: 1, color: 'blue', size: 'large', type: 'circle' },
        { id: 2, color: 'red', size: 'small', type: 'square' },
        { id: 3, color: 'blue', size: 'small', type: 'triangle' }
      ];
      setFlexItems(items);
    }
  }, [gameId, gameStatus]);

  const handleFlexDrop = (item: any, target: string) => {
    let correct = false;
    if (flexRule === 'color') correct = item.color === target;
    else if (flexRule === 'size') correct = item.size === target;
    else if (flexRule === 'shape') correct = item.type === target;
    
    if (correct) {
      const remaining = flexItems.filter(i => i.id !== item.id);
      setFlexItems(remaining);
      if (remaining.length === 0) {
        if (flexRule === 'color') {
          setFlexRule('size');
          setFlexItems([
            { id: 4, color: 'red', size: 'large', type: 'square' },
            { id: 5, color: 'blue', size: 'small', type: 'circle' },
            { id: 6, color: 'red', size: 'small', type: 'triangle' }
          ]);
        } else if (flexRule === 'size' && isPrimary) {
          setFlexRule('shape');
          setFlexItems([
            { id: 7, color: 'blue', size: 'large', type: 'circle' },
            { id: 8, color: 'red', size: 'large', type: 'triangle' },
            { id: 9, color: 'blue', size: 'small', type: 'square' }
          ]);
        } else {
          setGameStatus('won');
        }
      }
    } else {
      setGameStatus('lost');
    }
  };

  // --- PLANNING LOGIC ---
  useEffect(() => {
    if (gameId.includes('pl-') && towerBlocks.length === 0 && gameStatus === 'playing') {
      const count = isPrimary ? 5 : 3;
      const blocks = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: count - i,
        color: i % 2 === 0 ? '#38BDF8' : '#818CF8'
      }));
      setTowerBlocks(blocks);
    }
  }, [gameId, isPrimary, gameStatus]);

  const handleBlockPlace = (block: any) => {
    if (gameStatus !== 'playing') return;
    const lastSize = placedBlocks.length > 0 ? placedBlocks[placedBlocks.length - 1].size : 10;
    if (block.size < lastSize) {
      const newPlaced = [...placedBlocks, block];
      setPlacedBlocks(newPlaced);
      setTowerBlocks(prev => prev.filter(b => b.id !== block.id));
      if (newPlaced.length === (isPrimary ? 5 : 3)) setGameStatus('won');
    } else {
      setGameStatus('lost');
    }
  };

  if (gameStatus === 'won') return <GameResult status="won" onRetry={() => { setGameStatus('briefing'); setScore(0); setSequence([]); setTowerBlocks([]); setPlacedBlocks([]); }} onExit={onExit} />;
  if (gameStatus === 'lost') return <GameResult status="lost" onRetry={() => { setGameStatus('briefing'); setScore(0); setSequence([]); setUserSequence([]); setPlacedBlocks([]); }} onExit={onExit} />;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-bg relative overflow-hidden">
      {/* Back Button */}
      <button 
        onClick={onExit}
        className="absolute top-6 left-6 z-30 p-2 bg-card hover:bg-slate-700 border border-slate-700 rounded-lg text-text-dim hover:text-accent transition-all flex items-center gap-2 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:block">Salir</span>
      </button>

      <AnimatePresence mode="wait">
        {gameStatus === 'briefing' ? (
          <motion.div 
            key="briefing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="max-w-md w-full bg-card border border-slate-700 rounded-2xl p-8 space-y-6 shadow-2xl relative z-20"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center border border-accent/40">
                <Bot className="text-accent w-7 h-7" />
              </div>
              <div>
                <h3 className="text-accent-2 text-[10px] font-bold uppercase tracking-widest">Misión de Math-Bot</h3>
                <h2 className="text-xl font-black text-text uppercase tracking-tighter">{game.name}</h2>
              </div>
            </div>
            
            <div className="bg-bg/50 rounded-xl p-4 border border-slate-800">
              <p className="text-sm text-text-dim leading-relaxed">
                {game.gameplay}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-accent uppercase">
              <Zap size={12} /> {game.controls}
            </div>

            <button 
              onClick={() => setGameStatus('playing')}
              className="w-full py-4 bg-accent text-bg font-black rounded-xl uppercase tracking-widest hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20"
            >
              ¡Comenzar Misión!
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full flex flex-col items-center justify-center"
          >
            {/* Game Header Info */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20">
              <span className="text-[10px] font-bold text-accent-2 uppercase tracking-[3px]">{game.executiveFunction}</span>
              <div className="flex gap-2 mt-2">
                {Array.from({ length: isPrimary ? 8 : 5 }).map((_, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full border border-slate-700 transition-all duration-300 ${i < Math.floor(score) ? 'bg-accent shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-110' : 'bg-bg'}`} />
                ))}
              </div>
            </div>

            {/* ATTENTION ENGINE */}
            {gameId.includes('at-') && (
              <div className="relative w-full h-full border border-slate-700/50 rounded-3xl flex items-center justify-center overflow-hidden bg-bg/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)]" />
                <div className="absolute w-full h-0.5 bg-accent/5 animate-[spin_10s_linear_infinite]" />
                
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-accent uppercase tracking-[4px] bg-bg/80 px-6 py-2 rounded-full border border-accent/20 backdrop-blur-sm">
                  OBJETIVO: {gameId.includes('escaner') ? 'NÚMERO 5' : gameId.includes('letras') ? 'VOCALES' : 'GLOBOS AZULES'}
                </div>

                {shapes.map(shape => (
                  <motion.div
                    key={shape.id}
                    initial={{ scale: 0, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 1.5, opacity: 0, rotate: 20 }}
                    onClick={() => handleAttentionClick(shape)}
                    style={{ left: `${shape.x}%`, top: `${shape.y}%` }}
                    className="absolute cursor-pointer w-20 h-20 flex items-center justify-center transition-transform active:scale-90"
                  >
                    {shape.type === 'number' || shape.type === 'letter' ? (
                      <div className={`text-5xl font-black select-none ${shape.color === 'blue' ? 'text-accent' : 'text-neon-red'} drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]`}>
                        {shape.value}
                      </div>
                    ) : (
                      <div className={`w-14 h-14 border-4 border-white/30 shadow-2xl relative flex items-center justify-center ${
                        shape.type === 'circle' ? 'rounded-full' : 'rounded-xl'
                      } ${
                        shape.color === 'blue' ? 'bg-accent shadow-accent/40' : 'bg-neon-red shadow-neon-red/40'
                      }`}>
                        <div className="absolute top-1 left-1 w-3 h-3 bg-white/40 rounded-full blur-[2px]" />
                        {shape.type === 'circle' ? <Target size={24} className="text-white/20" /> : <Layers size={24} className="text-white/20" />}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* MEMORY ENGINE */}
            {gameId.includes('wm-') && (
              <div className="grid grid-cols-2 gap-6 w-full max-w-sm p-4">
                {[0, 1, 2, 3].map(id => (
                  <motion.div
                    key={id}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleWindowClick(id)}
                    className={`aspect-square rounded-2xl border-2 transition-all duration-300 cursor-pointer flex items-center justify-center relative overflow-hidden ${
                      activeWindow === id ? 'bg-accent border-white shadow-[0_0_40px_rgba(56,189,248,0.9)]' : 'bg-card border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent ${activeWindow === id ? 'opacity-100' : 'opacity-0'}`} />
                    <Cpu className={`w-10 h-10 transition-colors ${activeWindow === id ? 'text-bg' : 'text-slate-800'}`} />
                  </motion.div>
                ))}
                <div className="col-span-2 text-center text-xs font-mono text-accent uppercase tracking-[3px] mt-8 bg-accent/5 py-2 rounded-lg border border-accent/10">
                  {isShowingSequence ? 'OBSERVA EL PATRÓN' : '¡TU TURNO! REPITELO'}
                </div>
              </div>
            )}

            {/* INHIBITION ENGINE */}
            {gameId.includes('ci-') && (
              <div className="flex flex-col items-center gap-12">
                {gameId.includes('stroop') ? (
                  <div className="text-center space-y-12">
                    <motion.div 
                      key={stroopColor.text + stroopColor.color}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-16 bg-card border border-slate-700 rounded-3xl shadow-2xl"
                    >
                      <h3 style={{ color: stroopColor.color }} className="text-7xl font-black tracking-tighter uppercase">
                        {stroopColor.text}
                      </h3>
                    </motion.div>
                    <div className="flex gap-6 justify-center">
                      {[
                        { name: 'ROJO', color: '#FB7185' },
                        { name: 'AZUL', color: '#38BDF8' },
                        { name: 'VERDE', color: '#4ADE80' }
                      ].map(c => (
                        <button 
                          key={c.color}
                          onClick={() => {
                            if (c.color === stroopColor.color) setScore(s => s + 1);
                            else setGameStatus('lost');
                            if (score + 1 >= 8) setGameStatus('won');
                          }}
                          style={{ backgroundColor: c.color }}
                          className="w-20 h-20 rounded-2xl border-4 border-white/20 active:scale-90 transition-all shadow-lg hover:brightness-110"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-text-dim uppercase tracking-[2px]">TOCA EL COLOR DE LA TINTA, NO LA PALABRA</p>
                  </div>
                ) : (
                  <>
                    <div className={`w-40 h-40 rounded-full flex items-center justify-center border-8 transition-all duration-500 ${
                      isMusicPlaying ? 'border-neon-green shadow-[0_0_60px_rgba(74,222,128,0.5)]' : 'border-neon-red shadow-[0_0_60px_rgba(251,113,133,0.5)]'
                    }`}>
                      <motion.div
                        animate={isMusicPlaying && isPressing ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                      >
                        <Bot className={`w-20 h-20 transition-colors ${isMusicPlaying && isPressing ? 'text-neon-green' : 'text-slate-800'}`} />
                      </motion.div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className={`text-lg font-black uppercase tracking-[4px] ${isMusicPlaying ? 'text-neon-green' : 'text-neon-red'}`}>
                        {isMusicPlaying ? '¡BAILA! (MANTÉN)' : '¡PARA! (SUELTA)'}
                      </p>
                      <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto border border-slate-700">
                        <motion.div 
                          animate={{ width: `${(score / 5) * 100}%` }}
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
                  </>
                )}
              </div>
            )}

            {/* FLEXIBILITY ENGINE */}
            {gameId.includes('fx-') && (
              <div className="flex flex-col items-center gap-16 w-full max-w-2xl">
                <div className="text-center bg-accent/10 border border-accent/30 px-8 py-3 rounded-2xl backdrop-blur-sm">
                  <p className="text-xs font-bold text-accent-2 uppercase tracking-[3px] mb-1">REGLA ACTUAL</p>
                  <p className="text-xl font-black text-text uppercase tracking-tight">
                    {flexRule === 'color' ? 'COLOR (AZUL)' : 
                     flexRule === 'size' ? 'TAMAÑO (GRANDE)' : 'FORMA (CÍRCULO)'}
                  </p>
                </div>
                <div className="flex gap-12 justify-center w-full h-40 items-center">
                  {flexItems.map(item => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleFlexDrop(item, 
                        flexRule === 'color' ? 'blue' : 
                        flexRule === 'size' ? 'large' : 'circle'
                      )}
                      className={`cursor-pointer flex items-center justify-center rounded-2xl border-4 shadow-xl transition-colors ${
                        item.color === 'blue' ? 'bg-accent/20 border-accent' : 'bg-neon-red/20 border-neon-red'
                      } ${item.size === 'large' ? 'w-24 h-24' : 'w-14 h-14'}`}
                    >
                      {item.type === 'circle' && <div className="w-2/3 h-2/3 rounded-full border-2 border-white/40" />}
                      {item.type === 'square' && <div className="w-2/3 h-2/3 border-2 border-white/40" />}
                      {item.type === 'triangle' && <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-white/40" />}
                    </motion.div>
                  ))}
                </div>
                <div className="w-full h-40 border-4 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center bg-slate-800/20 group">
                  <div className="w-16 h-16 bg-slate-700/30 rounded-full flex items-center justify-center mb-2">
                    <RefreshCw className="text-slate-600 group-hover:rotate-180 transition-transform duration-500" />
                  </div>
                  <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">TOCA LOS OBJETOS QUE CUMPLAN LA REGLA</p>
                </div>
              </div>
            )}

            {/* PLANNING ENGINE */}
            {gameId.includes('pl-') && (
              <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col-reverse items-center gap-1 min-h-[250px] w-80 border-b-8 border-slate-800 pb-2 relative">
                  <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -z-10" />
                  {placedBlocks.map(block => (
                    <motion.div
                      key={block.id}
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      style={{ width: `${block.size * 50}px`, backgroundColor: block.color }}
                      className="h-10 rounded-lg border-2 border-white/20 shadow-2xl flex items-center justify-center"
                    >
                      <div className="w-full h-1 bg-white/10 mt-auto mb-1 mx-2 rounded-full" />
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap justify-center max-w-md">
                  {towerBlocks.map(block => (
                    <motion.button
                      key={block.id}
                      whileHover={{ y: -8, scale: 1.05 }}
                      onClick={() => handleBlockPlace(block)}
                      style={{ width: `${block.size * 40}px`, backgroundColor: block.color }}
                      className="h-12 rounded-lg border-2 border-white/20 shadow-xl flex items-center justify-center text-xs font-black text-bg uppercase"
                    >
                      {block.size}
                    </motion.button>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-text-dim uppercase tracking-[3px]">
                  <Layers size={14} /> ORDENA DE MAYOR A MENOR
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GameResult({ status, onRetry, onExit }: { status: 'won' | 'lost', onRetry: () => void, onExit: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full flex flex-col items-center justify-center space-y-6 p-10 text-center"
    >
      {status === 'won' ? (
        <>
          <div className="w-20 h-20 bg-neon-green/10 rounded-full flex items-center justify-center border border-neon-green/30">
            <CheckCircle2 className="text-neon-green w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-neon-green uppercase tracking-tighter">Simulación Éxito</h3>
            <p className="text-text-dim text-xs">Entrenamiento completado satisfactoriamente.</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-20 h-20 bg-neon-red/10 rounded-full flex items-center justify-center border border-neon-red/30">
            <AlertCircle className="text-neon-red w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-neon-red uppercase tracking-tighter">Fallo de Sistema</h3>
            <p className="text-text-dim text-xs">Se ha detectado una interferencia crítica.</p>
          </div>
        </>
      )}

      <div className="flex flex-col w-full max-w-[200px] gap-2">
        <button 
          onClick={onRetry}
          className="py-2 bg-accent text-bg font-bold rounded text-xs uppercase tracking-widest hover:bg-accent/90 transition-colors"
        >
          Reintentar
        </button>
        <button 
          onClick={onExit}
          className="py-2 bg-slate-800 text-text font-bold rounded text-xs uppercase tracking-widest hover:bg-slate-700 transition-colors"
        >
          Salir
        </button>
      </div>
    </motion.div>
  );
}
