
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Loader2 } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Assistant({ gameName, context }: { gameName?: string, context?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `Eres un asistente experto en neuroeducación y literatura infantil llamado "Lectorín". 
          Estamos en "La Biblio-Aventura de las Emociones". 
          El usuario está viendo el cuento/juego: ${gameName || 'Mapa de Cuentos'}.
          Contexto de la aventura: ${context || 'Explorando el mundo literario'}.
          Responde de forma breve, motivadora, usando metáforas literarias y lenguaje educativo para un niño o su profesor.
          Pregunta del usuario: ${userMsg}` }] }
        ],
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || 'Lo siento, mi procesador ha tenido un pequeño fallo. ¿Puedes repetir?' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Error de conexión cuántica. Inténtalo de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/40 hover:scale-110 transition-transform z-40"
      >
        <Bot className="text-bg w-8 h-8" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-card border border-slate-700 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-accent flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="text-bg w-5 h-5" />
                <span className="font-serif font-bold text-bg text-sm uppercase tracking-wider">Lectorín Asistente</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-bg/80 hover:text-bg">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-bg/50">
              {messages.length === 0 && (
                <p className="text-text-dim text-xs italic text-center mt-10 font-serif">
                  ¡Hola! Soy Lectorín. ¿Tienes dudas sobre cómo resolver este misterio o entrenar tu cerebro?
                </p>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-xs leading-relaxed ${
                    m.role === 'user' ? 'bg-accent text-bg font-medium' : 'bg-slate-800 text-text border border-slate-700'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <Loader2 className="animate-spin text-accent w-4 h-4" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-700 flex gap-2 bg-card">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta a Lectorín..."
                className="flex-1 bg-bg border border-slate-700 rounded px-3 py-2 text-xs focus:outline-none focus:border-accent transition-colors text-text"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-accent rounded hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                <Send size={18} className="text-bg" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
