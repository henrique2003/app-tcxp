import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeDeleteAccountModal, changeLogged } from '../../../../store/actions'
import { StateDefault as StateDefaultDeleteAccount } from '../../../../store/actions/deleteAccount/types'
import { StateDefault as StateDefaultIsLogged } from '../../../../store/actions/isLogged/types'
import { StyledModal, Message, Flex, Button } from './style'

import '../style.css'
import api from '../../../../services/api'
import { toast } from 'react-toastify'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { setToken } from '../../../../utils'

interface RootState {
  deleteAccount: boolean
}

const mapState = (state: RootState): RootState => ({
  deleteAccount: state.deleteAccount
})

interface DispatchProps {
  changeDeleteAccountModal: (payload: StateDefaultDeleteAccount) => void
  changeLogged: (payload: StateDefaultIsLogged) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeDeleteAccountModal: (payload) => dispatch(changeDeleteAccountModal(payload)),
  changeLogged: (payload) => dispatch(changeLogged(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps<any>

const DeleteAccount: React.FC<Props> = ({ changeDeleteAccountModal, deleteAccount: open, history, changeLogged }) => {
  const [ShowModal, setShowModal] = useState<string>('')

  function closeModal (): void {
    setShowModal('')
    changeDeleteAccountModal(false)
  }

  async function deleteAccount (): Promise<void> {
    try {
      await api.delete('/users')

      toast.success('Apagado com sucesso')
      closeModal()
      changeLogged(false)
      localStorage.clear()
      setToken()
      history.push('/')
    } catch (error) {
      toast.error('Erro ao apagar conta')
    }
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
          <Button type="button" onClick={() => closeModal()}>Agora não</Button>
          <Button type="button" onClick={async () => await deleteAccount()}>Apagar</Button>
        </Flex>
      </StyledModal>
    </Modal>
  )
}

export default withRouter(connector(DeleteAccount))
