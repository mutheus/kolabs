import { LoginForm } from 'login-form'
import * as S from './login-modal-style'

export function LoginModal () {
  return (
    <>
      <S.ModalWrapper>
        <S.Logo />

        <LoginForm />

        <S.LoginOverlay />
      </S.ModalWrapper>

      <S.Link>Don't have an account?</S.Link>
    </>
  )
}
