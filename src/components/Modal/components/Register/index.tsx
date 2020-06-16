import React, { useState } from 'react'
import { BridgeResgister } from '../../../../assets'
import { BackgroundLeft, Content } from '../../style'
import { IoIosClose } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import { BsCheck } from 'react-icons/bs'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { CheckBox, Flex, TextUseTerms } from './style'

interface Props {
  closeModal: () => void
  goToLogin: () => void
}

const Register: React.FC<Props> = ({ closeModal, goToLogin }) => {
  const [UseTerms, setUseTerms] = useState<boolean>(false)

  return (
    <>
      <BackgroundLeft image={BridgeResgister}></BackgroundLeft>
      <Content>
        <IoIosClose className="close" onClick={() => closeModal()} />
        <header>
          <h3>CADASTRO</h3>
        </header>
        <section>
          <form>
            <input
              type="text"
              name="name"
              // value={name}
              placeholder="Nome"
            /><FaRegUser />
            <input
              type="password"
              name="password"
              // value={password}
              placeholder="Senha"
            /><AiOutlineLock />
            <input
              type="password"
              name="passwordComfirmation"
              // value={passwordComfirmation}
              placeholder="Confirmar senha"
            /><AiOutlineLock />
            <input
              type="email"
              name="email"
              // value={email}
              placeholder="Email"
            /><AiOutlineMail />
            <Flex>
              <CheckBox useTerms={UseTerms} onClick={() => setUseTerms(!UseTerms)}>
                <BsCheck onClick={() => setUseTerms(!UseTerms)}/>
                <input
                  type="checkbox"
                  id="useTerms"
                  name="useTerms"
                  onChange={() => setUseTerms(!UseTerms)}
                />
              </CheckBox><TextUseTerms onClick={() => setUseTerms(!UseTerms)}>Termos de uso</TextUseTerms>
            </Flex>
            <button type="submit">Cadastrar</button>
          </form>
          <button type="button" onClick={() => goToLogin()}>Já tem uma conta</button>
        </section>
      </Content>
    </>
  )
}

export default Register
