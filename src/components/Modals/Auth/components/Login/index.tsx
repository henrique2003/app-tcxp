import React, { useState, SyntheticEvent, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { IoIosClose } from 'react-icons/io'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { BridgeLogin } from '../../../../../assets'
import { BackgroundLeft, Content } from '../../style'
import { StyledLogin } from './style'
import { StateDefault as StateDefaultLogged } from '../../../../../store/actions/isLogged/types'
import { StateDefault as StateDefaultNavbar } from '../../../../../store/actions/navbar/types'
import { Dispatch } from 'redux'
import { changeLogged, changeNavbar } from '../../../../../store/actions'
import { connect, ConnectedProps } from 'react-redux'
import api from '../../../../../services/api'
import { isValidFields, setToken } from '../../../../../utils'

interface FormData {
  email: string
  password: string
}

interface RootState {
  isLogged: boolean
}

const mapState = (state: RootState): RootState => ({
  isLogged: state.isLogged
})

interface DispatchProps {
  changeLogged: (payload: StateDefaultLogged) => void
  changeNavbar: (payload: StateDefaultNavbar) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeLogged: (payload) => dispatch(changeLogged(payload)),
  changeNavbar: (payload) => dispatch(changeNavbar(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps<any> & {
  closeModal: () => void
  goToCreateAccount: () => void
}

const Login: React.FC<Props> = ({ closeModal, goToCreateAccount, changeLogged, changeNavbar, history }) => {
  const [Error, setError] = useState<string>('')
  const [FormData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  })

  function onChange (e: SyntheticEvent): void {
    const target = e.target as HTMLInputElement
    setFormData({ ...FormData, [target.name]: target.value })
  }

  async function onSubmit (e: FormEvent): Promise<void> {
    e.preventDefault()

    console.log(FormData)
    // Validations
    const requirementFields = ['email', 'password']
    if (!isValidFields(requirementFields, FormData)) {
      return setError('Há campo em branco.')
    }
    setError('')

    // Register
    try {
      const res = await api.post('/login', FormData)

      // Set token
      localStorage.setItem('token', res.data.token)
      setToken()

      // Dispatch redux
      changeLogged(true)
      closeModal()
      changeNavbar(false)

      // Redirect
      toast.success('Entrou com sucesso')
      history.push('/dashboard')
    } catch (error) {
      if (error.response.data.body) {
        setError(error.response.data.body)
      }
    }
  }

  return (
    <>
      <BackgroundLeft image={BridgeLogin}></BackgroundLeft>
      <Content>
        <StyledLogin>
          <IoIosClose className="close" onClick={() => closeModal()} />
          <header>
            <h3>Bem Vindo á TCXP</h3>
          </header>
          <section>
            <p className="error center">{Error}</p>
            <form onSubmit={async (e) => await onSubmit(e)}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => onChange(e)}
              /><AiOutlineMail />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => onChange(e)}
              /><AiOutlineLock />
              <button type="submit">Entrar</button>
            </form>
            <p>Ainda não tem uma conta? <button type="button" onClick={() => goToCreateAccount()}>Criar conta</button></p>
          </section>
        </StyledLogin>
      </Content>
    </>
  )
}

export default withRouter(connector(Login))
