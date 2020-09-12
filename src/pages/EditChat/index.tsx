import React, { useState } from 'react'
import { Pencil as PencilImage } from '../../assets'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa'
import {
  StyledEditChat,
  Trace,
  DivTitle,
  Edit,
  Pencil,
  Title
} from './style'

const EditChat: React.FC = () => {
  const [CanEdit, setCanEdit] = useState<boolean>(true)

  return (
    <>
      <Trace></Trace>
      <StyledEditChat>
        <MdKeyboardArrowLeft color="#FF6D00"/>
        <DivTitle>
          <Edit type="button" changeEdit={CanEdit}>
            <Pencil src={PencilImage} alt="Profile" changeEdit={CanEdit} onClick={() => setCanEdit(!CanEdit)}/>
            <FaCheck onClick={() => setCanEdit(!CanEdit)}/>
          </Edit>
          <Title>Perfil</Title>
        </DivTitle>
      </StyledEditChat>
    </>
  )
}

export default EditChat
