import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: 'transparent',
          },
        },
        fps_limit: 60,
        particles: {
          color: {
            value: '#fe6192',
          },
          links: {
            color: '#b84267',
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            directions: 'none',
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        interactivity: {
          modes: {
            repulse: {
              distance: 100,
              duration: 10,
            },
          },
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
