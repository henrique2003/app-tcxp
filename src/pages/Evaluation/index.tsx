import React, { useState, useEffect } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import EvaluationItem from '../Profile/components/Evaluation/EvaluationItem'
import { Container } from '../../styles'
import {
  StyledEvaluation,
  Title,
  Grid,
  DivEvaluation,
  Subtitle,
  Form,
  Message,
  GridForm,
  Area,
  DivStar,
  Submit,
  Star
} from './style'
import { Comment, ArrowRight } from '../../assets'

const Evaluation: React.FC = () => {
  const [Eval, setEval] = useState<number>(3)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StyledEvaluation>
      <Container>
        <Title>Avaliações</Title>
        <Subtitle>10/10</Subtitle>
        <Grid>
          <DivEvaluation>
            <EvaluationItem
              content="Muito carismatico!"
              image={Comment}
              name="Rebeca Gomez"
              evaluation={5}
            />
          </DivEvaluation>
          <DivEvaluation>
            <EvaluationItem
              content="Muito carismatico!"
              image={Comment}
              name="Rebeca Gomez"
              evaluation={5}
            />
          </DivEvaluation>
          <DivEvaluation>
            <EvaluationItem
              content="Muito carismatico!"
              image={Comment}
              name="Rebeca Gomez"
              evaluation={5}
            />
          </DivEvaluation>
          <DivEvaluation>
            <EvaluationItem
              content="Muito carismatico!"
              image={Comment}
              name="Rebeca Gomez"
              evaluation={5}
            />
          </DivEvaluation>
        </Grid>
        <Form>
          <Message>Que tal fazer uma avaliação?</Message>
          <GridForm>
            <Submit type="submit">
              <img src={ArrowRight} alt="submit"/>
            </Submit>
            <Area placeholder="Escreva um comentário:"></Area>
            <DivStar>
              <Star>
                <StarRatingComponent
                  name="evaluationOne"
                  starCount={5}
                  value={Eval}
                  starColor="#FF6D00"
                  emptyStarColor="#808080"
                  onStarClick={(value) => setEval(value)}
                />
              </Star>
              <Submit type="submit">
                <img src={ArrowRight} alt="submit"/>
              </Submit>
            </DivStar>
          </GridForm>
        </Form>
      </Container>
    </StyledEvaluation>
  )
}

export default Evaluation
