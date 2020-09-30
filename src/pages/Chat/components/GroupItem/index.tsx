import React from 'react'
import { Image, Name, Role, StyledMemberItem, Time } from './style'

interface Props {
  name: string
  role: string
  lastMessage: string
  image: string
}

const GroupItem: React.FC<Props> = ({ name, role, lastMessage, image }) => {
  return (
    <>
      <StyledMemberItem>
        <Image url={image}></Image>
        <div>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </div>
        <Time>{lastMessage}</Time>
      </StyledMemberItem>
    </>
  )
}

export default GroupItem