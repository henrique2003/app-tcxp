import React, { useEffect, useState, FormEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Container } from '../../styles'
import { Face, ArrowRight } from '../../assets'
import { StyledEmailConfirmation, Div, Header, ImageFace, Alert, Form, Message, InputCode, Button, DivButton, CodeResend, CodeResendSpan } from './style'
import { Dispatch } from 'redux'
import { StateDefault } from '../../store/actions/confirmDenounce/types'
import { changeLogged } from '../../store/actions'
import { connect, ConnectedProps } from 'react-redux'
import api from '../../services/api'
import { setToken } from '../../utils'
import { toast } from 'react-toastify'

interface RootState {
  isLogged: boolean
}

const mapState = (state: RootState): RootState => ({
  isLogged: state.isLogged
})

interface DispatchProps {
  changeLogged: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeLogged: (payload) => dispatch(changeLogged(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps<any>

const EmailConfirmation: React.FC<Props> = ({ changeLogged, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()
    async function load (): Promise<void> {
      try {
        const res = await api.get('/load')
        console.log(res.data)

        changeLogged(true)

        if (res.data.body.emailConfirmation) {
          toast.success('Email já confirmado')
          history.push('/dashboard')
        }
      } catch (error) {
        toast.success('Acesso negado')
        history.push('/')
      }
    }
    load()
  }, [changeLogged, history])

  const [Code, setCode] = useState<string>('')

  async function onSubmit (e: FormEvent): Promise<void> {
    e.preventDefault()

    try {
      await api.post('/email/confirmation', {
        emailConfirmationCode: Code
      })

      toast.success('Email confirmado')
      history.push('/dashboard')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      } else if (error.response.data) {
        toast.error(error.response.data.body)
      }
    }
  }

  async function resendEmailConfirmation (): Promise<void> {
    try {
      await api.get('/email/confirmation/resend')

      toast.success('Email reenviado')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      } else if (error.response.data) {
        toast.error(error.response.data.body)
      }
    }
  }

  return (
    <StyledEmailConfirmation>
      <Container>
        <Div>
          <Header>
            <ImageFace src={Face} alt={'Image face'} />
            <Alert>Um email foi enviado para você!</Alert>
          </Header>
          <Form onSubmit={async (e) => await onSubmit(e)}>
            <Message>Insira o código que se encontra no email para confirmação de email.</Message>
            <InputCode
              name='code'
              placeholder="Ex: 198743189525256"
              onChange={(e) => setCode(e.target.value)}
            />
            <DivButton>
              <Button type="submit">
                <img src={ArrowRight} alt="submit"/>
              </Button>
            </DivButton>
          </Form>
          <CodeResend>Não recebeu o email?
            <CodeResendSpan
              type="button"
              onClick={async () => await resendEmailConfirmation()}>
            Clique aqui para o reenvio</CodeResendSpan></CodeResend>
        </Div>
      </Container>
    </StyledEmailConfirmation>
  )
}

export default withRouter(connector(EmailConfirmation))
