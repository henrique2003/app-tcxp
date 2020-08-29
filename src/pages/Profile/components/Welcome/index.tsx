import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

const Welcome: React.FC = () => {
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
        <Invite type="button">Convidar</Invite>
      </Flex>
    </StyledWelcome>
  )
}

export default Welcome
