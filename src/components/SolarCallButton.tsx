import { useEffect, useRef } from 'react'

const SolarCallButton = () => {
  const sunButtonRef = useRef<HTMLAnchorElement>(null)

  const createSolarExplosion = () => {
    if (!sunButtonRef.current) return
    
    const rect = sunButtonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Créer 24 particules solaires
    for (let i = 0; i < 24; i++) {
      const solarParticle = document.createElement('div')
      
      const size = 4 + Math.random() * 8
      solarParticle.style.position = 'fixed'
      solarParticle.style.left = centerX + 'px'
      solarParticle.style.top = centerY + 'px'
      solarParticle.style.width = size + 'px'
      solarParticle.style.height = size + 'px'
      solarParticle.style.background = `radial-gradient(circle, 
          hsl(${45 + Math.random() * 30}, 100%, 70%), 
          hsl(${15 + Math.random() * 30}, 100%, 50%))`
      solarParticle.style.borderRadius = '50%'
      solarParticle.style.pointerEvents = 'none'
      solarParticle.style.zIndex = '10001'
      solarParticle.style.boxShadow = `0 0 ${size * 2}px rgba(255, 215, 0, 0.8)`
      
      document.body.appendChild(solarParticle)

      const angle = (i / 24) * Math.PI * 2
      const velocity = 100 + Math.random() * 150
      const gravity = 0.8
      
      let x = 0, y = 0
      let vx = Math.cos(angle) * velocity
      let vy = Math.sin(angle) * velocity
      let opacity = 1
      let rotation = Math.random() * 360
      
      function animateSolarParticle() {
        vx *= 0.98
        vy *= 0.98
        vy += gravity
        
        x += vx * 0.016
        y += vy * 0.016
        opacity -= 0.015
        rotation += 8
        
        solarParticle.style.transform = `
            translate(${x}px, ${y}px) 
            rotate(${rotation}deg) 
            scale(${opacity})
        `
        solarParticle.style.opacity = Math.max(0, opacity).toString()
        
        if (opacity > 0) {
          requestAnimationFrame(animateSolarParticle)
        } else {
          solarParticle.remove()
        }
      }
      
      requestAnimationFrame(animateSolarParticle)
    }

    // Créer des rayons d'énergie
    for (let i = 0; i < 16; i++) {
      const energyRay = document.createElement('div')
      const length = 80 + Math.random() * 120
      const angle = (i / 16) * 360
      
      energyRay.style.position = 'fixed'
      energyRay.style.left = centerX + 'px'
      energyRay.style.top = centerY + 'px'
      energyRay.style.width = '4px'
      energyRay.style.height = length + 'px'
      energyRay.style.background = `linear-gradient(to bottom,
          rgba(255, 215, 0, 0.9),
          rgba(255, 140, 0, 0.7),
          rgba(255, 107, 53, 0.5),
          transparent)`
      energyRay.style.borderRadius = '2px'
      energyRay.style.transform = `rotate(${angle}deg) translateY(-${length}px)`
      energyRay.style.transformOrigin = 'center bottom'
      energyRay.style.pointerEvents = 'none'
      energyRay.style.zIndex = '10000'
      energyRay.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.8)'
      
      document.body.appendChild(energyRay)
      
      energyRay.animate([
        { opacity: 0, transform: `rotate(${angle}deg) translateY(0) scaleY(0)` },
        { opacity: 1, transform: `rotate(${angle}deg) translateY(-${length}px) scaleY(1)` },
        { opacity: 0, transform: `rotate(${angle}deg) translateY(-${length * 1.5}px) scaleY(0.3)` }
      ], {
        duration: 1200,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }).onfinish = () => {
        energyRay.remove()
      }
    }

    // Vibration puissante
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (sunButtonRef.current) {
          const elements = sunButtonRef.current.querySelectorAll('*')
          if (entry.isIntersecting) {
            elements.forEach(el => {
              const element = el as HTMLElement
              if (element.style.animationPlayState !== undefined) {
                element.style.animationPlayState = 'running'
              }
            })
          } else {
            elements.forEach(el => {
              const element = el as HTMLElement
              if (element.style.animationPlayState !== undefined) {
                element.style.animationPlayState = 'paused'
              }
            })
          }
        }
      })
    })

    if (sunButtonRef.current) {
      observer.observe(sunButtonRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .solar-widget {
          position: fixed;
          right: 30px;
          bottom: 20%;
          z-index: 10000;
        }

        .sun-button {
          position: relative;
          width: 65px;
          height: 65px;
          border: none;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, 
              #fff8dc 0%,
              #ffd700 15%,
              #ffb347 35%,
              #ff8c00 60%,
              #ff6b35 85%,
              #ff4500 100%);
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
              0 0 40px rgba(255, 215, 0, 0.4),
              0 0 80px rgba(255, 140, 0, 0.2),
              0 12px 40px rgba(255, 107, 53, 0.3),
              inset 0 3px 6px rgba(255, 255, 255, 0.3),
              inset 0 -3px 6px rgba(255, 69, 0, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: solarPulse 4s ease-in-out infinite;
          overflow: visible;
        }

        .sun-button::before {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border-radius: 50%;
          background: radial-gradient(circle, 
              rgba(255, 215, 0, 0.3) 0%,
              rgba(255, 215, 0, 0.15) 40%,
              rgba(255, 140, 0, 0.1) 70%,
              transparent 100%);
          animation: solarGlow 3s ease-in-out infinite alternate;
          z-index: -1;
        }

        .sun-button::after {
          content: '';
          position: absolute;
          top: -25px;
          left: -25px;
          right: -25px;
          bottom: -25px;
          border-radius: 50%;
          background: radial-gradient(circle, 
              rgba(255, 165, 0, 0.2) 0%,
              rgba(255, 165, 0, 0.08) 50%,
              transparent 80%);
          animation: solarGlow 4s ease-in-out infinite alternate-reverse;
          z-index: -2;
        }

        .corona-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid rgba(255, 215, 0, 0.4);
          border-radius: 50%;
          border-top-color: rgba(255, 215, 0, 0.8);
          border-right-color: rgba(255, 140, 0, 0.6);
          animation: coronaRotate 6s linear infinite;
          z-index: -1;
        }

        .phone-icon {
          font-size: 20px;
          z-index: 3;
          color: #2d3748;
          text-shadow: 
              0 2px 4px rgba(255, 255, 255, 0.8),
              0 -1px 2px rgba(255, 107, 53, 0.3);
          animation: iconFloat 2.5s ease-in-out infinite;
        }

        .solar-flares {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          pointer-events: none;
        }

        .flare {
          position: absolute;
          width: 3px;
          height: 20px;
          background: linear-gradient(to bottom,
              rgba(255, 215, 0, 0.9) 0%,
              rgba(255, 140, 0, 0.7) 40%,
              rgba(255, 107, 53, 0.5) 70%,
              transparent 100%);
          border-radius: 2px 2px 0 0;
          transform-origin: center 75px;
          box-shadow: 
              0 0 10px rgba(255, 215, 0, 0.6),
              0 0 20px rgba(255, 215, 0, 0.3);
          animation: flareShimmer 3s ease-in-out infinite;
        }

        .flare:nth-child(1) { transform: translate(-50%, -50%) rotate(0deg); animation-delay: 0s; }
        .flare:nth-child(2) { transform: translate(-50%, -50%) rotate(30deg); animation-delay: -0.2s; }
        .flare:nth-child(3) { transform: translate(-50%, -50%) rotate(60deg); animation-delay: -0.4s; }
        .flare:nth-child(4) { transform: translate(-50%, -50%) rotate(90deg); animation-delay: -0.6s; }
        .flare:nth-child(5) { transform: translate(-50%, -50%) rotate(120deg); animation-delay: -0.8s; }
        .flare:nth-child(6) { transform: translate(-50%, -50%) rotate(150deg); animation-delay: -1s; }
        .flare:nth-child(7) { transform: translate(-50%, -50%) rotate(180deg); animation-delay: -1.2s; }
        .flare:nth-child(8) { transform: translate(-50%, -50%) rotate(210deg); animation-delay: -1.4s; }
        .flare:nth-child(9) { transform: translate(-50%, -50%) rotate(240deg); animation-delay: -1.6s; }
        .flare:nth-child(10) { transform: translate(-50%, -50%) rotate(270deg); animation-delay: -1.8s; }
        .flare:nth-child(11) { transform: translate(-50%, -50%) rotate(300deg); animation-delay: -2s; }
        .flare:nth-child(12) { transform: translate(-50%, -50%) rotate(330deg); animation-delay: -2.2s; }

        .energy-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-radius: 50%;
          overflow: visible;
        }

        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: radial-gradient(circle, #ffd700, #ff8c00);
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.8);
          animation: particleOrbit 4s linear infinite;
        }

        .particle:nth-child(1) {
          animation-delay: 0s;
          animation-duration: 3.5s;
        }
        .particle:nth-child(2) {
          animation-delay: -1s;
          animation-duration: 4.2s;
        }
        .particle:nth-child(3) {
          animation-delay: -2s;
          animation-duration: 3.8s;
        }
        .particle:nth-child(4) {
          animation-delay: -0.5s;
          animation-duration: 4.5s;
        }
        .particle:nth-child(5) {
          animation-delay: -1.5s;
          animation-duration: 3.3s;
        }
        .particle:nth-child(6) {
          animation-delay: -2.5s;
          animation-duration: 4.7s;
        }

        .phone-display {
          position: absolute;
          right: 80px;
          bottom: 50%;
          transform: translateY(50%);
          background: linear-gradient(145deg, #1a202c, #2d3748);
          color: #ffffff;
          padding: 16px 24px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 
              0 12px 40px rgba(0, 0, 0, 0.2),
              0 0 0 1px rgba(255, 215, 0, 0.3),
              inset 0 2px 4px rgba(255, 255, 255, 0.1);
          opacity: 0;
          transform: translateY(50%) translateX(20px) scale(0.9);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
          letter-spacing: 0.5px;
        }

        .phone-display::before {
          content: '☀️ WN ENERGIES';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #ffd700, #ff8c00);
          color: #1a202c;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .phone-display::after {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(50%);
          width: 0;
          height: 0;
          border-left: 8px solid #2d3748;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
        }

        .solar-widget:hover .sun-button {
          transform: scale(1.1);
          box-shadow: 
              0 0 60px rgba(255, 215, 0, 0.6),
              0 0 120px rgba(255, 140, 0, 0.4),
              0 16px 50px rgba(255, 107, 53, 0.4),
              inset 0 4px 8px rgba(255, 255, 255, 0.4),
              inset 0 -4px 8px rgba(255, 69, 0, 0.3);
        }

        .solar-widget:hover .phone-display {
          opacity: 1;
          transform: translateY(50%) translateX(0) scale(1);
        }

        .solar-widget:hover .flare {
          height: 45px;
          background: linear-gradient(to bottom,
              rgba(255, 215, 0, 1) 0%,
              rgba(255, 140, 0, 0.9) 40%,
              rgba(255, 107, 53, 0.7) 70%,
              rgba(255, 215, 0, 0.4) 100%);
          box-shadow: 
              0 0 15px rgba(255, 215, 0, 0.8),
              0 0 30px rgba(255, 215, 0, 0.5);
        }

        .solar-widget:hover .particle {
          background: radial-gradient(circle, #ffffff, #ffd700);
          box-shadow: 0 0 20px rgba(255, 215, 0, 1);
          width: 7px;
          height: 7px;
        }

        .sun-button:active {
          transform: scale(0.95);
          box-shadow: 
              0 0 30px rgba(255, 215, 0, 0.6),
              0 8px 25px rgba(255, 107, 53, 0.4),
              inset 0 4px 8px rgba(255, 69, 0, 0.4),
              inset 0 -2px 4px rgba(255, 255, 255, 0.3);
        }

        @keyframes solarPulse {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.1);
          }
        }

        @keyframes solarGlow {
          0% {
            opacity: 0.6;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes coronaRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes flareShimmer {
          0%, 100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scaleY(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(var(--rotation)) scaleY(1.2);
          }
        }

        @keyframes particleOrbit {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
            opacity: 0.6;
          }
        }

        @media (max-width: 768px) {
          .solar-widget {
            right: 20px;
            bottom: 15%;
          }
          
          .sun-button {
            width: 55px;
            height: 55px;
          }
          
          .phone-icon {
            font-size: 18px;
          }
          
          .phone-display {
            font-size: 12px;
            padding: 10px 16px;
            right: 70px;
          }
          
          .solar-flares {
            width: 130px;
            height: 130px;
          }
          
          .flare {
            transform-origin: center 65px;
          }
        }

        @media (max-width: 480px) {
          .phone-display {
            display: none;
          }
        }
        `
      }} />
      
      
      <div className="solar-widget">
        <div className="phone-display">07 65 56 10 50</div>
        <a 
          href="tel:0765561050"
          className="sun-button" 
          ref={sunButtonRef}
          onClick={createSolarExplosion}
        >
          <div className="corona-ring"></div>
          
          <div className="solar-flares">
            {Array.from({ length: 12 }, (_, i) => (
              <div 
                key={i} 
                className="flare" 
                style={{ '--rotation': `${i * 30}deg` } as React.CSSProperties}
              ></div>
            ))}
          </div>
          
          <div className="energy-particles">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>
          
          <span className="phone-icon">📞</span>
        </a>
      </div>
    </>
  )
}

export default SolarCallButton