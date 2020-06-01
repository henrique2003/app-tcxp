import React from 'react'
import { StyledMostTravel } from './style'
import { Container } from '../../../../styles'

const MostTravel: React.FC = () => {
  return (
    <StyledMostTravel>
      <Container>
        <div className="most_travel_header">
          <h3>Lugares mais visitados</h3>
          <p>Pesquisas recentes montram que estes são os lugares onde as pessoas mais visitam no mundo inteiro.</p>
        </div>
        <div className="most_travel_body">

        </div>
      </Container>
    </StyledMostTravel>
  )
}

export default MostTravel
