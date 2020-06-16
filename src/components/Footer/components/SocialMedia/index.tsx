import React from 'react'
import { StylesMedia } from './style'

interface Props {
  icon: string
  text: string
}

const Media: React.FC<Props> = ({ icon, text }) => {
  return (
    <StylesMedia>
      <img src={icon} alt={text}/>
      <span>{text}</span>
    </StylesMedia>
  )
}

export default Media
