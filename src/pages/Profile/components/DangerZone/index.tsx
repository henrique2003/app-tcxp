import React from 'react'
import { Container } from '../../../../styles'
import { StyledDangerZone, Title, Form, Aks, Line, Message, Button } from './style'

const DangerZone: React.FC = () => {
  return (
    <StyledDangerZone>
      <Container>
        <Title>Área de risco</Title>
        <Form>
          <Aks>Apagar está conta?</Aks>
          <Line></Line>
          <Message>Cuidado, esta ação é irrevercível</Message>
          <Button type="button">Apagar conta</Button>
        </Form>
      </Container>
    </StyledDangerZone>
  )
}

export default DangerZone
