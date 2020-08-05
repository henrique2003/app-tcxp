import React from 'react'
import { Title, Container } from '../../../../styles'
import Accordion from './Accordion'
import { StyledContent, Row, Form, TitleForm, Label, Input, Textarea, Submit, Comments } from './style'

const Content: React.FC = () => {
  return (
    <StyledContent>
      <Title>Perguntas Frequentes</Title>
      <Container>
        <Row>
          <Comments>
            <Accordion title="Esqueci minha senha, e agora?" content="Por que sim e porque é o melhor de todos e tudo mais." />
          </Comments>
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
