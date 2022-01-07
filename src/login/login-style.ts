import styled from 'styled-components/macro'
import texture from 'shared/assets/texture.png'

export const Container = styled.div`
  height: 100%;
  padding: .5em;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(25%);

  @media (min-width: 800px) {
    transform: translateY(15%);
  }

  padding-bottom: 4em;
`

export const Title = styled.h1`
  font-size: 2.25rem;

  @media (min-width: 800px) {
    font-size: 4.5rem;
    line-height: .95;
  }

  text-align: center;
  line-height: .8;
  text-transform: uppercase;

  span {
    font-size: 4rem;

    @media (min-width: 800px) {
      font-size: 9rem;
    }
  }
`

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgb(255,255,255);
  background: linear-gradient(147deg, rgba(255,255,255,1) 30%, rgba(215,183,246,1) 100%);

  @media (min-width: 800px) {
    background: linear-gradient(47deg, rgba(255,255,255,1) 25%, rgba(215,183,246,1) 100%);
  }

  z-index: -2;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-image: url('${texture}');
  background-size: cover;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: .8;
  mix-blend-mode: overlay;
`

export const Copy = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, .25);
  display: inline-block;
  position: fixed;
  bottom: 3em;
  text-align: center;
  padding: 0 1em;
  width: 100%;
  z-index: -1;

  @media (min-width: 800px) {
    bottom: 1em;
    text-align: start;
  }
`
