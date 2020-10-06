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
  DivName,
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

type Props = PropsFromRedux & {
  display: boolean
  name: string
  imageProfile?: string
  onSubmitName: (newName: string) => Promise<void>
  onSubmitImage: (image: File) => Promise<void>
}

const Welcome: React.FC<Props> = ({ changeInviteGroupModal, inviteGroup, display, name, onSubmitName, onSubmitImage, imageProfile }) => {
  const [Change, setChange] = useState<boolean>(false)
  const [Input, setInput] = useState<string>('')
  const [Image, setImage] = useState<string>('')

  useEffect(() => {
    setInput(name)
    if (imageProfile) {
      setImage(imageProfile)
    } else {
      setImage(PictureProfile)
    }
  }, [name, imageProfile])

  return (
    <StyledWelcome background={BgProfile}>
      <ImageProfile image={Image}>
        <ImageLabel hidden={display} htmlFor="image_profile">
          <InputImage type="file" id="image_profile" onChange={(e) => e.target.files && onSubmitImage(e.target.files[0])}/>
          <GoPlus />
        </ImageLabel>
      </ImageProfile>
      <DivName>
        <Salutation hidden={display}>Olá</Salutation>
        <Name
          hidden={display}
          value={Input}
          changed={Change}
          disabled={!Change}
          onChange={(e) => setInput(e.target.value)}
          lengthName={Input.length}
        />
        <Salutation hidden={display}>..</Salutation>
        <PencilIcon src={Pencil} alt={'Olá Mário'} changed={Change} onClick={() => setChange(!Change)} hidden={display}/>
        <Submit
          type="button"
          hidden={display}
          changed={Change}
          onClick={async () => {
            setChange(!Change)
            await onSubmitName(Input)
          }}
        ><FaCheck/></Submit>
      </DivName>
      <Flex hidden={display}>
        <Link to="/dashboard/denunciar/1234">Denunciar</Link>
        <Link to="/dashboard/avaliacao/1234">Avaliar</Link>
        <Invite type="button" onClick={() => changeInviteGroupModal(!inviteGroup)}>Convidar</Invite>
      </Flex>
    </StyledWelcome>
  )
}

export default connector(Welcome)
