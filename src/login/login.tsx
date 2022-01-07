import { TSParticles } from 'ts-particles'
import * as S from './login-style'

export function Login () {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Title>Create<br /> <span>Technology</span></S.Title>

          <S.LoginContainer>
            <h2>Login</h2>

            <S.LoginOverlay />
          </S.LoginContainer>
        </S.Wrapper>
      </S.Container>

      <S.Background />
      <S.Overlay />
      <TSParticles />
    </>
  )
}
