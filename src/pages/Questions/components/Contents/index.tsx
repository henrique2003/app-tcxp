import React from 'react'
import { Title, Container } from '../../../../styles'
import { StyledContent, Row, Form, TitleForm, Label, Input, Textarea, Submit } from './style'

const Content: React.FC = () => {
  return (
    <StyledContent>
      <Title>Perguntas Frequentes</Title>
      <Container>
        <Row>
          <Form>
            <TitleForm>Nos informe sua pergunta</TitleForm>
            <Label>Nome:</Label>
            <Input type="text" placeholder="Exemplo: Carlos"/>
            <Label>Email:</Label>
            <Input type="email" placeholder="Exemplo: henrique@gmail.com"/>
            <Label>Mensagem:</Label>
            <Textarea placeholder="Exemplo: A segurança é boa?"></Textarea>
            <Submit>Enviar</Submit>
          </Form>
        </Row>
      </Container>
    </StyledContent>
  )
}

export default Content
