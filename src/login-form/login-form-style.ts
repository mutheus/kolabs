import styled from 'styled-components/macro'

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 3.125rem;
  margin-top: -20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.153em;

  > div {
    position: relative;
  }
`

export const Input = styled.input`
  background: rgba(119, 61, 177, .08);
  mix-blend-mode: multiply;
  opacity: .5;
  box-shadow: inset 0px 4px 15px rgba(0, 0, 0, .25), inset 0px -5.95px 15px 3px rgba(255, 255, 255, .8);
  backdrop-filter: blur(100px);
  border-radius: 10px;
  height: 36px;
  width: 100%;
  border: none;
  padding: 0 1em;

  &:focus-visible {
    outline: rgba(164, 94, 255, .5) auto 1px;
  }
`

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 10px;
  color: #393939;
  letter-spacing: 1.5px;
`

export const Button = styled.button`
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  background: linear-gradient(180deg, rgba(69, 16, 138, .2) 0%, rgba(164, 94, 255, .1) 94.59%);
  box-shadow: 0px -4px 6px rgba(255, 255, 255, .2), 0px 5px 10px rgba(0, 0, 0, .15);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.5px;
  cursor: pointer;
  position: relative;

  div {
    position: absolute;
    height: 14px;
    width: 92%;
    top: 2px;
    background: linear-gradient(180deg, rgba(255, 255, 255, .4) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 5px;
  }

  &:hover {
    background: linear-gradient(180deg, rgba(69, 16, 138, .5) 0%, rgba(164, 94, 255, .5) 94.59%);
  }
`

export const Message = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 8px;
  letter-spacing: 1.5px;
  color: #FF5555;
  margin-top: 2px;
  position: absolute;
  width: 100%;
`
