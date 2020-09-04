import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { NavbarArrow } from '../../assets'
import { StyledHeader } from './style'
import { changeNavbar, changeModal } from '../../store/actions'
import { StateDefault, Register, Login } from '../../store/actions/modal/types'
import { Dispatch } from 'redux'

type Props = PropsFromRedux

const Header: React.FC<Props> = ({ changeNavbar, changeModal, navbar, modal }) => {
  const [DropDown, setDropDown] = useState<boolean>(false)

  const payloadModalRegister: StateDefault = {
    open: !modal.open,
    component: 'Register'
  }

  const payloadModalLogin: StateDefault = {
    open: !modal.open,
    component: 'Login'
  }

  // If logged
  const logged = true

  // Navbar web no logged
  function linksNavWebNoLogged (): JSX.Element {
    return (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/sobre">Sobre</NavLink></li>
        <li><NavLink to="/duvidas">Dúvidas</NavLink></li>
        {/* Modal */}
        <li onClick={() => changeModal(payloadModalRegister)}>Cadastre-se</li>
        <li onClick={() => changeModal(payloadModalLogin)}>Entrar</li>
      </>
    )
  }

  // Navbar web logged
  function linksNavWebLogged (): JSX.Element {
    return (
      <>
        <li><NavLink to="/dashboard">Início</NavLink></li>
        <li><NavLink to="/dashboard/explorar">Explorar</NavLink></li>
        <li><NavLink to="/dashboard/chat">Chat</NavLink></li>
        <li><NavLink to="/dashboard/perfil">Perfil</NavLink></li>
        {/* DropDown */}
        <li onClick={() => setDropDown(!DropDown)}>
          <img src={NavbarArrow} alt="More"/>
          <ul>
            <li><NavLink to="/dashboard/solicitacoes">Solicitações</NavLink></li>
            <li><NavLink to="/duvidas">Sair</NavLink></li>
          </ul>
        </li>
      </>
    )
  }

  // Navbar mobile no logged
  function linksNavMobileNoLogged (): JSX.Element {
    return (
      <>
        <li onClick={() => changeNavbar(!navbar)}><NavLink to="/">Home</NavLink></li>
        <li onClick={() => changeNavbar(!navbar)}><NavLink to="/sobre">Sobre</NavLink></li>
        <li onClick={() => changeNavbar(!navbar)}><NavLink to="/duvidas">Dúvidas</NavLink></li>
        {/* Modal */}
        <li onClick={() => changeModal(payloadModalRegister)}>Cadastre-se</li>
        <li onClick={() => changeModal(payloadModalLogin)}>Entrar</li>
      </>
    )
  }

  // Navbar mobile logged
  function linksNavMobileLogged (): JSX.Element {
    return (
      <>
        <li><NavLink to="/dashboard">Início</NavLink></li>
        <li><NavLink to="/dashboard/explorar">Explorar</NavLink></li>
        <li><NavLink to="/dashboard/chat">Chat</NavLink></li>
        <li><NavLink to="/dashboard/perfil">Perfil</NavLink></li>
        <li><NavLink to="/dashboard/solicitacoes">Solicitações</NavLink></li>
        <li><NavLink to="/duvidas">Sair</NavLink></li>
      </>
    )
  }

  return (
    <StyledHeader navShow={navbar} logged={logged} dropDown={DropDown}>
      <div className="navbar_web">
        <div className="toggle_show" onClick={() => changeNavbar(!navbar)}>
          <IoMdClose />
          <div className="align_justify"></div>
          <div className="align_justify"></div>
          <div className="align_justify"></div>
        </div>
        {/* Web */}
        <div className="container">
          <h3>tcxp</h3>
          {/* Links */}
          <ul>
            {logged ? linksNavWebLogged() : linksNavWebNoLogged()}
          </ul>
        </div>
      </div>
      {/* Mobile */}
      <div className="navbar_mobile">
        <h3>tcxp</h3>
        <ul>
          {logged ? linksNavMobileLogged() : linksNavMobileNoLogged()}
        </ul>
      </div>
    </StyledHeader>
  )
}

interface RootState {
  navbar: boolean
  modal: {
    open: boolean
    component: typeof Register | typeof Login
  }
}

interface DispatchProps {
  changeNavbar: (payload: boolean) => void
  changeModal: (payload: StateDefault) => void
}

const mapState = (state: RootState): RootState => ({
  navbar: state.navbar,
  modal: state.modal
})

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeNavbar: (payload) => dispatch(changeNavbar(payload)),
  changeModal: (payload) => dispatch(changeModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
