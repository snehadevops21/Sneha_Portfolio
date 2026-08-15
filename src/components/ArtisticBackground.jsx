import { useEffect, useRef } from "react";

function ArtisticBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive particle count
    const getParticleCount = () => {
      if (window.innerWidth < 768) {
        return 28;
      } else if (window.innerWidth < 1200) {
        return 55;
      }
      return 85;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.22; // Very slow drift
        this.vy = (Math.random() - 0.5) * 0.22;
        this.radius = Math.random() * 2 + 1; // 1px to 3px
        // Mix of soft pink and soft slate grey
        this.color = Math.random() > 0.4 
          ? "rgba(244, 63, 94, 0.28)" // rose-pink
          : "rgba(148, 163, 184, 0.16)"; // slate-gray
      }

      update() {
        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on borders with small padding
        const pad = 20;
        if (this.x < -pad) this.x = width + pad;
        if (this.x > width + pad) this.x = -pad;
        if (this.y < -pad) this.y = height + pad;
        if (this.y > height + pad) this.y = -pad;

        // Interactive mouse response: subtle drift away or pull
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            // Soft attraction or push
            const force = (150 - dist) / 1500;
            this.x -= dx * force * 0.4;
            this.y -= dy * force * 0.4;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      const maxDistance = 115;
      const count = particles.length;
      
      for (let i = 0; i < count; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.085;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Draw gradient or soft line colored according to the source node
            ctx.strokeStyle = p1.color.includes("244") 
              ? `rgba(244, 63, 94, ${alpha})` 
              : `rgba(148, 163, 184, ${alpha * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Draw connections to mouse
        if (mouseRef.current.active) {
          const dx = p1.x - mouseRef.current.x;
          const dy = p1.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          const mouseMaxDist = 180;

          if (dist < mouseMaxDist) {
            const alpha = (1 - dist / mouseMaxDist) * 0.13;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(244, 63, 94, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event Handlers
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="midnight-background" aria-hidden="true" style={{ pointerEvents: "none" }}>
      {/* Editorial layout base elements */}
      <div className="bg-gradient-base" />
      <div className="bg-dot-grid" />
      <div className="bg-noise" />
      
      {/* High-end particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default ArtisticBackground;
