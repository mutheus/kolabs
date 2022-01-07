import styled from 'styled-components/macro'
import texture from './assets/texture.png'

export const Container = styled.div`
  height: 100%;
  padding: .5em;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(25%);
`

export const LoginContainer = styled.div`
  margin-top: -25px;
  height: 400px;
  width: 80%;
  text-align: center;
  position: relative;
  z-index: 10;
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.1) 100%);
  box-shadow: 0px 6px 10px rgba(102, 0, 153, 0.15);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, .45);
  padding: 22px 22px 32px;
`

export const LoginOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url('${texture}');
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.2;
  mix-blend-mode: overlay;
  border-radius: 15px;
`

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgb(255,255,255);
  background: linear-gradient(147deg, rgba(255,255,255,1) 30%, rgba(215,183,246,1) 100%);
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

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  line-height: .8;
  text-transform: uppercase;

  span {
    font-size: 64px;
  }
`
