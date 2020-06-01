import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowLeft from '../../../../assets/icons/arrow-right.png'
import Image from '../../../../assets/images/home/home_introduction.png'
import { StyledIntroduction } from './style'
import { Container } from '../../../../styles'
import { FcCheckmark } from 'react-icons/fc'

const Introduction: React.FC = () => {
  const [UseTerms, setUseTerms] = useState(false)

  return (
    <StyledIntroduction image={Image} useTerms={UseTerms}>
      <Container>
        <div className="row">
          <div className="wrapper_content">
            <h5>Querendo viajar para algum lugar mas não tem ninguém para te acompanhar?</h5>
            <p>Aqui na tcxp você conhece pessoas novas e com os mesmos interesses que você. Crie grupos de viagens e chame pessoas para fazerem parte dele.</p>
            <Link to="/sobre">Conheça mais</Link>
          </div>
          <div className="wrapper_form">
            <form>
              <div className="wrapper_title">
                <p>Cadastre-se</p>
              </div>
              <div className="wrapper_fields">
                <input
                  type="text"
                  placeholder="Nome completo"
                  name="name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                />
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  name="passwordConfirmation"
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
                  <button type="button">
                    <img src={ArrowLeft} alt=""/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </StyledIntroduction>
  )
}

export default Introduction
