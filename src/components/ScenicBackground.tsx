import { useEffect, useRef } from "react";

export default function ScenicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      size: number;
      vy: number;
      vx: number;
      opacity: number;
      fadeSpeed: number;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();

    // Create initial set of cinematic floating grain parameters
    const maxParticles = 35;
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        vy: -(Math.random() * 0.4 + 0.1),
        vx: (Math.random() * 0.3 - 0.15),
        opacity: Math.random() * 0.4 + 0.1,
        fadeSpeed: Math.random() * 0.005 + 0.002,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Render soft film spark/dust particle
        ctx.fillStyle = `rgba(0, 0, 0, ${p.opacity * 0.15})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Move particle gently upwards
        p.y += p.vy;
        p.x += p.vx;

        // If out of bounds or faded out, re-surface at bottom with new values
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.opacity = 0;
        }

        // Modulate opacity and size slightly to look like genuine film flicker
        if (p.opacity < 0.5) p.opacity += p.fadeSpeed;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Cinematic fine moving grain layer */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay z-40 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.62' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Soft HTML5 Cinema Particles Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none opacity-85 mix-blend-multiply" 
      />
    </div>
  );
}
