import React from 'react'
import { StyleCard } from './style'

interface Props {
  image: string
  title: string
  text: string
}

const Card: React.FC<Props> = ({ image, text, title }) => {
  return (
    <StyleCard>
      <div className="wrapper_icon">
        <img src={image} alt=""/>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </StyleCard>
  )
}

export default Card
