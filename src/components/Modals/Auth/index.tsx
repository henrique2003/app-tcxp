import React, { useState } from 'react'
import ModalReact from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { StateDefault, Register as IRegister, Login as ILogin } from '../../../store/actions/modal/types'
import { changeModal } from '../../../store/actions/modal'
import { StyledModal, Row } from './style'
import { Register, Login } from './components'

import './style.css'

type Props = PropsFromRedux

const Auth: React.FC<Props> = ({ modal, changeModal }) => {
  const [ShowModal, setShowModal] = useState<string>('')

  const payloadModalRegister: StateDefault = {
    ...modal,
    open: !modal.open
  }

  function closeModal (): void {
    setShowModal('')
    changeModal(payloadModalRegister)
  }

  function goToLogin (): void {
    changeModal({
      ...modal,
      component: 'Login'
    })
  }

  function goToCreateAccount (): void {
    changeModal({
      ...modal,
      component: 'Register'
    })
  }

  ModalReact.setAppElement('#root')
  return (
    <ModalReact
      isOpen={modal.open}
      onRequestClose={() => closeModal()}
      overlayClassName={`Overlay ${ShowModal}`}
      className="Modal"
      closeTimeoutMS={800}
      onAfterOpen={() => setShowModal('Show')}
    >
      <StyledModal>
        <Row>
          {modal.component === 'Register'
            ? <Register closeModal={() => closeModal()} goToLogin={() => goToLogin()} />
            : <Login closeModal={() => closeModal()} goToCreateAccount={() => goToCreateAccount()} />}
        </Row>
      </StyledModal>
    </ModalReact>
  )
}

interface RootState {
  modal: {
    open: boolean
    component: typeof IRegister | typeof ILogin
  }
}

const mapState = (state: RootState): RootState => ({
  modal: state.modal
})

interface DispatchProps {
  changeModal: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeModal: (payload) => dispatch(changeModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Auth)
