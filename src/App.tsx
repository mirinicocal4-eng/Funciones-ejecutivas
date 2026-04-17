import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, Info, BarChart3, ChevronRight, Play, X, CheckCircle2, AlertCircle, ArrowLeft, Bot,
  Target, Search, Cpu, Shield, Rocket, Zap, RefreshCw, GitBranch, Map as MapIcon, Layers, Library, BookOpen,
  CircleDollarSign, ToyBrick, Bird, Flame, Sparkles, Wand2, Pipette, Dot, Wheat, Castle, Mountain, MountainSnow, Waves,
  Filter
} from 'lucide-react';
import { GAMES, METRICS, GRADES } from './constants';
import { GameDefinition, Grade } from './types';
import Assistant from './components/Assistant';
import GameEngine from './components/engines/GameEngine';
import { NavButton, GameCard, InfoItem, ICON_MAP } from './components/UI';

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
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
                <div className="space-y-1">
                  <h2 className="text-3xl font-serif font-bold tracking-tight">Mapa de Misiones</h2>
                  <p className="text-text-dim text-sm">Selecciona una historia para comenzar tu entrenamiento.</p>
                </div>
                
                <div className="flex items-center gap-3 bg-card p-1.5 rounded-lg border border-slate-700 shadow-xl self-start sm:self-center">
                  <div className="px-3 py-1 flex items-center gap-2 text-text-dim">
                    <Filter size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Curso:</span>
                  </div>
                  <div className="flex gap-1 overflow-x-auto max-w-[300px] no-scrollbar">
                    {['Todos', ...GRADES].map((grade) => (
                      <button
                        key={grade}
                        onClick={() => setSelectedGrade(grade as any)}
                        className={`
                          whitespace-nowrap px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all
                          ${selectedGrade === grade ? 'bg-accent text-bg shadow-lg shadow-accent/20' : 'text-text-dim hover:text-text hover:bg-white/5'}
                        `}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredGames.map((game, index) => (
                    <GameCard 
                      key={game.id} 
                      game={game} 
                      onClick={() => {
                        setSelectedGame(game);
                        setIsPlaying(false);
                      }} 
                    />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activeTab === 'theory' && (
            <motion.div 
              key="theory"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-4xl mx-auto space-y-16"
            >
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-serif font-black tracking-tighter text-accent uppercase">Funciones Ejecutivas</h2>
                <div className="w-24 h-1 bg-accent mx-auto" />
                <p className="max-w-2xl mx-auto text-text-dim text-lg">
                  La Biblio-Aventura está diseñada sobre cinco pilares fundamentales del desarrollo cognitivo, 
                  integrados en una narrativa literaria envolvente.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Atención", desc: "Capacidad de seleccionar y mantener el foco en la información relevante, como buscar al Grúfalo en el bosque.", icon: <Search /> },
                  { title: "Memoria de Trabajo", desc: "Mantenimiento y manipulación temporal de la información, esencial para recordar secuencias mágicas.", icon: <RefreshCw /> },
                  { title: "Control Inhibitorio", desc: "Habilidad para frenar impulsos y distracciones, como no pulsar cuando aparece un impostor.", icon: <Shield /> },
                  { title: "Flexibilidad", desc: "Adaptación a nuevas reglas o situaciones inesperadas cuando la historia da un giro.", icon: <Rocket /> },
                  { title: "Planificación", desc: "Organización de pasos lógicos para alcanzar una meta, como construir una torre de libros estable.", icon: <Layers /> }
                ].map((item, idx) => (
                  <div key={idx} className="bg-card p-8 rounded-2xl border-2 border-slate-800 hover:border-accent transition-colors group">
                    <div className="w-12 h-12 bg-bg rounded-xl flex items-center justify-center mb-6 border border-slate-700 text-accent group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
                    <p className="text-text-dim text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'metrics' && (
            <motion.div 
              key="metrics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="bg-card rounded-[2rem] border-2 border-slate-800 p-10 overflow-hidden relative">
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-4">
                    <BarChart3 className="text-accent-2" size={32} />
                    <h2 className="text-3xl font-serif font-bold tracking-tight">Panel de Aprendizaje</h2>
                  </div>
                  
                  <div className="grid gap-6">
                    {METRICS.map((metric, idx) => (
                      <div key={idx} className="flex gap-6 p-6 bg-bg/50 rounded-2xl border border-slate-700/50 hover:bg-bg/80 transition-all">
                        <div className="w-8 h-8 flex-shrink-0 bg-accent-2/10 rounded-full flex items-center justify-center text-accent-2 font-black text-xs">
                          {idx + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-text">{metric.label}</h4>
                          <p className="text-sm text-text-dim leading-relaxed">{metric.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-2/5 blur-[80px] rounded-full -mr-32 -mt-32" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-xl p-4 sm:p-8"
          >
            <motion.div 
              layoutId={selectedGame.id}
              className="bg-card w-full max-w-5xl h-full max-h-[800px] rounded-[3rem] border-4 border-slate-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Game Poster Area */}
              <div className="md:w-1/3 bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden text-white">
                <div className="relative z-10 space-y-6">
                  <button 
                    onClick={() => {
                      setSelectedGame(null);
                      setIsPlaying(false);
                    }}
                    className="flex items-center gap-2 text-text-dim hover:text-white transition-colors group"
                  >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Atrás</span>
                  </button>

                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-accent-2 uppercase tracking-[4px]">
                      {selectedGame.executiveFunction}
                    </span>
                    <h3 className="text-2xl font-bold text-text">{selectedGame.name}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <InfoItem label="Curso" value={selectedGame.grade} />
                  <InfoItem label="Mecánica" value={selectedGame.gameplay} />
                  <InfoItem label="Controles" value={selectedGame.controls} />
                </div>

                {/* Decorative background for the side panel */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full -ml-32 -mt-32" />
              </div>

              {/* Game Stage Area */}
              <div className="flex-1 bg-white relative min-h-[500px] h-full">
                {isPlaying ? (
                  <GameEngine 
                    game={selectedGame} 
                    onExit={() => {
                      setIsPlaying(false);
                      setSelectedGame(null);
                    }} 
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8">
                     <div className="w-32 h-32 bg-slate-100 rounded-[2.5rem] flex items-center justify-center border-4 border-slate-200 shadow-inner">
                        {(() => {
                           const Icon = ICON_MAP[selectedGame.icon] || Target;
                           return <Icon size={64} className="text-slate-300" />;
                        })()}
                     </div>
                     <div className="space-y-4 max-w-lg">
                        <h2 className="text-5xl font-serif font-black text-slate-800 uppercase tracking-tight">Preparado</h2>
                        <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10">
                          <p className="text-[10px] font-black text-accent uppercase tracking-[4px] mb-2">Instrucciones de la Misión</p>
                          <p className="text-slate-600 font-medium leading-relaxed text-lg italic">
                            {selectedGame.gameplay}
                          </p>
                          <div className="mt-4 pt-4 border-t border-accent/10 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <Target size={12} /> {selectedGame.controls}
                          </div>
                        </div>
                     </div>

                     <button 
                        onClick={() => setIsPlaying(true)}
                        className="group relative px-10 py-5 bg-accent hover:bg-accent/90 text-white rounded-2xl font-black text-sm uppercase tracking-[4px] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/40 flex items-center gap-4 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <Play size={20} fill="currentColor" />
                        Iniciar Misión
                      </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 mt-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
           <div className="w-1.5 h-1.5 rounded-full bg-accent" />
           <p className="text-[10px] font-black uppercase tracking-[5px] text-text-dim">La Biblio-Aventura 2024</p>
           <div className="w-1.5 h-1.5 rounded-full bg-accent-2" />
        </div>
        <p className="text-xs text-slate-600 font-medium">Un proyecto de neuro-educación literaria experimental.</p>
      </footer>
    </div>
  );
}
