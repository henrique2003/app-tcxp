import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { Content, Image, Text, StyledRequestItem, Flex } from './style'

interface Props {
  image: string
  name: string
}

const RequestItem: React.FC<Props> = ({ image, name }) => {
  return (
    <StyledRequestItem>
      <Flex>
        <Image url={image}></Image>
        <Content>
          <Text>Entrar em uma conversa com {name}</Text>
          <FiCheck color="#FF6D00"/>
          <GrFormClose color="black"/>
        </Content>
      </Flex>
    </StyledRequestItem>
  )
}

export default RequestItem
