import React, { useEffect, useState } from 'react'
import { PictureProfile } from '../../../../assets'
import EvaluationItem from './EvaluationItem'
import { Container } from '../../../../styles'
import { Avaliate } from '../../index'
import { StyledEvaluation, Title, Subtitle, Grid, NoAvaliate } from './style'

interface Props {
  avaliate: Avaliate[]
}

const Evaluation: React.FC<Props> = ({ avaliate }) => {
  const [LastAvaliates, setLastAvaliates] = useState<number>(0)

  useEffect(() => {
    setLastAvaliates(avaliate.length)
    console.log(avaliate.length)
  }, [avaliate.length])

  useEffect(() => {
    console.log(LastAvaliates)
  }, [LastAvaliates])

  return (
    <StyledEvaluation>
      <Container>
        <Title>Avaliações</Title>
        <Subtitle>Últimas avaliações</Subtitle>
        {avaliate.length === 0 && <NoAvaliate>Você ainda não tem nenhuma avaliação</NoAvaliate>}
        <Grid>
          {avaliate[LastAvaliates - 2] &&
          <EvaluationItem
            content={avaliate[LastAvaliates - 2].comment}
            image={avaliate[LastAvaliates - 2].user.imageProfile?.url ?? PictureProfile}
            name={avaliate[LastAvaliates - 2].user.name}
            evaluation={avaliate[LastAvaliates - 2].avaliate}
          />}
          {avaliate[LastAvaliates - 1] &&
          <EvaluationItem
            content={avaliate[LastAvaliates - 1].comment}
            image={avaliate[LastAvaliates - 1].user.imageProfile?.url ?? PictureProfile}
            name={avaliate[LastAvaliates - 1].user.name}
            evaluation={avaliate[LastAvaliates - 1].avaliate}
          />}
        </Grid>
      </Container>
    </StyledEvaluation>
  )
}

export default Evaluation
