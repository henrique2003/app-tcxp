import React from 'react'
import { StyledShortInfo, Flex, DivContent, Content } from './style'

interface Props {
  evaluation: number
}

const ShortInfo: React.FC<Props> = ({ evaluation }) => {
  return (
    <StyledShortInfo>
      <Flex>
        <DivContent>
          <Content>Avaliação</Content>
          <Content>{evaluation}</Content>
        </DivContent>
        <DivContent>
          <Content>Viagens</Content>
          <Content>0</Content>
        </DivContent>
      </Flex>
    </StyledShortInfo>
  )
}

export default ShortInfo
