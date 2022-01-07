import styled from 'styled-components/macro'
import texture from './assets/texture.png'

export const Wrapper = styled.div`
  height: 100%;
  padding: .5em;
  display: flex;
  flex-direction: column;
  align-content: center;
`

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgb(255,255,255);
  background: linear-gradient(147deg, rgba(255,255,255,1) 30%, rgba(215,183,246,1) 100%);
  z-index: -2;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url('${texture}');
  background-size: cover;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: .8;
  mix-blend-mode: overlay;
`

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  position: relative;
  top: 20%;
  line-height: .8;
  text-transform: uppercase;

  span {
    font-size: 64px;
  }
`
