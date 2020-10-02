import React, { useState, SyntheticEvent, FormEvent } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { toast } from 'react-toastify'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { IoIosClose } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import { BsCheck } from 'react-icons/bs'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { CheckBox, Flex, TextUseTerms } from './style'
import { isValidFields, setToken } from '../../../../../utils'
import api from '../../../../../services/api'
import { BackgroundLeft, Content } from '../../style'
import { BridgeResgister } from '../../../../../assets'
import { changeLogged, changeNavbar } from '../../../../../store/actions'
import { StateDefault as StateDefaultLogged } from '../../../../../store/actions/isLogged/types'
import { StateDefault as StateDefaultNavbar } from '../../../../../store/actions/navbar/types'

interface FormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
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
  goToLogin: () => void
}

const Register: React.FC<Props> = ({ closeModal, goToLogin, history, changeLogged, changeNavbar }) => {
  const [UseTerms, setUseTerms] = useState<boolean>(false)
  const [Error, setError] = useState<string>('')
  const [FormData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const { password, passwordConfirmation } = FormData

  function onChange (e: SyntheticEvent): void {
    const target = e.target as HTMLInputElement
    setFormData({ ...FormData, [target.name]: target.value })
  }

  async function onSubmit (e: FormEvent): Promise<void> {
    e.preventDefault()

    // Validations
    const requirementFields = ['name', 'email', 'password', 'passwordConfirmation']
    if (!isValidFields(requirementFields, FormData)) {
      return setError('Há campo em branco.')
    }

    if (password !== passwordConfirmation) {
      return setError('As senhas não coicidem')
    }

    if (!UseTerms) {
      return setError('É preciso aceitar os termos de uso.')
    }
    setError('')

    // Register
    try {
      const res = await api.post('/users', FormData)

      // Set token
      localStorage.setItem('token', res.data.token)
      setToken()

      // Dispatch redux
      changeLogged(true)
      closeModal()
      changeNavbar(false)

      // Redirect
      toast.success('Cadastrado com sucesso')
      history.push('/dashboard')
    } catch (error) {
      if (error.response.data.body) {
        setError(error.response.data.body)
      }
    }
  }

  return (
    <>
      <BackgroundLeft image={BridgeResgister}></BackgroundLeft>
      <Content>
        <IoIosClose className="close" onClick={() => closeModal()} />
        <header>
          <h3>CADASTRO</h3>
        </header>
        <section>
          <p className="error center">{Error}</p>
          <form onSubmit={async (e) => await onSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={(e) => onChange(e)}
            /><FaRegUser />
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
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirmar senha"
              onChange={(e) => onChange(e)}
            /><AiOutlineLock />
            <Flex>
              <CheckBox useTerms={UseTerms} onClick={() => setUseTerms(!UseTerms)}>
                <BsCheck onClick={() => setUseTerms(!UseTerms)}/>
                <input
                  type="checkbox"
                  id="useTerms"
                  name="useTerms"
                  onChange={() => setUseTerms(!UseTerms)}
                />
              </CheckBox><TextUseTerms onClick={() => setUseTerms(!UseTerms)}>Termos de uso</TextUseTerms>
            </Flex>
            <button type="submit">Cadastrar</button>
          </form>
          <button type="button" onClick={() => goToLogin()}>Já tem uma conta</button>
        </section>
      </Content>
    </>
  )
}

export default withRouter(connector(Register))
