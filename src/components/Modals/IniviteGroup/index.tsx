import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { CgClose } from 'react-icons/cg'
import { PictureGroup } from '../../../assets'
import { changeInviteGroupModal } from '../../../store/actions'
import { StateDefault } from '../../../store/actions/iniviteGoup/types'
import { StyledModal, Header, DivGroup } from './style'
import Group from './Group'
import api from '../../../services/api'
import { setToken } from '../../../utils'
import { IGroups } from '../../../pages/Chat'
import { toast } from 'react-toastify'

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
  const [GroupsData, setGroups] = useState<IGroups>({
    creatorGroup: [],
    adminGroup: [],
    memberGroup: []
  })

  useEffect(() => {
    setToken()
    async function loadMyGroups (): Promise<void> {
      try {
        const res = await api.get('/groups/mine')

        setGroups(res.data.body)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadMyGroups()
  }, [])

  function closeModal (): void {
    setShowModal('')
    changeInviteGroupModal(false)
  }

  async function invite (group: string): Promise<void> {
    try {
      await api.post('/groups/invite/request', { from: localStorage.getItem('id'), group })

      toast.success('Enviado com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
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
        <Header>
          <CgClose onClick={() => closeModal()} />
        </Header>
        <DivGroup groupLength={GroupsData.creatorGroup.length + GroupsData.adminGroup.length}>
          {GroupsData.creatorGroup.length === 0 && GroupsData.adminGroup.length === 0 && <p>Você ainda está em um grupo.</p>}
          {GroupsData?.creatorGroup.map(group => (
            <Group
              key={group._id}
              id={group._id}
              title={group.title}
              image={group.image?.url ?? PictureGroup}
              description={group.description}
              invite={invite}
            />))}
          {GroupsData?.adminGroup.map(group => (
            <Group
              key={group._id}
              id={group._id}
              title={group.title}
              image={group.image?.url ?? PictureGroup}
              description={group.description}
              invite={invite}
            />))}
        </DivGroup>
      </StyledModal>
    </Modal>
  )
}

export default connector(InviteGroup)
