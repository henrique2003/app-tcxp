import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { BridgeLogin } from '../../../../assets'
import { BackgroundLeft, Content } from '../../style'
import { StyledLogin } from './style'

interface Props {
  closeModal: () => void
}

const Login: React.FC<Props> = ({ closeModal }) => {
  return (
    <>
      <BackgroundLeft image={BridgeLogin}></BackgroundLeft>
      <Content>
        <StyledLogin>
          <IoIosClose className="close" onClick={() => closeModal()} />
          <header>
            <h3>Bem Vindo á TCXP</h3>
          </header>
          <section>
            <form>
              <input
                type="email"
                name="email"
                // value={email}
                placeholder="Email"
              /><AiOutlineMail />
              <input
                type="password"
                name="password"
                // value={password}
                placeholder="Senha"
              /><AiOutlineLock />
              <button type="submit">Entrar</button>
            </form>
            <p>Ainda não tem uma conta? <button type="button">Criar conta</button></p>
          </section>
        </StyledLogin>
      </Content>
    </>
  )
}

export default Login
