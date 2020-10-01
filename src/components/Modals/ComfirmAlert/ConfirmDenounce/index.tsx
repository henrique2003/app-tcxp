import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeConfirmDenounceModal } from '../../../../store/actions'
import { StateDefault } from '../../../../store/actions/deleteAccount/types'
import { CgClose } from 'react-icons/cg'
import { StyledModal, Message } from './style'

import '../style.css'

interface RootState {
  comfirmDenounce: boolean
}

const mapState = (state: RootState): RootState => ({
  comfirmDenounce: state.comfirmDenounce
})

interface DispatchProps {
  changeConfirmDenounceModal: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeConfirmDenounceModal: (payload) =>
    dispatch(changeConfirmDenounceModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const ConfirmDenounce: React.FC<Props> = ({
  changeConfirmDenounceModal,
  comfirmDenounce: open
}) => {
  const [ShowModal, setShowModal] = useState<string>('')

  function closeModal (): void {
    setShowModal('')
    changeConfirmDenounceModal(false)
  }

  Modal.setAppElement('#root')
  return (
    <Modal
      isOpen={open}
      onRequestClose={() => closeModal()}
      overlayClassName={`Overlay ${ShowModal}`}
      className="Modal"
      closeTimeoutMS={400}
      onAfterOpen={() => setShowModal('Show')}
    >
      <StyledModal>
        <CgClose onClick={() => closeModal()}/>
        <Message>Obrigada por enviar sua <span>denuncia</span>! Em breve iremos verifica-la.</Message>
      </StyledModal>
    </Modal>
  )
}

export default connector(ConfirmDenounce)
