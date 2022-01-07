import Particles from 'react-tsparticles'
import styled from 'styled-components/macro'

const ParticlesWrapper = styled(Particles)`
  canvas {
    z-index: -2 !important;
  }
`

export function TSParticles () {
  return (
    <ParticlesWrapper
      id='tsparticles'
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'grab',
              parallax: { enable: true, force: 60, smooth: 10 },
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: '#fff',
          },
          links: {
            color: '#fff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
