import React, { useState } from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'
import { PictureProfile } from '../../../assets'
import { StyledMemberItem, Image, Name, Role, Options, Button } from './style'
import { User } from '../../Profile'

interface Props {
  user: User
  role: Number
  showMore: string
  removeUser: (idParticiopant: string) => Promise<void>
  moveToAdmin: (moveToAdmin: string) => Promise<void>
}

const MemberItem: React.FC<Props> = ({ user, role, showMore, removeUser, moveToAdmin }) => {
  const { name, imageProfile, _id } = user

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
          <Button type="button" onClick={async () => await moveToAdmin(_id)}>Tornar Admnistrador</Button>
          <Button type="button" onClick={async () => await removeUser(_id)}>Remover do Grupo</Button>
        </Options>
      )}
    </>
  )
}

export default MemberItem
