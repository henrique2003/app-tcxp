import React from 'react'
import { StyledCard, Header, CardHeader, DivIcon, Icon, CardTitle, Content } from './style'

interface Props {
  title: string
  image: string
  content: string
}

const Card: React.FC<Props> = ({ title, content, image }) => {
  return (
    <StyledCard>
      <Header>
        <CardHeader>
          <DivIcon>
            <Icon src={image} alt={title}/>
          </DivIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Header>
      <Content>{content}</Content>
    </StyledCard>
  )
}

export default Card
