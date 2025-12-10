import React, { Suspense, useState, Component, ErrorInfo } from 'react';
import { PortfolioItem } from '../types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html, Clone } from '@react-three/drei';
import { Rotate3d, Box, AlertTriangle, FileWarning } from 'lucide-react';

interface Props {
  item: PortfolioItem;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any | null;
}

// Error Boundary to catch loading errors inside Canvas
class ModelErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    console.error("3D Model Loading Error:", error);
  }

  render() {
    if (this.state.hasError) {
      // Safe check for error existence
      const errorMessage = this.state.error?.message || String(this.state.error) || '';
      const isBinError = errorMessage.includes('.bin');
      
      return (
        <Html center>
          <div className="w-72 bg-slate-900/90 backdrop-blur-xl p-5 rounded-xl border border-red-500/50 text-white text-center shadow-2xl">
            <FileWarning className="mx-auto mb-3 text-red-400" size={40} />
            <h3 className="font-bold text-lg mb-1 text-red-200">Error Cargando Modelo</h3>
            <p className="text-sm text-slate-300 mb-4 px-2">
              {isBinError 
                ? 'El archivo .gltf intenta leer un archivo .bin que no encuentra.' 
                : 'No se pudo cargar el archivo 3D.'}
            </p>
            
            <div className="text-left bg-black/40 p-3 rounded-lg border border-white/10">
               <p className="text-xs font-bold text-cyan-400 mb-1 uppercase tracking-wider">Cómo solucionar:</p>
               <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
                 {isBinError ? (
                   <>
                     <li>Busca el archivo <b>.bin</b> que venía con tu modelo.</li>
                     <li>Ponlo en la carpeta <b>/3dModels/</b> junto al .gltf.</li>
                   </>
                 ) : (
                   <>
                      <li>Verifica que la ruta en App.tsx sea correcta.</li>
                      <li>Intenta usar un archivo <b>.glb</b> (es un solo archivo).</li>
                   </>
                 )}
               </ul>
            </div>
          </div>
        </Html>
      );
    }

    return this.props.children;
  }
}

// Sub-component to load the model
const Model = ({ url }: { url: string }) => {
  // We use useGLTF because it's the standard for WebGL.
  const { scene } = useGLTF(url);
  // Clone allows reusing the same model in multiple places if needed
  return <Clone object={scene} />;
};

// Fallback component while loading
const LoaderFallback = () => (
  <Html center>
    <div className="flex flex-col items-center gap-3 text-cyan-400 bg-slate-900/90 p-6 rounded-2xl backdrop-blur-md border border-cyan-500/30 shadow-xl">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-slate-700 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <span className="text-xs font-bold font-display tracking-widest animate-pulse">CARGANDO ASSETS...</span>
    </div>
  </Html>
);

export const ThreeDViewer: React.FC<Props> = ({ item }) => {
  const [interacted, setInteracted] = useState(false);

  // Check for common mistake: using FBX directly
  const isFbx = item.modelUrl ? item.modelUrl.toLowerCase().endsWith('.fbx') : false;

  if (isFbx) {
    return (
      <div className="w-full h-[400px] bg-slate-900 rounded-xl flex flex-col items-center justify-center p-6 text-center border border-red-500/30">
        <AlertTriangle className="text-red-400 mb-4" size={48} />
        <h3 className="text-xl font-bold text-white mb-2">Formato no soportado en Web</h3>
        <p className="text-slate-400 text-sm mb-4">
          Los navegadores no renderizan archivos <b>.FBX</b> nativamente de forma eficiente.
        </p>
        <div className="bg-slate-800 p-4 rounded text-left text-xs text-slate-300 font-mono">
          <p className="mb-2 text-cyan-400 font-bold">SOLUCIÓN:</p>
          1. Abre tu modelo en Blender.<br/>
          2. Archivo {'>'} Exportar {'>'} glTF 2.0 (.glb)<br/>
          3. Usa ese archivo .glb aquí.
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full h-[400px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden relative border border-slate-700 shadow-2xl group"
      onMouseDown={() => setInteracted(true)}
      onTouchStart={() => setInteracted(true)}
    >
      {/* UI Overlay */}
      <div className={`absolute top-4 left-4 z-10 flex gap-2 transition-opacity duration-500 ${interacted ? 'opacity-0' : 'opacity-100'}`}>
        <span className="bg-black/50 backdrop-blur px-2 py-1 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
          <Rotate3d size={12} /> 3D INTERACTIVO
        </span>
      </div>
      
      <div className={`absolute bottom-4 left-0 w-full text-center pointer-events-none transition-opacity duration-500 ${interacted ? 'opacity-0' : 'opacity-100'}`}>
         <span className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono text-white/70 uppercase tracking-widest">
          Click y Arrastra para Girar
        </span>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        {item.modelUrl ? (
          <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
            <ModelErrorBoundary>
              <Suspense fallback={<LoaderFallback />}>
                <Stage environment="city" intensity={0.5} adjustCamera={1.2}>
                  <Model url={item.modelUrl} />
                </Stage>
                <OrbitControls 
                  makeDefault 
                  minPolarAngle={0} 
                  maxPolarAngle={Math.PI / 1.8} 
                  autoRotate={!interacted}
                  autoRotateSpeed={1}
                />
              </Suspense>
            </ModelErrorBoundary>
          </Canvas>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
             <Box size={48} className="mb-2 opacity-50" />
             <p className="text-sm">Modelo 3D no encontrado</p>
             <p className="text-xs mt-2 text-slate-600">Añade una URL .glb válida en el código</p>
             <img src={item.thumbnailUrl} alt="Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10 grayscale" />
          </div>
        )}
      </div>
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
    </div>
  );
};