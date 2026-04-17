import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, Search, Cpu, Shield, RefreshCw, Layers, 
  Brain, Info, BarChart3, ChevronRight, Play, X, CheckCircle2, AlertCircle, ArrowLeft, Bot,
  Smile, Frown, Flower, BookOpen, Volume2, Ghost, Music, ArrowUp, ArrowDown, Footprints, ClipboardList, PenTool, ShoppingCart, Star,
  Map as MapIcon, Filter, Zap, Rocket, GitBranch,
  Cookie, Cake, Gift, Moon, Sun, Cloud, Heart, Tent, Wind, Gem, Crown, Lightbulb, Apple, IceCream, Plane, Car, Train,
  Shirt, Library, Dog, Coffee, Pizza, Bike, Camera, Music2, Trees, Egg, School, Palette,
  Sword, Shield as ShieldIcon, Anchor, Compass, Scroll, Pen, Book, MapPin, Watch, Timer, Trash2, Key, Rabbit, Clock, Ship, Mail, FileText, Hash, Eye, ZapOff,
  CircleDollarSign, ToyBrick, Bird, Flame, Sparkles, Wand2, Pipette, Dot, Wheat, Mountain, MountainSnow, Waves, Castle, Wand, Pipette as PipetteIcon
} from 'lucide-react';
import { GAMES, METRICS } from './constants';
import { GameDefinition, Grade } from './types';
import Assistant from './components/Assistant';

const TERM_ICON_MAP: Record<string, any> = {
  apple: Apple, 'manzana-roja': Apple, 'manzana-verde': Apple,
  cookie: Cookie, cake: Cake, icecream: IceCream, pizza: Pizza,
  plane: Plane, car: Car, train: Train, bike: Bike, sun: Sun, 
  moon: Moon, cloud: Cloud, wind: Wind, gem: Gem, crown: Crown,
  smile: Smile, frown: Frown, shirt: Shirt, flower: Flower, book: BookOpen,
  dog: Dog, tree: Trees, school: School, ghost: Ghost, egg: Egg, 
  palette: Palette, clue: Search, bot: Bot, star: Star, socks: Footprints,
  rainbow: RefreshCw, storm: Wind, cloak: Shield, letter: Mail, castle: Library,
  potion: Zap, cauldron: Coffee, flute: Music, drum: Music2, whistle: Volume2,
  broom: GitBranch, shoe: Footprints, ball: Target, gift: Gift, heart: Heart,
  map: MapIcon, sword: Sword, shield: ShieldIcon, clock: Clock, glass: Timer,
  dragon: Ghost, letter_ancient: Scroll, parchment: Scroll, quill: Pen, anchor: Anchor, compass: Compass,
  rabbit: Rabbit, boat: Ship, ship: Ship, key: Key, lock: Shield, crown_gold: Crown, potion_green: Zap,
  lamp: Lightbulb, map_pin: MapPin, eye: Eye, box: Layers, ink_pot: Coffee, scroll: Scroll,
  coin: CircleDollarSign, toy: ToyBrick, bird: Bird, flame: Flame, sparkle: Sparkles, light: Sun, flash: Zap,
  magic: Wand, ink: PipetteIcon, magnify: Search, crumb: Dot, bread: Wheat, forest: Trees,
  tower: Castle, mountain: Mountain, cave: MountainSnow, river: Waves
};

function Pictogram({ term, color, size = 48, className = "" }: { term: string, color?: string, size?: number, className?: string }) {
  const Icon = TERM_ICON_MAP[term.toLowerCase()] || Target;
  
  const mainColor = color === 'blue' ? '#3B82F6' : 
                   color === 'red' ? '#ef4444' : 
                   color === 'teal' ? '#2DD4BF' : 
                   color === 'gold' ? '#D4AF37' : '#FF6321';

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon size={size * 0.8} style={{ color: mainColor }} strokeWidth={2.5} />
    </div>
  );
}

const ICON_MAP: Record<string, any> = {
  Target, Search, Cpu, Shield, Rocket, Zap, RefreshCw, GitBranch, Map: MapIcon, Layers, Bot, Library, BookOpen,
  CircleDollarSign, ToyBrick, Bird, Flame, Sparkles, Wand2, Pipette, Dot, Wheat, Castle, Mountain, MountainSnow, Waves
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
              <Brain className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold tracking-tight text-accent">
                La Biblio-Aventura
              </h1>
              <div className="flex gap-4 text-[10px] font-sans font-medium text-text-dim uppercase">
                <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-neon-green" /> MUNDO: ACTIVO</span>
                <span className="hidden sm:inline">ENTRENAMIENTO COGNITIVO</span>
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
                  <h2 className="text-4xl font-serif font-bold mb-4">Mapa de Cuentos</h2>
                  <p className="text-text-dim text-lg italic">
                    Explora los mundos literarios. Cada aventura entrena una capacidad secreta de tu mente.
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
        <h2 className="text-3xl font-serif font-bold text-text">Manual del Explorador Mental</h2>
        <p className="text-sm text-text-dim max-w-xl mx-auto">
          Cómo las historias y misterios modernos ayudan a entrenar tu cerebro.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TheoryCard 
          title="Atención" 
          desc="Es tu lupa de detective. Sirve para encontrar pistas importantes ignorando los calcetines sucios del monstruo."
        />
        <TheoryCard 
          title="Memoria de Trabajo" 
          desc="Es tu mochila mágica. Te permite guardar datos importantes (como códigos o ingredientes) mientras los usas."
        />
        <TheoryCard 
          title="Control Inhibitorio" 
          desc="Es tu freno de escoba. Evita que actúes por impulso y te ayuda a esperar el momento perfecto."
        />
        <TheoryCard 
          title="Flexibilidad Cognitiva" 
          desc="Es tu varita de transformación. Te permite cambiar de planes cuando la historia da un giro inesperado."
        />
        <TheoryCard 
          title="Planificación" 
          desc="Es tu mapa del tesoro. Sirve para organizar los pasos de tu aventura antes de empezar a caminar."
        />
      </div>

      <div className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-lg">
        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
          <Brain size={14} /> Neuro-Narrativa
        </h3>
        <p className="text-xs text-text-dim leading-relaxed">
          Utilizamos tropos de la literatura infantil actual (monstruos de emociones, detectives escolares, magia urbana) para crear un entorno de aprendizaje seguro y divertido. Al conectar con personajes y situaciones cotidianas, los niños reducen la resistencia al esfuerzo cognitivo.
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
        <h2 className="text-3xl font-serif font-bold text-text">Diario del Narrador</h2>
        <p className="text-sm text-text-dim max-w-xl mx-auto">
          Registro de la evolución cognitiva y logros del pequeño aventurero.
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
  const [stroopColor, setStroopColor] = useState({ text: 'ROJO', color: '#ef4444' });
  const [inhibTarget, setInhibTarget] = useState<'sun' | 'moon' | 'go' | 'stop'>('go');

  // Flexibility State
  const [draggedItem, setDraggedItem] = useState<any>(null);
  const [flexItems, setFlexItems] = useState<any[]>([]);
  const [flexRule, setFlexRule] = useState<'color' | 'size' | 'shape'>('color');

  // Planning State
  const [towerBlocks, setTowerBlocks] = useState<any[]>([]);
  const [placedBlocks, setPlacedBlocks] = useState<any[]>([]);
  const [clickFeedback, setClickFeedback] = useState<{ id: any, type: 'correct' | 'incorrect' } | null>(null);

  const isPrimary = game.grade.includes('Primaria');

  // --- ATTENTION LOGIC ---
  useEffect(() => {
    if (gameId.includes('at-') && gameStatus === 'playing') {
      const interval = setInterval(() => {
        let type = 'star';
        let color = Math.random() > 0.5 ? 'blue' : 'gold';
        let value = ""; // For text-based attention
        
        if (gameId.includes('bosque')) {
          // El Grúfalo
          type = Math.random() > 0.8 ? 'dragon' : 'tree';
          color = type === 'dragon' ? 'red' : 'teal';
        } else if (gameId.includes('manzanas')) {
          // Blancanieves
          type = Math.random() > 0.5 ? 'manzana-roja' : 'manzana-verde';
          color = type === 'manzana-roja' ? 'red' : 'teal';
        } else if (gameId.includes('hadas')) {
          // Polvo de estrellas
          type = 'star';
          color = 'gold';
        } else if (gameId.includes('desvan')) {
          // Alicia
          const items = ['key', 'rabbit', 'clock', 'book'];
          type = items[Math.floor(Math.random() * items.length)];
          color = 'blue';
        } else if (gameId.includes('piratas')) {
          // Piratas
          type = Math.random() > 0.4 ? 'ship' : 'boat';
          color = type === 'ship' ? 'red' : 'blue';
        } else if (gameId.includes('cartas')) {
          // Gigante
          type = 'letter';
          color = Math.random() > 0.7 ? 'gold' : 'blue';
        } else if (gameId.includes('mapa')) {
          // Narnia
          type = 'map';
          color = 'gold';
        } else if (gameId.includes('escritor')) {
          // Sherlock
          type = 'socks';
          color = Math.random() > 0.5 ? 'blue' : 'gold';
        } else if (gameId.includes('cronista')) {
          // Grade 6: XVII Century Intruders
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
    }
  }, [gameId, gameStatus, isPrimary]);

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
    else if (gameId.includes('cronista')) correct = item.color === 'red'; // Catch the modern intruder
    else correct = true;

    if (correct) {
      setClickFeedback({ id: item.id, type: 'correct' });
      setScore(s => s + 1);
      setTimeout(() => {
        setShapes(prev => prev.filter(s => s.id !== item.id));
        setClickFeedback(null);
      }, 300);
      if (score + 1 >= (isPrimary ? 8 : 5)) setGameStatus('won');
    } else {
      setClickFeedback({ id: item.id, type: 'incorrect' });
      setTimeout(() => setGameStatus('lost'), 500);
    }
  };

  // --- MEMORY LOGIC ---
  useEffect(() => {
    if (gameId.includes('wm-') && sequence.length === 0 && gameStatus === 'playing') {
      const initialSeq = Array.from({ length: 2 }, () => Math.floor(Math.random() * (isPrimary ? 6 : 4)));
      setSequence(initialSeq);
      playSequence(initialSeq);
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
    
    // Inverso logic for Primary 2 (wm-p2-eco)
    const isReverse = gameId.includes('eco');
    const targetIdx = isReverse
      ? sequence.length - 1 - userSequence.length 
      : userSequence.length;

    if (id === sequence[targetIdx]) {
      setClickFeedback({ id, type: 'correct' });
      const nextUserSeq = [...userSequence, id];
      setUserSequence(nextUserSeq);
      setTimeout(() => setClickFeedback(null), 300);
      
      if (nextUserSeq.length === sequence.length) {
        if (sequence.length >= (isPrimary ? 6 : 4)) {
          setTimeout(() => setGameStatus('won'), 400);
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
      setTimeout(() => setGameStatus('lost'), 500);
    }
  };

  // --- INHIBITION LOGIC ---
  useEffect(() => {
    if (gameId.includes('ci-') && gameStatus === 'playing') {
      const interval = setInterval(() => {
        // Toggle music/state
        const nextState = Math.random() > 0.4;
        setIsMusicPlaying(nextState);
        setInhibTarget(nextState ? 'go' : 'stop');
        
        if (gameId.includes('tinta')) {
          const colors = [
            { text: 'ROJO', color: '#ef4444' },
            { text: 'AZUL', color: '#3B82F6' },
            { text: 'VERDE', color: '#22c55e' }
          ];
          setStroopColor({
            text: colors[Math.floor(Math.random() * 3)].text,
            color: colors[Math.floor(Math.random() * 3)].color
          });
        }

        if (gameId.includes('reves')) {
          setInhibTarget(Math.random() > 0.5 ? 'sun' : 'moon');
        }

      }, isPrimary ? 1800 : 2800);
      return () => clearInterval(interval);
    }
  }, [gameId, gameStatus, isPrimary]);

  // Handle continuous pressing games
  useEffect(() => {
    let interval: any;
    if (gameId.includes('ci-') && !gameId.includes('tinta') && !gameId.includes('reves') && gameStatus === 'playing' && isPressing) {
      interval = setInterval(() => {
        const canPress = inhibTarget === 'go';
        if (canPress) {
          setScore(s => {
            const next = s + 0.05;
            if (next >= 5) setGameStatus('won');
            return next;
          });
        } else {
          setClickFeedback({ id: 'inhibition', type: 'incorrect' });
          setGameStatus('lost');
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPressing, inhibTarget, gameId, gameStatus]);

  // --- FLEXIBILITY LOGIC ---
  useEffect(() => {
    if (gameId.includes('fx-') && flexItems.length === 0 && gameStatus === 'playing') {
      let items = [];
      if (gameId.includes('monstruo')) {
        items = [
          { id: 1, color: 'blue', size: 'large', type: 'book' },
          { id: 2, color: 'red', size: 'small', type: 'book' },
          { id: 3, color: 'blue', size: 'small', type: 'book' }
        ];
        setFlexRule('color');
      } else if (gameId.includes('clima')) {
        items = [
          { id: 1, color: 'blue', size: 'large', type: 'cloud' },
          { id: 2, color: 'red', size: 'small', type: 'sun' },
          { id: 3, color: 'blue', size: 'small', type: 'rainbow' }
        ];
        setFlexRule('shape');
      } else if (gameId.includes('mascaras') || gameId.includes('disfraces')) {
        items = [
          { id: 1, color: 'blue', size: 'large', type: 'crown' },
          { id: 2, color: 'red', size: 'small', type: 'cloak' },
          { id: 3, color: 'blue', size: 'small', type: 'dog' }
        ];
        setFlexRule('shape');
      } else if (gameId.includes('cocina')) {
        items = [
          { id: 1, color: 'blue', size: 'large', type: 'apple' },
          { id: 2, color: 'red', size: 'small', type: 'apple' },
          { id: 3, color: 'blue', size: 'small', type: 'apple' }
        ];
        setFlexRule('color');
      } else if (gameId.includes('paradoja')) {
        // P6 Paradox
        items = [
          { id: 1, color: 'gold', size: 'large', type: 'clock' },
          { id: 2, color: 'blue', size: 'small', type: 'glass' },
          { id: 3, color: 'gold', size: 'small', type: 'clock' }
        ];
        setFlexRule('shape');
      } else if (gameId.includes('biblioteca')) {
        items = [
          { id: 1, color: 'blue', size: 'large', type: 'book' },
          { id: 2, color: 'gold', size: 'small', type: 'book' },
          { id: 3, color: 'blue', size: 'small', type: 'book' }
        ];
        setFlexRule('color');
      } else {
        items = [
          { id: 1, color: 'blue', size: 'large', type: 'star' },
          { id: 2, color: 'red', size: 'small', type: 'star' },
          { id: 3, color: 'blue', size: 'small', type: 'star' }
        ];
        setFlexRule('color');
      }
      setFlexItems(items);
    }
  }, [gameId, gameStatus]);

  const handleFlexDrop = (item: any, target: string) => {
    let correct = false;
    if (flexRule === 'color') correct = item.color === target;
    else if (flexRule === 'size') correct = item.size === target;
    else if (flexRule === 'shape') correct = item.type === target;
    
    if (correct) {
      setClickFeedback({ id: item.id, type: 'correct' });
      const remaining = flexItems.filter(i => i.id !== item.id);
      
      if (remaining.length === 0) {
        setTimeout(() => {
          // Change rules based on the new literary theme (emociones, clima, etc)
          const nextRule = flexRule === 'color' ? 'size' : flexRule === 'size' ? 'shape' : 'color';
          setFlexRule(nextRule);
          
          if (nextRule === 'shape' && !isPrimary) {
            setGameStatus('won');
            return;
          }

          if (score + 1 >= 2) {
            setGameStatus('won');
          } else {
            setScore(s => s + 1);
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
      setTimeout(() => setGameStatus('lost'), 500);
    }
  };

  // --- PLANNING LOGIC ---
  useEffect(() => {
    if (gameId.includes('pl-') && towerBlocks.length === 0 && gameStatus === 'playing') {
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
      } else if (gameId.includes('archive') || gameId.includes('archivo')) {
        // P6 Paradox Archive: SCROLL -> QUILL -> SEAL -> ARCHIVE
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
  }, [gameId, gameStatus, isPrimary]);

  const handleBlockPlace = (block: any) => {
    if (gameStatus !== 'playing') return;
    
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
      setTimeout(() => {
        setPlacedBlocks(newPlaced);
        setTowerBlocks(prev => {
          const filtered = prev.filter(b => b.id !== block.id);
          if (filtered.length === 0) setGameStatus('won');
          return filtered;
        });
        setClickFeedback(null);
      }, 300);
    } else {
      setClickFeedback({ id: block.id, type: 'incorrect' });
      setTimeout(() => setGameStatus('lost'), 500);
    }
  };

  const resetAll = () => {
    setScore(0);
    setShapes([]);
    setSequence([]);
    setUserSequence([]);
    setFlexItems([]);
    setTowerBlocks([]);
    setPlacedBlocks([]);
    setIsPressing(false);
    setClickFeedback(null);
    setActiveWindow(null);
    setIsShowingSequence(false);
  };

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
                  <h3 className="text-accent-2 text-[10px] font-bold uppercase tracking-widest">Aventura con Lectorín</h3>
                  <h2 className="text-xl font-serif font-bold text-text uppercase tracking-tight">{game.name}</h2>
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
              <div className={`relative w-full h-full border-4 border-accent-2/20 rounded-[2.5rem] flex items-center justify-center overflow-hidden transition-colors ${
                gameId.includes('bosque') ? 'bg-green-900/10' : 
                gameId.includes('manzanas') ? 'bg-red-50/20' : 
                gameId.includes('cronista') ? 'bg-amber-50/20' : 'bg-[#fdfcf8]'
              }`}>
                {/* Scene Decorations */}
                {gameId.includes('bosque') && <Pictogram term="tree" size={200} className="absolute bottom-0 right-0 opacity-10 -rotate-12 translate-x-12 translate-y-12 pointer-events-none" />}
                {gameId.includes('manzanas') && <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none"><Pictogram term="apple" size={120} /></div>}
                {gameId.includes('cronista') && <div className="absolute top-4 left-4 opacity-20 pointer-events-none"><Pictogram term="scroll" size={140} /></div>}

                {/* Paper Texture Overlay */}
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
                          {/* Sticker glow/shadow effect */}
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
            )}

            {/* MEMORY ENGINE */}
            {gameId.includes('wm-') && (
              <div className={`grid ${isPrimary ? 'grid-cols-3' : 'grid-cols-2'} gap-6 w-full max-w-lg p-4`}>
                {(isPrimary ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3]).map(id => (
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
                    {(() => {
                      const terms = gameId.includes('bolsillo') || gameId.includes('baul') || gameId.includes('compra')
                        ? ['apple', 'cookie', 'cake', 'icecream', 'gem', 'star'] 
                        : gameId.includes('nubes') 
                        ? ['cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud']
                        : gameId.includes('farolillos')
                        ? ['sun', 'moon', 'star', 'gem', 'crown', 'cloud']
                        : gameId.includes('hechizo')
                        ? ['potion', 'cauldron', 'apple', 'flower', 'star', 'gem']
                        : gameId.includes('codice')
                        ? ['parchment', 'scroll', 'quill', 'key', 'gem', 'shield']
                        : ['book', 'scroll', 'quill', 'map', 'key', 'ink_pot'];
                      const term = terms[id % terms.length];
                      
                      const showFeedback = clickFeedback?.id === id;
                      if (showFeedback && clickFeedback.type === 'correct') return <Pictogram term="smile" size={56} className="animate-bounce" />;
                      if (showFeedback && clickFeedback.type === 'incorrect') return <Pictogram term="frown" size={56} className="animate-shake" />;

                      if (gameId.includes('escondite')) return <Pictogram term="ghost" size={48} className={`transition-all ${activeWindow === id ? 'scale-110' : 'opacity-60 grayscale'}`} />;
                      if (gameId.includes('numeros') || gameId.includes('inverso')) return <span className={`text-5xl font-black ${activeWindow === id ? 'text-accent' : 'text-slate-400'}`}>{id + 1}</span>;
                      if (gameId.includes('pizarra')) return <Pictogram term="palette" size={48} className={`transition-all ${activeWindow === id ? 'scale-110' : 'opacity-60 grayscale'}`} />;
                      return <Pictogram term={term} size={48} className={`transition-all ${activeWindow === id ? 'scale-110' : 'opacity-60 grayscale'}`} />;
                    })()}
                  </motion.div>
                ))}
                <div className={`${isPrimary ? 'col-span-3' : 'col-span-2'} text-center text-xs font-mono text-accent uppercase tracking-[3px] mt-8 bg-accent/5 py-2 rounded-lg border border-accent/10 uppercase`}>
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
                            onClick={() => {
                              if (c.color === stroopColor.color) {
                                setClickFeedback({ id: c.color, type: 'correct' });
                                setScore(s => s + 1);
                                setTimeout(() => setClickFeedback(null), 300);
                                if (score + 1 >= 8) setTimeout(() => setGameStatus('won'), 400);
                              } else {
                                setClickFeedback({ id: c.color, type: 'incorrect' });
                                setTimeout(() => setGameStatus('lost'), 500);
                              }
                            }}
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
                  <div className="flex flex-col items-center gap-12 text-center">
                    <div className="p-8 bg-white/90 rounded-[2.5rem] shadow-2xl border-b-[8px] border-slate-200">
                      <p className="text-xs font-black text-accent uppercase tracking-[4px] mb-4">EL HADA DICE:</p>
                      <h3 className="text-6xl font-black text-slate-800 uppercase tracking-tight">
                        {inhibTarget === 'sun' ? 'NOCHE' : 'DÍA'}
                      </h3>
                    </div>
                    
                    <div className="flex gap-16">
                      <motion.button
                        whileHover={{ scale: 1.1, y: -10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          if (inhibTarget === 'moon') { // Hada said DAY (moon target) -> User must pick SUN icon to be "Contrary"
                             setScore(s => s + 1);
                             setClickFeedback({ id: 'sun', type: 'correct' });
                             setTimeout(() => setClickFeedback(null), 350);
                             if (score + 1 >= (isPrimary ? 8 : 4)) setGameStatus('won');
                          } else {
                             setGameStatus('lost');
                          }
                        }}
                        className="w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-white flex items-center justify-center filter drop-shadow-lg"
                      >
                         <Pictogram term="sun" size={64} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1, y: -10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          if (inhibTarget === 'sun') { // Hada said NIGHT (sun target) -> User must pick MOON icon
                             setScore(s => s + 1);
                             setClickFeedback({ id: 'moon', type: 'correct' });
                             setTimeout(() => setClickFeedback(null), 350);
                             if (score + 1 >= (isPrimary ? 8 : 4)) setGameStatus('won');
                          } else {
                             setGameStatus('lost');
                          }
                        }}
                        className="w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-white flex items-center justify-center filter drop-shadow-lg"
                      >
                         <Pictogram term="moon" size={64} />
                      </motion.button>
                    </div>
                    <p className="text-xs font-black text-accent/60 uppercase tracking-widest max-w-[200px]">¡TOCA LO CONTRARIO DE LO QUE DICE EL HADA!</p>
                  </div>
                ) : (
                  <>
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
                  <p className="text-xl font-serif font-bold text-text uppercase tracking-tight">
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
                      onClick={() => handleFlexDrop(item, 
                        flexRule === 'color' ? 'blue' : 
                        flexRule === 'size' ? 'large' : 
                        gameId.includes('clima') ? 'rainbow' :
                        gameId.includes('disfraces') ? 'cloak' :
                        gameId.includes('monstruo') ? 'book' :
                        gameId.includes('cocina') ? 'apple' :
                        gameId.includes('paradoja') ? 'clock' :
                        gameId.includes('biblioteca') ? 'book' : 'star'
                      )}
                      className={`cursor-pointer flex items-center justify-center rounded-2xl border-4 shadow-xl transition-all ${
                        clickFeedback?.id === item.id && clickFeedback.type === 'correct' ? 'bg-neon-green border-white scale-110' :
                        clickFeedback?.id === item.id && clickFeedback.type === 'incorrect' ? 'bg-yellow-400 border-white animate-shake' :
                        item.color === 'blue' ? 'bg-blue/10 border-blue/40' : 'bg-neon-red/10 border-neon-red/40'
                      } ${item.size === 'large' ? 'w-24 h-24' : 'w-16 h-16'}`}
                    >
                      {(() => {
                         const size = item.size === 'large' ? 48 : 32;
                         const color = item.color === 'blue' ? '#3B82F6' : '#ef4444';
                         return (
                           <div className="filter drop-shadow-[0_1px_0_white] drop-shadow-[0_-1px_0_white] drop-shadow-[1px_0_0_white] drop-shadow-[-1px_0_0_white]">
                             <Pictogram term={item.type} size={size} />
                           </div>
                         );
                      })()}
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
                <div className={`flex items-center gap-1 w-80 border-slate-800 pb-2 relative ${
                  gameId.includes('pasteles') || gameId.includes('hanoi') ? 'flex-col-reverse min-h-[250px] border-b-8' : 'flex-col min-h-[150px]'
                }`}>
                  <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -z-10" />
                  {placedBlocks.map(block => (
                    <motion.div
                      key={block.id}
                      initial={{ y: -200, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      style={block.size ? { width: `${block.size * 50}px`, backgroundColor: block.color } : { backgroundColor: block.color }}
                      className={`h-12 px-6 rounded-xl border-2 border-white/40 shadow-2xl flex items-center gap-3 ${!block.size ? 'w-full mb-2' : ''}`}
                    >
                      {block.type && <Pictogram term={block.type} size={24} />}
                      {block.name && <span className="text-[10px] font-black text-white uppercase tracking-tight">{block.name}</span>}
                      {block.size && <div className="ml-auto w-12 h-1 bg-white/20 rounded-full" />}
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap justify-center max-w-md">
                  {towerBlocks.map(block => (
                    <motion.button
                      key={block.id}
                      whileHover={{ y: -8, scale: 1.05 }}
                      onClick={() => handleBlockPlace(block)}
                      style={block.size ? { width: `${block.size * 40}px`, backgroundColor: block.color } : { backgroundColor: block.color }}
                      className={`h-14 px-5 rounded-2xl border-2 border-white/40 shadow-xl flex items-center justify-center gap-2 text-xs font-black text-white uppercase transition-all ${!block.size ? 'min-w-[120px]' : ''} ${
                        clickFeedback?.id === block.id && clickFeedback.type === 'correct' ? 'scale-110 !bg-neon-green' :
                        clickFeedback?.id === block.id && clickFeedback.type === 'incorrect' ? 'animate-shake !bg-yellow-400' : ''
                      }`}
                    >
                      {block.type && <Pictogram term={block.type} size={24} />}
                      <span className="drop-shadow-sm">{block.name || block.size}</span>
                    </motion.button>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-text-dim uppercase tracking-[3px]">
                  <Layers size={14} /> {gameId.includes('pasteles') || gameId.includes('hanoi') ? 'ORDENA DE MAYOR A MENOR' : 'ORDENA LA SECUENCIA'}
                </div>
              </div>
            )}

            {(gameStatus === 'won' || gameStatus === 'lost') && (
              <GameResult 
                status={gameStatus} 
                score={Math.round(score)}
                onRetry={() => {
                  resetAll();
                  setGameStatus('playing');
                }}
                onExit={onExit}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GameResult({ status, score, onRetry, onExit }: { status: 'won' | 'lost', score: number, onRetry: () => void, onExit: () => void }) {
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
            <h3 className="text-2xl font-serif font-bold text-neon-green uppercase tracking-tight">¡Misión Cumplida!</h3>
            <p className="text-text-dim text-xs">Puntuación: <span className="text-slate-800 font-bold">{score}</span></p>
            <p className="text-text-dim text-xs">Has completado esta aventura literaria con éxito.</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-20 h-20 bg-neon-red/10 rounded-full flex items-center justify-center border border-neon-red/30">
            <AlertCircle className="text-neon-red w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-serif font-bold text-neon-red uppercase tracking-tight">¡Casi lo logras!</h3>
            <p className="text-text-dim text-xs">Puntuación final: <span className="text-slate-800 font-bold">{score}</span></p>
            <p className="text-text-dim text-xs">El misterio sigue sin resolverse. ¿Lo intentas de nuevo?</p>
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
