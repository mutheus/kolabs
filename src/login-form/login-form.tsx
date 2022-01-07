import { FormEvent, useState } from 'react'
import * as S from './login-form-style'

export function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasRequestFailed, setHasRequestFailed] = useState(false)

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setHasRequestFailed(true)
  }

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)

    setHasRequestFailed(false)
  }

  return (
    <>
      <S.Title>Login</S.Title>

      <S.Form onSubmit={handleLogin}>
        <div>
          <S.Label htmlFor='email'>E-mail / Username</S.Label>

          <S.Input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
          />

          {hasRequestFailed && <S.Message>User não encontrado</S.Message>}
        </div>

        <div>
          <S.Label htmlFor='password'>Senha</S.Label>

          <S.Input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <S.Button type='submit'>
          <div />

          Entrar
        </S.Button>
      </S.Form>
    </>
  )
}
