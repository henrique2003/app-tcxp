import React from 'react'
import { StyledShortInfo, Flex, DivContent, Content } from './style'

const ShortInfo: React.FC = () => {
  return (
    <StyledShortInfo>
      <Flex>
        <DivContent>
          <Content>Avaliação</Content>
          <Content>8</Content>
        </DivContent>
        <DivContent>
          <Content>Viagens</Content>
          <Content>11</Content>
        </DivContent>
      </Flex>
    </StyledShortInfo>
  )
}

export default ShortInfo
