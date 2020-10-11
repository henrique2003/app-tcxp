import React, { FormEvent, useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { toast } from 'react-toastify'
import { connect, ConnectedProps } from 'react-redux'
import { changeConfirmDenounceModal, changeLogged } from '../../store/actions'
import { StateDefault as StateDefaultConfirmDenounceModal } from '../../store/actions/confirmDenounce/types'
import { StateDefault as StateDefaultIsLogged } from '../../store/actions/isLogged/types'
import { BadFace } from '../../assets'
import {
  DenounceForm,
  Button, Header,
  PhraseOption,
  ImageFace,
  TextArea,
  Title,
  Label,
  Trace,
  Email
} from './style'
import { setToken } from '../../utils'
import api from '../../services/api'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface RootState {
  comfirmDenounce: boolean
  isLogged: boolean
}

const mapState = (state: RootState): RootState => ({
  comfirmDenounce: state.comfirmDenounce,
  isLogged: state.isLogged
})

interface DispatchProps {
  changeConfirmDenounceModal: (payload: StateDefaultConfirmDenounceModal) => void
  changeLogged: (payload: StateDefaultIsLogged) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeConfirmDenounceModal: (payload) => dispatch(changeConfirmDenounceModal(payload)),
  changeLogged: (payload) => dispatch(changeLogged(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps<any> & {
  match: {
    params: {
      id: string
    }
  }
}

const Denounce: React.FC<Props> = ({ changeConfirmDenounceModal, comfirmDenounce: open, changeLogged, history, match }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()
    changeLogged(true)

    async function load (): Promise<void> {
      try {
        await api.get('/load/user')
        changeLogged(true)
      } catch (error) {
        toast.error('Acesso negado')
        history.push('/')
      }
    }
    load()
  }, [changeLogged, history])

  const [Denounce, setDenounce] = useState<string>('')
  const [Error, setError] = useState<string>('')

  async function onSubmit (e: FormEvent): Promise<void | null> {
    e.preventDefault()

    try {
      if (!Denounce) {
        setError('Campo em branco!')
        return null
      }

      await api.post(`/denounce/${match.params.id as string}`, { denounce: Denounce })

      changeConfirmDenounceModal(!open)
      history.push(`/dashboard/perfil/${match.params.id as string}`)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <Trace></Trace>
      <DenounceForm onSubmit={async (e) => await onSubmit(e)}>
        <Header>
          <ImageFace src={BadFace} alt="bad_face"/>
          <Title>Conte-nos o que aconteceu para tomarmos as devidas providências <span>!</span></Title>
        </Header>
        <Label htmlFor="denounce">Deixe seu relato aqui:</Label>
        <p className="error">{Error}</p>
        <TextArea id="denounce" placeholder="Mensagem:" onChange={(e) => setDenounce(e.target.value)}></TextArea>
        <Button type="submit">Enviar</Button>
        <PhraseOption>Ou se preferir entre em contato pelo e-mail</PhraseOption>
        <Email>XXXXX@gmailcom.br</Email>
      </DenounceForm>
    </>
  )
}

export default withRouter(connector(Denounce))
