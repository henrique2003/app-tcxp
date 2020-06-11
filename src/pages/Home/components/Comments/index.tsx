import React from 'react'
import { StyledComments, Row } from './style'
import { Container, HeaderTitle, Title } from '../../../../styles'
import CommentItem from './CommentItem'
import { PersonOne, PersonTwo, PersonThree } from '../../../../assets'

const Comments: React.FC = () => {
  return (
    <StyledComments>
      <Container>
        <HeaderTitle>
          <Title>Alguns comentários</Title>
          <Row>
            <CommentItem
              comment="Plataforma muito boa, com ela ja realizei mais de 4 viagens com outras pessoas, super recomendo para todos que querem viajar"
              name="Gamora Titan"
              image={PersonOne}
            />
            <CommentItem
              comment="Plataforma muito boa, com ela ja realizei mais de 4 viagens com outras pessoas, super recomendo para todos que querem viajar"
              name="Perter Quill"
              image={PersonTwo}
            />
            <CommentItem
              comment="Plataforma muito boa, com ela ja realizei mais de 4 viagens com outras pessoas, super recomendo para todos que querem viajar"
              name="Groot"
              image={PersonThree}
            />
          </Row>
        </HeaderTitle>
      </Container>
    </StyledComments>
  )
}

export default Comments
