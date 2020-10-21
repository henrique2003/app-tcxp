import React from 'react'
import { Image, Name, Role, StyledMemberItem } from './style'

interface Props {
  name: string
  role: string
  lastMessage: string
  image: string
  onClick: () => void
}

const GroupItem: React.FC<Props> = ({ name, role, image, onClick }) => {
  return (
    <>
      <StyledMemberItem onClick={() => onClick()}>
        <Image url={image}></Image>
        <div>
          <Name value={name} disabled={true}/>
          <Role>{role}</Role>
        </div>
      </StyledMemberItem>
    </>
  )
}

export default GroupItem
