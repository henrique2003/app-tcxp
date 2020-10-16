import React, { useState } from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'
import { PictureProfile } from '../../../assets'
import { StyledMemberItem, Image, Name, Role, Options, Button } from './style'
import { User } from '../../Profile'

interface Props {
  user: User
  role: number
  showMore: string
}

const MemberItem: React.FC<Props> = ({ user, role, showMore }) => {
  const { name, imageProfile } = user

  const [Open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StyledMemberItem open={Open}>
        <Image url={imageProfile?.url ?? PictureProfile}></Image>
        <div>
          <Name>{name}</Name>
          <Role>{role === 1 ? 'Criador' : role === 2 ? 'Administrador' : 'Membro'}</Role>
        </div>
        {showMore === 'yes' && (
          <>
            <RiMore2Fill color="rgba(0,0,0,0.7)" size="50" onClick={() => setOpen(!Open)}/>
            <IoIosArrowUp color="#FF6D00" size="50" onClick={() => setOpen(!Open)}/>
          </>
        )}
      </StyledMemberItem>
      {showMore === 'yes' && (
        <Options open={Open}>
          <Button type="submit">Tornar Admnistrador</Button>
          <Button type="submit">Remover do Grupo</Button>
        </Options>
      )}
    </>
  )
}

export default MemberItem
