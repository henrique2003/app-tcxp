import React from 'react'
import { StyledCard } from './style'

interface Props{
  title: string
  description: string
  image: string
}

const Card: React.FC<Props> = ({ title, description, image }) => {
  return (
    <StyledCard image={image}>
      <div className="content">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </StyledCard>
  )
}

export default Card
