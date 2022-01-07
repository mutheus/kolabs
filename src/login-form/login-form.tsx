import * as S from './login-form-style'

export function LoginForm () {
  return (
    <>
      <S.Title>Login</S.Title>

      <S.Form>
        <div>
          <S.Label>E-mail / Username</S.Label>

          <S.Input type='text' />
        </div>

        <div>
          <S.Label>Senha</S.Label>

          <S.Input type='password' />
        </div>

        <S.Button>
          <div />
          Entrar
        </S.Button>
      </S.Form>
    </>
  )
}
