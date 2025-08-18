import { useEffect } from 'react';

const SunParticles = () => {
  useEffect(() => {
    // Effet de particules de soleil pour la souris
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000'; // Réduire le z-index pour qu'il soit derrière le texte mais devant la vidéo
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };
    
    // Configuration du canvas
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    
    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);
    
    // Classe Particule
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      decay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1.5;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.color = this.getRandomSunColor();
        this.life = 1.0;
        this.decay = Math.random() * 0.018 + 0.01;
      }
      
      getRandomSunColor() {
        const colors = [
          'rgba(255, 215, 0, 0.8)',
          'rgba(255, 165, 0, 0.7)',
          'rgba(255, 255, 0, 0.6)',
          'rgba(255, 235, 59, 0.8)',
          'rgba(255, 183, 77, 0.7)',
          'rgba(255, 152, 0, 0.6)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        
        // Ralentissement progressif
        this.speedX *= 0.98;
        this.speedY *= 0.98;
      }
      
      draw() {
        if (this.life <= 0) return;
        
        ctx.save();
        ctx.globalAlpha = this.life * 0.9;
        
        // Effet de lueur douce
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.3, this.color.replace(/[\d\.]+\)$/g, '0.4)'));
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Particule principale
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Point lumineux au centre
        ctx.fillStyle = this.color.replace(/[\d\.]+\)$/g, '1)');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
      
      isDead() {
        return this.life <= 0;
      }
    }
    
    // Gestion de la souris
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Création de nouvelles particules
      if (Math.random() > 0.5) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        particles.push(new Particle(mouse.x + offsetX, mouse.y + offsetY));
      }
    };
    
    // Effet de clic
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 10; i++) {
        const angle = (Math.PI * 2 * i) / 10;
        const speed = Math.random() * 4 + 2;
        const particle = new Particle(e.clientX, e.clientY);
        particle.speedX = Math.cos(angle) * speed;
        particle.speedY = Math.sin(angle) * speed;
        particle.size = Math.random() * 4 + 2;
        particles.push(particle);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    
    // Animation principale
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Mise à jour et rendu des particules
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].isDead()) {
          particles.splice(i, 1);
        }
      }
      
      // Limitation du nombre de particules
      if (particles.length > 120) {
        particles.splice(0, particles.length - 120);
      }
      
      requestAnimationFrame(animate);
    }
    
    // Démarrage de l'animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return null;
};

export default SunParticles;