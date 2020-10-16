import React, { useEffect, useState, FormEvent } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Container } from '../../styles'
import { Pencil } from '../../assets'
import { changeLogged } from '../../store/actions'
import { StateDefault } from '../../store/actions/isLogged/types'
import {
  StyledCreateChat,
  Trace,
  Title,
  OrangeCircle,
  Form,
  Label,
  Input,
  TextArea,
  DivButton,
  Button
} from './style'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { setToken } from '../../utils'

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

const CreateChat: React.FC<Props> = ({ changeLogged, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()

    async function load (): Promise<void> {
      try {
        await api.get('/load/user')

        changeLogged(true)
      } catch (error) {
        history.push('/')
        toast.error('Acesso negado')
      }
    }
    load()
  }, [changeLogged, history])

  const [TitleGroup, setTitleGroup] = useState<string>('')
  const [Description, setDescription] = useState<string>('')

  async function onSubmit (e: FormEvent): Promise<void | null> {
    try {
      e.preventDefault()

      if (!TitleGroup || !Description) {
        toast.error('Campo em branco')
        return null
      }

      await api.post('/groups', { title: TitleGroup, description: Description })

      history.push('/dashboard/chat')
      toast.success('Criado com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
    }
  }

  return (
    <>
      <Trace></Trace>
      <StyledCreateChat>
        <Container>
          <Link to="/dashboard/chat">
            <MdKeyboardArrowLeft color="#FF6D00"/>
          </Link>
          <Title>Nova Conversa</Title>
          <Form onSubmit={async (e) => await onSubmit(e)}>
            <OrangeCircle>
              <img src={Pencil} alt="Pencil"/>
            </OrangeCircle>
            <Label htmlFor="name">Nome:</Label>
            <Input
              id="name"
              name="name"
              placeholder="Ex: Férias no Havaí"
              onChange={(e) => setTitleGroup(e.target.value)}
            />
            <Label htmlFor="description">Descrição:</Label>
            <TextArea
              id="description"
              name="description"
              placeholder="Ex: Grupo para passar férias no Havaí do dia 20 a 30."
              onChange={(e) => setDescription(e.target.value)}
            ></TextArea>
            <DivButton>
              <Button type="submit">Criar</Button>
            </DivButton>
          </Form>
        </Container>
      </StyledCreateChat>
    </>
  )
}

export default withRouter(connector(CreateChat))
