import React from 'react'
import Card from './components/Card'
import { StyledKnow, Row } from './style'
import { Container, Title } from '../../../../styles'
import { Purpose, Vision, Values } from '../../../../assets'

const Know: React.FC = () => {
  return (
    <StyledKnow>
      <Container>
        <Title>Conheça-nos melhor</Title>
        <Row>
          <Card
            title="Propósito"
            image={Purpose}
            content="Nossa missão é fazer com que nossos usuários conheçam novas pessoas que buscam viajar para o mesmo destino, assim tendo novas e extraordinárias experiências."
          />
          <Card
            title="Ambição"
            image={Vision}
            content="Queremos ser reconhecidos como uma empresa que junta pessoas de mesmos interesses e criar memórias únicas e eternas na vida dos usuários."
          />
          <Card
            title="Valores"
            image={Values}
            content="Temos como princípios a confiança com a nossa plataforma,a praticidade e o conforto.
            O nosso objetivo é que o usuário queira ter essa experiência cada vez mais."
          />
        </Row>
      </Container>
    </StyledKnow>
  )
}

export default Know
