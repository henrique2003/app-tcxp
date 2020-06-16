import React from 'react'
import { Link } from 'react-router-dom'
import { StyledFooter, Row, RowLinks, RowSocialMedia } from './style'
import Meedia from './components/SocialMedia'
import { Email, Facebook, Pinterest, Instagram } from '../../assets'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
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
              <div className="links">
                <Link to="/">Home</Link>
                <Link to="/perguntas">Dúvidas</Link>
                <Link to="/sobre">Sobre</Link>
                <button type="button">Cadastro</button>
                <button type="button">Entrar</button>
              </div>
            </RowLinks>
          </div>
        </article>
        <article>
          <div className="wrapper_social_media">
            <RowSocialMedia>
              <p>Nos siga nas nossas redes sociais:</p>
              <div className="social_medias">
                <Meedia
                  text="facebook/tcxp"
                  icon={Facebook}
                />
                <Meedia
                  text="br.pinterest.com/tcxp"
                  icon={Pinterest}
                />
                <Meedia
                  text="@tcxp"
                  icon={Instagram}
                />
                <Meedia
                  text="tcxp@gmail.com"
                  icon={Email}
                />
              </div>
            </RowSocialMedia>
          </div>
        </article>
      </Row>
    </StyledFooter>
  )
}

export default Footer
