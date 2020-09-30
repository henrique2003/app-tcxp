import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import api from '../../services/api'
import { setToken } from '../../utils'
import { StateDefault } from '../../store/actions/isLogged/types'
import { changeLogged } from '../../store/actions/isLogged/index'
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

const Dashboard: React.FC<Props> = ({ changeLogged, history }) => {
  useEffect(() => {
    setToken()
    async function loadUser (): Promise<void> {
      try {
        await api.get('/load')

        changeLogged(true)
      } catch (error) {
        // console.log(error.response.data.body)
        toast.error('Acesso negado')
        history.push('/')
      }
    }
    loadUser()
  }, [])

  return (
    <div>

    </div>
  )
}

export default withRouter(connector(Dashboard))
