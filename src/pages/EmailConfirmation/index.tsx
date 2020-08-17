import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Container } from '../../styles'
import { Face, ArrowRight } from '../../assets'
import { StyledEmailConfirmation, Div, Header, ImageFace, Alert, Form, Message, InputCode, Button, DivButton, CodeResend, CodeResendSpan } from './style'

const EmailConfirmation: React.FC = () => {
  return (
    <StyledEmailConfirmation>
      <Container>
        <Link to="/">
          <BsArrowLeft />
        </Link>
        <Div>
          <Header>
            <ImageFace src={Face} alt={'Image face'} />
            <Alert>Um email foi enviado para você!</Alert>
          </Header>
          <Form>
            <Message>Insira o código que se encontra no email para confirmação de email.</Message>
            <InputCode name='code' placeholder="Ex: 198743189525256" />
            <DivButton>
              <Button type="submit">
                <img src={ArrowRight} alt=""/>
              </Button>
            </DivButton>
          </Form>
          <CodeResend>Não recebeu o email?<CodeResendSpan type="submit">Clique aqui para o reenvio</CodeResendSpan></CodeResend>
        </Div>
      </Container>
    </StyledEmailConfirmation>
  )
}

export default EmailConfirmation
