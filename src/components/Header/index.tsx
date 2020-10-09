import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { NavbarArrow } from '../../assets'
import { StyledHeader } from './style'
import { changeNavbar, changeModal, changeLogged } from '../../store/actions'
import { StateDefault as StateDefaultModal, Register, Login } from '../../store/actions/modal/types'
import { StateDefault as StateDefaultIsLogged } from '../../store/actions/isLogged/types'
import { Dispatch } from 'redux'
import { setToken } from '../../utils'
import { toast } from 'react-toastify'

type Props = PropsFromRedux

const Header: React.FC<Props> = ({ changeNavbar, changeModal, navbar, modal, isLogged, changeLogged }) => {
  const [DropDown, setDropDown] = useState<boolean>(false)

  const payloadModalRegister: StateDefaultModal = {
    open: !modal.open,
    component: 'Register'
  }

  const payloadModalLogin: StateDefaultModal = {
    open: !modal.open,
    component: 'Login'
  }

  // Logout
  function logout (): void {
    changeLogged(false)
    localStorage.clear()
    toast.success('Saiu com sucesso')
    setToken()
  }

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
            <li onClick={logout}><NavLink to="/">Sair</NavLink></li>
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
        <li onClick={logout}><NavLink to="/">Sair</NavLink></li>
      </>
    )
  }

  return (
    <StyledHeader navShow={navbar} logged={isLogged} dropDown={DropDown}>
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
            {isLogged ? linksNavWebLogged() : linksNavWebNoLogged()}
          </ul>
        </div>
      </div>
      {/* Mobile */}
      <div className="navbar_mobile">
        <h3>tcxp</h3>
        <ul>
          {isLogged ? linksNavMobileLogged() : linksNavMobileNoLogged()}
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
  isLogged: boolean
}

interface DispatchProps {
  changeNavbar: (payload: boolean) => void
  changeModal: (payload: StateDefaultModal) => void
  changeLogged: (payload: StateDefaultIsLogged) => void
}

const mapState = (state: RootState): RootState => ({
  navbar: state.navbar,
  modal: state.modal,
  isLogged: state.isLogged
})

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeNavbar: (payload) => dispatch(changeNavbar(payload)),
  changeModal: (payload) => dispatch(changeModal(payload)),
  changeLogged: (payload) => dispatch(changeLogged(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
