import styled from 'styled-components/macro'
import { ReactComponent as LogoSvg } from 'shared/assets/logo.svg'
import texture from 'shared/assets/texture.png'

export const ModalWrapper = styled.div`
  margin-top: -25px;

  @media (min-width: 800px) {
    margin-top: -69px;
  }

  width: 100%;
  max-width: 264px;
  text-align: center;
  position: relative;
  z-index: 10;
  border-radius: 15px;
  background: linear-gradient(180deg, rgba(255, 255, 255, .75) 0%, rgba(255, 255, 255, 0.1) 100%);
  box-shadow: 0px 6px 10px rgba(102, 0, 153, .15);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, .45);
  padding: 22px 22px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(LogoSvg)`
  margin-top: -25px;
  width: 126px;
  height: 100px;
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
  opacity: .2;
  mix-blend-mode: overlay;
  border-radius: 15px;
`

export const Link = styled.a`
  margin-top: 11px;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-decoration-line: underline;
  cursor: pointer;
  text-transform: uppercase;
  color: #660099;
`
