import React from 'react'
import { Comment as ImageComment } from '../../../../assets'
import EvaluationItem from './EvaluationItem'
import { Container } from '../../../../styles'
import { StyledEvaluation, Title, Subtitle, Grid } from './style'

const Evaluation: React.FC = () => {
  return (
    <StyledEvaluation>
      <Container>
        <Title>Avaliações</Title>
        <Subtitle>Últimas avaliações</Subtitle>
        <Grid>
          <EvaluationItem
            content="Muito carismatico!"
            image={ImageComment}
            name="Rebeca Gomez"
            evaluation={5}
          />
          <EvaluationItem
            content="Muito carismatico!"
            image={ImageComment}
            name="Rebeca Gomez"
            evaluation={5}
          />
        </Grid>
      </Container>
    </StyledEvaluation>
  )
}

export default Evaluation
