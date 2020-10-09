import React, { useEffect, useState } from 'react'
import { Welcome, ShortInfo, Info, Evaluation, DangerZone } from './components'
import { changeLogged } from '../../store/actions'
import { StateDefault } from '../../store/actions/isLogged/types'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
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

type Props = PropsFromRedux & RouteComponentProps<any> & {
  match: {
    params: {
      id: string
    }
  }
}

export interface User {
  _id: string
  name: string
  email: string
  description?: string
  state?: string
  country?: string
  city?: string
  celphone?: string
  instagram?: string
  twitter?: string
  facebook?: string
  avaliate?: Avaliate[]
  interestings?: string[]
  inviteRequest?: []
  acceptRequest?: []
  imageProfile?: {
    name: string
    size: number
    key: string
    url: string
  }
  totalAvaliate: number
}

export interface Avaliate {
  _id: string
  avaliate: number
  comment: string
  user: User
}

interface IInfo {
  email?: string
  country?: string
  state?: string
  celphone?: string
  instagram?: string
  twitter?: string
  facebook?: string
  description?: string
  interestings?: string
}

const Profile: React.FC<Props> = ({ history, changeLogged, match }) => {
  const [Display, setDisplay] = useState<boolean>(false)
  const [User, setUser] = useState<User>({
    _id: '',
    name: '',
    email: '',
    avaliate: [],
    totalAvaliate: 0
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()
    const id: string = match.params.id
    async function load (): Promise<void> {
      try {
        var res = null
        if (id) {
          res = await api.get(`/user/${id}`)
        } else {
          res = await api.get('/load/user')
        }

        setUser(res.data.body)

        changeLogged(true)
      } catch (error) {
        toast.error('Acesso negado')
        history.push('/')
      }
    }
    load()
    setDisplay(false)

    if (id) {
      setDisplay(true)
    }
  }, [changeLogged, history, match.params.id])

  async function onSubmitName (newName: string): Promise<void> {
    try {
      const res = await api.put('/users', { name: newName })
      setUser(res.data.body)
    } catch (error) {
      toast.error('Erro ao trocar nome')
    }
  }

  async function onSubmitImage (file: File): Promise<void> {
    try {
      const data = new FormData()
      data.append('file', file)

      const res = await api.put('/users', data)
      setUser(res.data.body)
    } catch (error) {
      toast.error('Erro ao trocar nome')
    }
  }

  async function onSubmitInfo (data: IInfo): Promise<void> {
    try {
      const res = await api.put('/users', data)

      setUser(res.data.body)
      toast.success('Alterado com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
    }
  }

  return (
    <>
      <Welcome
        _id={User._id}
        display={Display}
        name={User.name}
        imageProfile={User.imageProfile && User.imageProfile.url}
        onSubmitName={onSubmitName}
        onSubmitImage={onSubmitImage}
      />
      <ShortInfo evaluation={User?.totalAvaliate}/>
      <Info
        display={Display}
        user={User}
        onSubmitInfo={onSubmitInfo}
      />
      <Evaluation
        avaliate={User.avaliate ?? []}
      />
      <DangerZone
        display={Display}
      />
    </>
  )
}

export default withRouter(connector(Profile))
