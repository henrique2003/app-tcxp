import React from 'react'
import Card from './components/Card'
import { Container, HeaderTitle, Title, Subtitle } from '../../../../styles'
import { StyleThreeFeatures, Row } from './style'
import { New, User, Group } from '../../../../assets'

const ThreeFeatures: React.FC = () => {
  return (
    <StyleThreeFeatures>
      <Container>
        <HeaderTitle>
          <Title>É bem simples</Title>
          <Subtitle>passos simples para conseguir chegar ao seu destino</Subtitle>
        </HeaderTitle>
        <Row>
          <Card
            image={New}
            title="Faça seu cadastro"
            text="Cadastre-se em nossa plataforma, é estremamente fácil, você verá"
          />
          <Card
            image={User}
            title="Complete seu perfil"
            text="Não é obrigatório, mas um perfil completo passa mais confiança para outros usuários"
          />
          <Card
            image={Group}
            title="Crie novos grupos"
            text="Após criar uma conta, você poderá criar novos grupos e chamar quem você quiser"
          />
        </Row>
      </Container>
    </StyleThreeFeatures>
  )
}

export default ThreeFeatures
