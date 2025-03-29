import { h,useEffect, useState } from "../core/roboto.js";

export const Bg = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create center line segments
  const centerLineSegments = [];
  const segmentCount = 20;
  const segmentHeight = windowSize.height / (segmentCount * 2 - 1);
  
  for (let i = 0; i < segmentCount; i++) {
    centerLineSegments.push(
      <div 
        key={i}
        className="absolute bg-white/30"
        style={{
          width: '10px',
          height: `${segmentHeight}px`,
          left: `calc(50% - 5px)`,
          top: `${i * segmentHeight * 2}px`
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Center line */}
      {centerLineSegments}
      
      {/* Left paddle */}
      <div className="absolute left-[30px] top-1/2 -translate-y-1/2 h-[100px] w-[15px] bg-white" />
      
      {/* Right paddle */}
      <div className="absolute right-[30px] top-1/2 -translate-y-1/2 h-[100px] w-[15px] bg-white" />
      
      {/* Pong ball with animation */}
      <div className="absolute h-[15px] w-[15px] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] animate-pong-ball" />
      
      {/* Particle effects (static for decoration) */}
      <div className="absolute h-2 w-2 rounded-full bg-cyan-400/70 shadow-[0_0_5px_rgba(0,255,255,0.7)] top-[30%] left-[40%]" />
      <div className="absolute h-3 w-3 rounded-full bg-cyan-400/50 shadow-[0_0_5px_rgba(0,255,255,0.7)] top-[60%] left-[70%]" />
      <div className="absolute h-2 w-2 rounded-full bg-cyan-400/60 shadow-[0_0_5px_rgba(0,255,255,0.7)] top-[20%] left-[60%]" />
      <div className="absolute h-4 w-4 rounded-full bg-cyan-400/40 shadow-[0_0_5px_rgba(0,255,255,0.7)] top-[70%] left-[30%]" />
      <div className="absolute h-3 w-3 rounded-full bg-cyan-400/50 shadow-[0_0_5px_rgba(0,255,255,0.7)] top-[40%] left-[80%]" />
      
      {/* Grid lines for retro effect */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
    </div>
  );
}
