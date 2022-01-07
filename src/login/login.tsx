import { LoginModal } from 'login-modal'
import { TSParticles } from 'ts-particles'
import * as S from './login-style'

export function Login () {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>Create<br /> <span>Technology</span></S.Title>

          <LoginModal />

        </S.Wrapper>
      </S.Container>

      <S.Copy>Kolabs&copy;2022 - All rights reserved</S.Copy>
      <S.Background />
      <S.Overlay />
      <TSParticles />
    </>
  )
}
