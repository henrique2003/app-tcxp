import React, { useState } from 'react'
import ModalReact from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeModal } from '../../store/actions/modal'
import { StateDefault, Register as IRegister, Login as ILogin } from '../../store/actions/modal/types'
import { StyledModal, Row } from './style'
import { Register } from './components'

import './style.css'

type Props = PropsFromRedux

const Modal: React.FC<Props> = ({ modal, changeModal }) => {
  const [ShowModal, setShowModal] = useState<string>('')
  const [ModalComponent, setModalComponent] = useState<typeof IRegister | typeof ILogin>(modal.component)

  const payloadModalRegister: StateDefault = {
    open: !modal.open,
    component: 'Register'
  }

  function closeModal (): void {
    setShowModal('')
    changeModal(payloadModalRegister)
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
          {ModalComponent === 'Register'
            ? <Register closeModal={() => closeModal()} />
            : <Register closeModal={() => closeModal()} />}
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

export default connector(Modal)
