import React, { useEffect, useState } from 'react'
import { PictureProfile } from '../../assets'
import RequestItem from './RequestItem'
import { Title, Grid, StyledRequest } from './style'
import { changeLogged } from '../../store/actions/isLogged'
import { StateDefault } from '../../store/actions/isLogged/types'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { setToken } from '../../utils'
import { User } from '../Profile/index'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { IGroupsData } from '../Chat/index'

interface RootState {
  isLogged: boolean
}

const mapState = (state: RootState): RootState => ({
  isLogged: state.isLogged
})

interface DiapatchProps {
  changeLogged: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DiapatchProps => ({
  changeLogged: (payload) => dispatch(changeLogged(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps<any>

export interface AcceptRequest {
  _id: string
  to: User
  group: IGroupsData
}

const Request: React.FC<Props> = ({ changeLogged, history }) => {
  const [UserData, setUserData] = useState<User>({
    _id: '',
    name: '',
    email: '',
    totalAvaliate: 0,
    acceptRequest: []
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()

    async function load (): Promise<void> {
      try {
        const res = await api.get('/load/user')

        console.log(res.data.body)
        setUserData(res.data.body)
        changeLogged(true)
      } catch (error) {
        history.push('/')
        toast.error('Acesso negado')
      }
    }
    load()
  }, [changeLogged, history])

  async function accept (to: string, group: string): Promise<void> {
    try {
      const res = await api.post('/groups/accept/request', { to, group })

      setUserData(res.data.body)
      toast.success('Aceito com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
    }
  }

  async function reject (to: string, group: string): Promise<void> {
    try {
      const res = await api.post('/groups/reject/request', { to, group })

      setUserData(res.data.body)
      toast.success('Rejeitado com sucesso')
    } catch (error) {
      if (error.message) {
        console.log(error.message)
      } else if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
    }
  }

  return (
    <StyledRequest>
      <Title>Suas Solicitações</Title>
      {UserData.acceptRequest?.length === 0 && <p className="no_requests">Você não tem nenhuma solicitação</p>}
      <Grid>
        {UserData.acceptRequest?.map(request => (
          <RequestItem
            key={request._id}
            id={request.to._id}
            image={request.group.image?.url ?? PictureProfile} name={request.group.title}
            accept={accept}
            reject={reject}
            group={request.group}
          />
        ))}
      </Grid>
    </StyledRequest>
  )
}

export default withRouter(connector(Request))
