import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pencil as PencilImage, PictureGroup } from '../../assets'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { BsPlus } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import MemberItem from './MemberItem'
import {
  StyledEditChat,
  Trace,
  DivTitle,
  Edit,
  Pencil,
  Title,
  Flex,
  DivImage,
  Label,
  TextArea,
  DivInfo,
  DivArea,
  DivImageHover,
  Members,
  MemberTitle,
  DivOutGroup,
  ButtonOutGroup
} from './style'

const EditChat: React.FC = () => {
  const [CanEdit, setCanEdit] = useState<boolean>(false)
  const [GroupName, setGroupName] = useState<string>('')

  useEffect(() => {
    setGroupName('Grupo Japão')
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Trace></Trace>
      <StyledEditChat>
        <Link to="/dashboard/chat">
          <MdKeyboardArrowLeft color="#FF6D00"/>
        </Link>
        <DivTitle>
          <Edit type="button" changeEdit={CanEdit}>
            <Pencil src={PencilImage} alt="Profile" changeEdit={CanEdit} onClick={() => setCanEdit(!CanEdit)}/>
            <FaCheck onClick={() => setCanEdit(!CanEdit)}/>
          </Edit>
          <Title
            value={GroupName}
            changed={!CanEdit}
            disabled={!CanEdit}
            onChange={(e) => setGroupName(e.target.value)}
            lengthName={GroupName.length}
          />
        </DivTitle>
        <DivInfo>
          <Flex>
            <DivImage url={PictureGroup}>
              <DivImageHover htmlFor="image_profile">
                <BsPlus color="white"/>
              </DivImageHover>
              <input type="file" name="image_profile" id="image_profile"/>
            </DivImage>
            <DivArea>
              <Label>Descrição</Label>
              <TextArea disabled={!CanEdit}>Esse grupo e para decidirmos tudo da viagem para o Japão.</TextArea>
            </DivArea>
          </Flex>
          <Members>
            <MemberTitle>Membros</MemberTitle>
            <MemberItem />
            <MemberItem />
            <MemberItem />
          </Members>
        </DivInfo>
        <DivOutGroup>
          <ButtonOutGroup>Sair do grupo</ButtonOutGroup>
          <ButtonOutGroup>Apagar grupo</ButtonOutGroup>
        </DivOutGroup>
      </StyledEditChat>
    </>
  )
}

export default EditChat
