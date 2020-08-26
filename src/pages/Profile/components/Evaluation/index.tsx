import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import { Comment as ImageComment } from '../../../../assets'
import { Container } from '../../../../styles'
import { StyledEvaluation, Title, Subtitle, Grid, DivEvaluation, Flex, Image, DivComment, Comment, Name, DivImage } from './style'

const Evaluation: React.FC = () => {
  const [Evaluation, setEvaluation] = useState<number>(5)

  return (
    <StyledEvaluation>
      <Container>
        <Title>Avaliações</Title>
        <Subtitle>Últimas avaliações</Subtitle>
        <Grid>
          <DivEvaluation>
            <Flex>
              <DivImage>
                <Image image={ImageComment}></Image>
                <Name>Rebeca Gomez</Name>
              </DivImage>
              <DivComment>
                <Comment>Muito carismatico!</Comment>
                <StarRatingComponent
                  name="evaluationOne"
                  editing={false}
                  starCount={5}
                  value={Evaluation}
                  onStarClick={(value) => setEvaluation(value)}
                  starColor="#FF6D00"
                />
              </DivComment>
            </Flex>
          </DivEvaluation>
          <DivEvaluation>
            <Flex>
              <DivImage>
                <Image image={ImageComment}></Image>
                <Name>Rebeca Gomez</Name>
              </DivImage>
              <DivComment>
                <Comment>Muito carismatico!</Comment>
                <StarRatingComponent
                  name="evaluationTwo"
                  editing={false}
                  starCount={5}
                  value={Evaluation}
                  onStarClick={(value) => setEvaluation(value)}
                  starColor="#FF6D00"
                />
              </DivComment>
            </Flex>
          </DivEvaluation>
        </Grid>
      </Container>
    </StyledEvaluation>
  )
}

export default Evaluation
