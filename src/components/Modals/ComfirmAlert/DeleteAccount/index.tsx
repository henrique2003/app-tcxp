import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeDeleteAccountModal } from '../../../../store/actions'
import { StateDefault } from '../../../../store/actions/deleteAccount/types'
import { StyledModal, Message, Flex, Button } from './style'

import '../style.css'

interface RootState {
  deleteAccount: boolean
}

const mapState = (state: RootState): RootState => ({
  deleteAccount: state.deleteAccount
})

interface DispatchProps {
  changeDeleteAccountModal: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeDeleteAccountModal: (payload) => dispatch(changeDeleteAccountModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const DeleteAccount: React.FC<Props> = ({ changeDeleteAccountModal, deleteAccount: open }) => {
  const [ShowModal, setShowModal] = useState<string>('')

  function closeModal (): void {
    setShowModal('')
    changeDeleteAccountModal(false)
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
        <Message>Tem certeza que deseja apagar a conta?</Message>
        <Flex>
          <Button onClick={() => closeModal()}>Agora não</Button>
          <Button>Apagar</Button>
        </Flex>
      </StyledModal>
    </Modal>
  )
}

export default connector(DeleteAccount)
