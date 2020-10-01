import React, { FormEvent, SyntheticEvent, useState } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import ArrowLeft from '../../../../assets/icons/arrow-right.png'
import Image from '../../../../assets/images/home/home_introduction.png'
import { StyledIntroduction, Row } from './style'
import { Container } from '../../../../styles'
import { FcCheckmark } from 'react-icons/fc'
import { isValidFields, setToken } from '../../../../utils'
import api from '../../../../services/api'
import { toast } from 'react-toastify'
import { StateDefault } from '../../../../store/actions/isLogged/types'
import { changeLogged } from '../../../../store/actions'
import { Dispatch } from 'redux'

interface FormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

type Props = PropsFromRedux & RouteComponentProps<any>

const Introduction: React.FC<Props> = ({ navbar, history, isLogged, changeLogged }) => {
  const [Error, setError] = useState<string>('')
  const [UseTerms, setUseTerms] = useState<boolean>(false)
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
      console.log(res.data)

      // Set token
      localStorage.setItem('token', res.data.token)
      setToken()

      // Dispatch redux
      changeLogged(true)

      // Redirect
      toast.success('Cadastrado com sucesso')
      history.push('/dashboard')
    } catch (error) {
      setError(error.response.data.body)
    }
  }

  return (
    <StyledIntroduction image={Image} useTerms={UseTerms} isNav={navbar}>
      <Container>
        <Row>
          <div className="wrapper_content">
            <h5>Querendo viajar para algum lugar mas não tem ninguém para te acompanhar?</h5>
            <p>Aqui na tcxp você conhece pessoas novas e com os mesmos interesses que você. Crie grupos de viagens e chame pessoas para fazerem parte dele.</p>
            <Link to="/sobre">Conheça mais</Link>
          </div>
          <div className="wrapper_form">
            <form onSubmit={async (e) => await onSubmit(e)}>
              <div className="wrapper_title">
                <p>Cadastre-se</p>
              </div>
              {/* Error */}
              <p className="error">{Error}</p>
              <div className="wrapper_fields">
                <input
                  type="text"
                  placeholder="Nome completo"
                  name="name"
                  onChange={(e) => onChange(e)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => onChange(e)}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  onChange={(e) => onChange(e)}
                />
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  name="passwordConfirmation"
                  onChange={(e) => onChange(e)}
                />
                <div className="wrapper_submit">
                  <div className="wrapper_checkbox">
                    <FcCheckmark onClick={() => setUseTerms(!UseTerms)}/>
                    <label className="field_checbox" htmlFor="useTerms">
                      <input
                        type="checkbox"
                        id="useTerms"
                        name="useTerms"
                        onChange={() => setUseTerms(!UseTerms)}
                      />
                    </label><label htmlFor="useTerms">Termos de uso</label>
                  </div>
                  <button type="submit">
                    <img src={ArrowLeft} alt=""/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </StyledIntroduction>
  )
}

interface RootState {
  navbar: boolean
  isLogged: boolean
}

const mapState = (state: RootState): RootState => ({
  navbar: state.navbar,
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

export default withRouter(connector(Introduction))
