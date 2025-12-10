import React, { useState, useEffect, useRef } from 'react';
import { Category, PortfolioItem, ChatMessage } from './types';
import { sendMessageToGemini } from './services/geminiService';
import { fetchPortfolioFromSheet } from './services/sheetService';
import { ThreeDViewer } from './components/ThreeDViewer';
import { 
  Gamepad2, 
  Box, 
  Film, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Bot, 
  Send, 
  X, 
  Play, 
  ExternalLink, 
  Info,
  Menu,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';

// --- INITIAL DATA (Fallback if Sheet fails) ---
const INITIAL_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cyberpunk Bot',
    description: 'Personaje low-poly optimizado para juegos móviles. Rigging completo y texturas PBR.',
    category: Category.MODELING_3D,
    thumbnailUrl: 'https://picsum.photos/400/400?random=1',
    modelUrl: '/3dModels/scene.gltf',
    tags: ['Blender', 'Substance', 'Low-Poly'],
  },
  {
    id: '2',
    title: 'Ancient Ruins Environment',
    description: 'Escenario modular para un RPG de fantasía. Incluye LODs y colisiones personalizadas.',
    category: Category.MODELING_3D,
    thumbnailUrl: 'https://picsum.photos/400/400?random=2',
    tags: ['ZBrush', 'Unreal Engine 5'],
  },
  {
    id: '3',
    title: 'The Lost Signal',
    description: 'Cortometraje animado frame-by-frame sobre un robot buscando su hogar.',
    explanation: 'Para esta animación, utilicé técnicas tradicionales de tweening combinadas con fondos pintados digitalmente.',
    category: Category.ANIMATION_2D,
    thumbnailUrl: 'https://picsum.photos/600/350?random=3',
    tags: ['Toon Boom', 'After Effects'],
  },
  {
    id: '4',
    title: 'Neon Racer DX',
    description: 'Juego de carreras infinitas estilo retro-wave.',
    category: Category.GAME_DEV,
    thumbnailUrl: 'https://picsum.photos/600/350?random=4',
    gameEmbedUrl: 'https://itch.io/embed-upload/placeholder',
    tags: ['Unity', 'C#', 'WebGL'],
  }
];

// --- APP COMPONENT ---

const App: React.FC = () => {
  // --- STATE ---
  const [items, setItems] = useState<PortfolioItem[]>(INITIAL_ITEMS);
  const [activeTab, setActiveTab] = useState<Category | 'HOME'>('HOME');
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState<'SHEET' | 'LOCAL'>('LOCAL');
  
  // Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente IA de este portafolio. ¿Te gustaría saber más sobre mis habilidades?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // --- EFFECTS ---
  
  // Load from Google Sheets on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    // 1. Try Google Sheet
    const sheetItems = await fetchPortfolioFromSheet();
    
    if (sheetItems && sheetItems.length > 0) {
      setItems(sheetItems);
      setDataSource('SHEET');
      localStorage.setItem('portfolio_items_cache', JSON.stringify(sheetItems));
    } else {
      // 2. Fallback to LocalStorage cache if sheet fails
      const saved = localStorage.getItem('portfolio_items_cache');
      if (saved) {
        try {
          setItems(JSON.parse(saved));
          setDataSource('LOCAL');
        } catch (e) {
          console.error("Error loading saved items", e);
        }
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isChatOpen]);

  // --- HANDLERS ---

  const handleReload = async () => {
     await loadData();
     if (dataSource === 'SHEET') {
        // Optional visual feedback could go here
     }
  };

  // --- CHAT HANDLERS ---

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsChatLoading(true);

    // Use current dynamic items for context
    const response = await sendMessageToGemini(userMsg, items);

    setChatMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsChatLoading(false);
  };

  // --- RENDER HELPERS ---

  const renderContent = () => {
    if (isLoading) {
       return (
         <div className="h-screen flex flex-col items-center justify-center text-cyan-400 gap-4">
            <RefreshCw className="animate-spin" size={48} />
            <p className="font-display tracking-widest animate-pulse">CARGANDO PORTAFOLIO...</p>
         </div>
       );
    }

    if (activeTab === 'HOME') {
      return (
        <div className="space-y-24 pb-20">
          {/* Hero Section */}
          <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950 animate-pulse"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                ALEX CREATOR
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
                Modelado 3D • Animación Digital • Game Development
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button onClick={() => setActiveTab(Category.MODELING_3D)} className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:scale-105 flex items-center justify-center gap-2">
                  <Box size={20} /> Ver Modelos 3D
                </button>
                <button onClick={() => setActiveTab(Category.GAME_DEV)} className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:scale-105 flex items-center justify-center gap-2">
                  <Gamepad2 size={20} /> Jugar Demos
                </button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-white border-l-4 border-accent pl-4">Sobre Mí</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Soy un artista técnico apasionado por crear mundos inmersivos. Con más de 5 años de experiencia, 
                me especializo en cerrar la brecha entre el arte conceptual y la implementación en motor de juego.
                Me encanta optimizar assets para VR/AR sin sacrificar la calidad visual.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-white"><Github size={24} /></a>
                <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-blue-400"><Linkedin size={24} /></a>
                <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-sky-400"><Twitter size={24} /></a>
                <a href="mailto:contact@example.com" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-red-400"><Mail size={24} /></a>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <h3 className="text-xl font-bold mb-4 text-center">Tech Stack</h3>
               <div className="grid grid-cols-3 gap-4 text-center">
                  {['Blender', 'Maya', 'ZBrush', 'Unity', 'Unreal', 'Substance', 'React', 'Three.js', 'Python'].map(tech => (
                    <div key={tech} className="p-2 bg-slate-900/50 rounded border border-slate-700 text-sm text-cyan-200">
                      {tech}
                    </div>
                  ))}
               </div>
            </div>
          </section>
        </div>
      );
    }

    const filteredItems = items.filter(item => item.category === activeTab);

    return (
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-display font-bold flex items-center gap-3">
            {activeTab === Category.MODELING_3D && <><Box className="text-cyan-400" /> Galería 3D</>}
            {activeTab === Category.ANIMATION_2D && <><Film className="text-pink-400" /> Animaciones</>}
            {activeTab === Category.GAME_DEV && <><Gamepad2 className="text-purple-400" /> Game Lab</>}
          </h2>
          
          <button onClick={handleReload} className="text-slate-500 hover:text-white flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-colors">
              <RefreshCw size={14} /> Actualizar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="glass-panel rounded-xl overflow-hidden group hover:border-accent/50 transition-all duration-300 relative">
              
              {/* MEDIA SECTION */}
              {activeTab === Category.MODELING_3D ? (
                <div className="relative">
                  <ThreeDViewer item={item} />
                </div>
              ) : (
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="px-6 py-2 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all cursor-pointer"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              )}

              {/* CONTENT SECTION */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300">
                        {tag}
                      </span>
                  ))}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{item.description}</p>
                
                {/* Actions */}
                {activeTab === Category.GAME_DEV && (
                  <div className="mt-4">
                      <div className="flex gap-2">
                          <button onClick={() => setSelectedItem(item)} className="flex-1 py-2 bg-purple-600 hover:bg-purple-500 rounded flex items-center justify-center gap-2 font-semibold">
                            <Play size={16} /> Jugar
                          </button>
                          {item.externalLink && (
                            <a href={item.externalLink} target="_blank" rel="noreferrer" className="p-2 bg-slate-700 rounded hover:bg-slate-600">
                              <ExternalLink size={20} />
                            </a>
                          )}
                      </div>
                  </div>
                )}
                
                {activeTab === Category.ANIMATION_2D && (
                   <button onClick={() => setSelectedItem(item)} className="mt-4 w-full py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm flex items-center justify-center gap-2">
                    <Info size={16} /> Leer Explicación
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-accent selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 border-b-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-display font-bold tracking-wider cursor-pointer hover:text-accent transition-colors flex items-center gap-2"
            onClick={() => setActiveTab('HOME')}
          >
            ALEX<span className="text-accent">.DEV</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => setActiveTab('HOME')} className={`text-sm font-semibold tracking-wide hover:text-accent transition-colors ${activeTab === 'HOME' ? 'text-accent' : 'text-slate-400'}`}>INICIO</button>
            <button onClick={() => setActiveTab(Category.MODELING_3D)} className={`text-sm font-semibold tracking-wide hover:text-accent transition-colors ${activeTab === Category.MODELING_3D ? 'text-accent' : 'text-slate-400'}`}>3D</button>
            <button onClick={() => setActiveTab(Category.ANIMATION_2D)} className={`text-sm font-semibold tracking-wide hover:text-accent transition-colors ${activeTab === Category.ANIMATION_2D ? 'text-accent' : 'text-slate-400'}`}>ANIMACIÓN</button>
            <button onClick={() => setActiveTab(Category.GAME_DEV)} className={`text-sm font-semibold tracking-wide hover:text-accent transition-colors ${activeTab === Category.GAME_DEV ? 'text-accent' : 'text-slate-400'}`}>GAMES</button>
            
            {/* Status Indicator for DataSource */}
            {dataSource === 'SHEET' && (
              <div className="px-2 py-1 rounded text-[10px] font-bold border border-green-500 text-green-400 bg-green-900/20">
                 CONECTADO
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
             <button onClick={() => { setActiveTab('HOME'); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-800">INICIO</button>
             <button onClick={() => { setActiveTab(Category.MODELING_3D); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-800">MODELADO 3D</button>
             <button onClick={() => { setActiveTab(Category.ANIMATION_2D); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-800">ANIMACIÓN</button>
             <button onClick={() => { setActiveTab(Category.GAME_DEV); setMobileMenuOpen(false); }} className="text-left py-2">VIDEOJUEGOS</button>
          </div>
        )}
      </nav>

      {/* Main Content Render */}
      <main className="pt-20">
        {renderContent()}
      </main>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-red-500/80 transition-colors z-10" onClick={() => setSelectedItem(null)}>
              <X size={20} />
            </button>
            
            <div className="grid md:grid-cols-2">
               <div className="bg-black relative min-h-[300px] flex items-center justify-center">
                  {selectedItem.category === Category.GAME_DEV ? (
                    <div className="text-center p-8 w-full h-full flex flex-col">
                       {selectedItem.gameEmbedUrl && selectedItem.gameEmbedUrl.includes('itch.io') ? (
                          <iframe frameBorder="0" src={selectedItem.gameEmbedUrl} width="100%" height="100%" className="flex-1 min-h-[300px]" allowFullScreen></iframe>
                       ) : (
                         <div className="flex-1 flex flex-col items-center justify-center">
                            <Gamepad2 size={64} className="mx-auto text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Jugar {selectedItem.title}</h3>
                            <p className="text-slate-500 text-sm">El juego se cargará aquí si provees una URL válida de embed.</p>
                         </div>
                       )}
                    </div>
                  ) : (
                    <img src={selectedItem.thumbnailUrl} className="w-full h-full object-cover" alt={selectedItem.title} />
                  )}
               </div>
               <div className="p-8 overflow-y-auto max-h-[80vh]">
                 <div className="flex items-center gap-2 mb-4">
                   <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold tracking-widest">{selectedItem.category}</span>
                 </div>
                 <h2 className="text-3xl font-display font-bold mb-4">{selectedItem.title}</h2>
                 <p className="text-slate-300 mb-6">{selectedItem.description}</p>
                 
                 {selectedItem.explanation && (
                   <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-cyan-500 mb-6">
                     <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2"><Info size={16}/> Behind the Scenes</h4>
                     <p className="text-sm text-slate-400 italic">"{selectedItem.explanation}"</p>
                   </div>
                 )}

                 <div className="mb-8">
                   <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Tools Used</h4>
                   <div className="flex flex-wrap gap-2">
                     {selectedItem.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 border border-slate-700">{tag}</span>
                     ))}
                   </div>
                 </div>

                 {selectedItem.category === Category.GAME_DEV && (
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold text-lg shadow-lg shadow-purple-900/50 transition-all flex items-center justify-center gap-2">
                        Jugar Ahora <ChevronRight />
                      </button>
                      {selectedItem.externalLink && (
                        <a href={selectedItem.externalLink} target="_blank" rel="noreferrer" className="text-center text-sm text-purple-400 hover:text-purple-300 underline">
                          Abrir en página externa
                        </a>
                      )}
                    </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Gemini Chatbot Widget */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${isChatOpen ? 'w-80 sm:w-96' : 'w-auto'}`}>
        {isChatOpen ? (
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
            <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                  <p className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online</p>
                </div>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white"><X size={18} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-accent text-white rounded-br-none' 
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 rounded-2xl rounded-bl-none px-4 py-3 border border-slate-700">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleChatSubmit} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Pregunta sobre mi trabajo..." 
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-accent text-white"
              />
              <button type="submit" disabled={isChatLoading} className="p-2 bg-accent hover:bg-accent/90 rounded-xl text-white transition-colors disabled:opacity-50">
                <Send size={18} />
              </button>
            </form>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="group flex items-center gap-3 bg-white text-slate-900 px-5 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
          >
            <span className="text-sm">Preguntar a la IA</span>
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <Bot size={18} />
            </div>
          </button>
        )}
      </div>

    </div>
  );
};

export default App;