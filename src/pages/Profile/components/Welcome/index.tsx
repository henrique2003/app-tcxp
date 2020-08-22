import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Pencil, BgProfile, PictureProfile } from '../../../../assets'
import { StyledWelcome, ImageProfile, DivName, Name, PencilIcon, Salutation } from './style'

const Welcome: React.FC = () => {
  const [Change, setChange] = useState<boolean>(false)
  const [Input, setInput] = useState<string>('')

  useEffect(() => {
    setInput('Mário')
  }, [])

  return (
    <StyledWelcome background={BgProfile}>
      <ImageProfile image={PictureProfile}></ImageProfile>
      <DivName changed={Change}>
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
        <FaCheck onClick={() => setChange(!Change)}/>
      </DivName>
    </StyledWelcome>
  )
}

export default Welcome
