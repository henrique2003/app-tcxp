import React from 'react'
import { Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import SocialMediaItem from './components/SocialMedia'
import { Email, Facebook, Pinterest, Instagram, BackgorundFooter } from '../../assets'
import { StyledFooter, Row, RowLinks, RowSocialMedia, TraceBottom } from './style'
import { changeModal } from '../../store/actions'
import { Register, Login, StateDefault } from '../../store/actions/modal/types'
import { Dispatch } from 'redux'

type Props = PropsFromRedux

const Footer: React.FC<Props> = ({ changeModal, modal }) => {
  const payloadModalRegister: StateDefault = {
    open: !modal.open,
    component: 'Register'
  }

  const payloadModalLogin: StateDefault = {
    open: !modal.open,
    component: 'Login'
  }
  return (
    <StyledFooter image={BackgorundFooter}>
      <Row>
        <article>
          <div className="wrapper_company">
            <h2>tcxp</h2>
            <strong>Um pouco mais sobre a nossa empresa</strong>
            <p>Nosso propósito é que a plataforma conceda ao cliente uma situação diferente do cotidiano onde ele aprenda coisas novas como culturas, línguas… Resolvendo tudo sem sair do conforto de sua casa.
            </p>
          </div>
        </article>
        <article>
          <div className="wrapper_links">
            <p>Páginas:</p>
            <RowLinks>
              <TraceBottom>
                <Link to="/">Home</Link>
              </TraceBottom>
              <TraceBottom>
                <Link to="/duvidas">Dúvidas</Link>
              </TraceBottom>
              <TraceBottom>
                <Link to="/sobre">Sobre</Link>
              </TraceBottom>
              <TraceBottom>
                <button type="button" onClick={() => changeModal(payloadModalRegister)}>Cadastro</button>
              </TraceBottom>
              <TraceBottom>
                <button type="button" onClick={() => changeModal(payloadModalLogin)}>Entrar</button>
              </TraceBottom>
            </RowLinks>
          </div>
        </article>
        <article>
          <div className="wrapper_social_media">
            <p>Nos siga nas nossas redes sociais:</p>
            <RowSocialMedia>
              <SocialMediaItem
                text="facebook/tcxp"
                icon={Facebook}
              />
              <SocialMediaItem
                text="br.pinterest.com/tcxp"
                icon={Pinterest}
              />
              <SocialMediaItem
                text="@tcxp"
                icon={Instagram}
              />
              <SocialMediaItem
                text="tcxp@gmail.com"
                icon={Email}
              />
            </RowSocialMedia>
          </div>
        </article>
      </Row>
    </StyledFooter>
  )
}

interface RootState {
  modal: {
    open: typeof Register | typeof Login
  }
}

interface DispatchProps {
  changeModal: (payload: StateDefault) => void
}

const mapState = (state: RootState): RootState => ({
  modal: state.modal
})

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeModal: (payload) => dispatch(changeModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Footer)
