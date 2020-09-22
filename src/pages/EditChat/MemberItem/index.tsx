import React, { useState } from 'react'
import { RiMore2Fill } from 'react-icons/ri'
import { IoIosArrowUp } from 'react-icons/io'
import { PictureProfile } from '../../../assets'
import { StyledMemberItem, Image, Name, Role, Options, Button } from './style'

const MemberItem: React.FC = () => {
  const [Open, setOpen] = useState<boolean>(false)

  return (
    <>
      <StyledMemberItem open={Open}>
        <Image url={PictureProfile}></Image>
        <div>
          <Name>Cleyton</Name>
          <Role>Administrador</Role>
        </div>
        <RiMore2Fill color="rgba(0,0,0,0.7)" size="50" onClick={() => setOpen(!Open)}/>
        <IoIosArrowUp color="#FF6D00" size="50" onClick={() => setOpen(!Open)}/>
      </StyledMemberItem>
      <Options open={Open}>
        <Button type="submit">Tornar Admnistrador</Button>
        <Button type="submit">Remover do Grupo</Button>
      </Options>
    </>
  )
}

export default MemberItem
