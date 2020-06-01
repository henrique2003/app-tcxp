import React from 'react'

import Card from './components/Card'

import { StyledMostTravel, Row } from './style'
import { Container } from '../../../../styles'

import India from '../../../../assets/images/home/cards/india.png'
import Paris from '../../../../assets/images/home/cards/paris.png'
import Russia from '../../../../assets/images/home/cards/russia.png'
import NewYork from '../../../../assets/images/home/cards/newyork.png'
import Snatorini from '../../../../assets/images/home/cards/santorini.png'

const MostTravel: React.FC = () => {
  return (
    <StyledMostTravel>
      <Container>
        <div className="most_travel_header">
          <h3>Lugares mais visitados</h3>
          <p>Pesquisas recentes montram que estes são os lugares onde as pessoas mais visitam no mundo inteiro.</p>
        </div>
        <div className="most_travel_body">
          <Row>
            <Card
              title="Estados Unidos - Nova York"
              description="Lorem bla bla bla ipsum dolor set put ammet,Lorem bla bla bla."
              image={NewYork}
            />
            <Card
              title="França - Paris"
              description="Lorem bla bla bla ipsum dolor set put ammet,Lorem bla bla bla."
              image={Paris}
            />
            <Card
              title="Índia - Nova Delhi"
              description="Lorem bla bla bla ipsum dolor set put ammet,Lorem bla bla bla ipsum dolor set put ammet"
              image={India}
            />
            <Card
              title="Moskva - Russia"
              description="Lorem bla bla bla ipsum dolor set put ammet,Lorem bla bla bla."
              image={Russia}
            />
            <Card
              title="Grécia - Santorini"
              description="Lorem bla bla bla ipsum dolor set put ammet,Lorem bla bla bla."
              image={Snatorini}
            />
          </Row>
        </div>
      </Container>
    </StyledMostTravel>
  )
}

export default MostTravel
