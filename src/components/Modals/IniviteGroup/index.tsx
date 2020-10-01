import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { CgClose } from 'react-icons/cg'
import { PictureGroup } from '../../../assets'
import { changeInviteGroupModal } from '../../../store/actions'
import { StateDefault } from '../../../store/actions/iniviteGoup/types'
import { StyledModal, Header, DivGroup } from './style'
import Group from './Group'

interface RootState {
  inviteGroup: boolean
}

const mapState = (state: RootState): RootState => ({
  inviteGroup: state.inviteGroup
})

interface DispatchProps {
  changeInviteGroupModal: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeInviteGroupModal: (payload) => dispatch(changeInviteGroupModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const InviteGroup: React.FC<Props> = ({ changeInviteGroupModal, inviteGroup: open }) => {
  const [ShowModal, setShowModal] = useState<string>('')

  function closeModal (): void {
    setShowModal('')
    changeInviteGroupModal(false)
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
        <Header>
          <CgClose onClick={() => closeModal()} />
        </Header>
        <DivGroup groupLength={3}>
          <Group
            image={PictureGroup}
            title="Praia no RJ"
            description="Esse grupo e para decidirmos tudo da viagem para o Japão."
          />
          <Group
            image={PictureGroup}
            title="Praia no RJ"
            description="Esse grupo e para decidirmos tudo da viagem para o Japão."
          />
          <Group
            image={PictureGroup}
            title="Praia no RJ"
            description="Esse grupo e para decidirmos tudo da viagem para o Japão."
          />
          {/* <Group
            image={PictureGroup}
            title="Praia no RJ"
            description="Esse grupo e para decidirmos tudo da viagem para o Japão."
          /> */}
        </DivGroup>
      </StyledModal>
    </Modal>
  )
}

export default connector(InviteGroup)
