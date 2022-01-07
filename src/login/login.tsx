import { TSParticles } from 'ts-particles'
import * as S from './login-style'

export function Login () {
  return (
    <>
      <S.Wrapper>
        <S.Title>Create<br /> <span>Technology</span></S.Title>
      </S.Wrapper>

      <S.Background />
      <S.Overlay />
      <TSParticles />
    </>
  )
}
