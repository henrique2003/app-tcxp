import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'
import { StyledHeader } from './style'
import { changeNavbar, changeModal } from '../../store/actions'
import { StateDefault, Register, Login } from '../../store/actions/modal/types'
import { Dispatch } from 'redux'

type Props = PropsFromRedux

const Header: React.FC<Props> = ({ changeNavbar, changeModal, navbar, modal }) => {
  const payloadModalRegister: StateDefault = {
    open: !modal.open,
    component: 'Register'
  }
  return (
    <StyledHeader navShow={navbar}>
      <div className="navbar_web">
        <div className="toggle_show" onClick={() => changeNavbar(!navbar)}>
          <IoMdClose />
          <div className="align_justify"></div>
          <div className="align_justify"></div>
          <div className="align_justify"></div>
        </div>
        <div className="container">
          <h3>tcxp</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sobre">Sobre</NavLink></li>
            <li><NavLink to="/duvidas">Dúvidas</NavLink></li>
            <li onClick={() => changeModal(payloadModalRegister)}>Cadastre-se</li>
            <li>Entrar</li>
          </ul>
        </div>
      </div>
      <div className="navbar_mobile">
        <h3>tcxp</h3>
        <ul>
          <li onClick={() => changeNavbar(!navbar)}><NavLink to="/">Home</NavLink></li>
          <li onClick={() => changeNavbar(!navbar)}><NavLink to="/sobre">Sobre</NavLink></li>
          <li onClick={() => changeNavbar(!navbar)}><NavLink to="/duvidas">Dúvidas</NavLink></li>
          <li onClick={() => changeModal(payloadModalRegister)}>Cadastre-se</li>
          <li>Entrar</li>
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
