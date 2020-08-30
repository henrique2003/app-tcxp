import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeInviteGroupModal } from '../../../../store/actions'
import { StateDefault } from '../../../../store/actions/iniviteGoup/types'
import { FaCheck } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { Pencil, BgProfile, PictureProfile } from '../../../../assets'
import {
  StyledWelcome,
  ImageProfile,
  FormName,
  Name,
  PencilIcon,
  Salutation,
  Submit,
  ImageLabel,
  InputImage,
  Flex,
  Invite
} from './style'

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

const Welcome: React.FC<Props> = ({ changeInviteGroupModal, inviteGroup }) => {
  const [Change, setChange] = useState<boolean>(false)
  const [Input, setInput] = useState<string>('')

  useEffect(() => {
    setInput('Mário')
  }, [])

  return (
    <StyledWelcome background={BgProfile}>
      <ImageProfile image={PictureProfile}>
        <ImageLabel htmlFor="image_profile">
          <InputImage type="file" id="image_profile"/>
          <GoPlus />
        </ImageLabel>
      </ImageProfile>
      <FormName>
        <Salutation>Olá</Salutation>
        <Name
          value={Input}
          changed={Change}
          disabled={!Change}
          onChange={(e) => setInput(e.target.value)}
          lengthName={Input.length}
        />
        <Salutation>..</Salutation>
        <PencilIcon src={Pencil} alt={'Olá Mário'} changed={Change} onClick={() => setChange(!Change)}/>
        <Submit type="submit" changed={Change} onClick={() => setChange(!Change)}><FaCheck/></Submit>
      </FormName>
      <Flex>
        <Link to="">Denunciar</Link>
        <Link to="">Avaliar</Link>
        <Invite type="button" onClick={() => changeInviteGroupModal(!inviteGroup)}>Convidar</Invite>
      </Flex>
    </StyledWelcome>
  )
}

export default connector(Welcome)
