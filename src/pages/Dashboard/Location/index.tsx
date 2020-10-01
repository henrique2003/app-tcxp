import React, { useState } from 'react'
import { RiMapPinLine } from 'react-icons/ri'
import { StyledLocation, Title, Text } from './style'

interface Props {
  name: string
  text: string
  image: string
}

const Location: React.FC<Props> = ({ name, text, image }) => {
  const [Hover, setHover] = useState<boolean>(false)

  return (
    <StyledLocation url={image} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <Title hover={Hover}><RiMapPinLine />{name}</Title>
      <Text hover={Hover}>{text}</Text>
    </StyledLocation>
  )
}

export default Location
