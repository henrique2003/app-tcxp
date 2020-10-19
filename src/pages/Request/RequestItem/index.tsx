import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { Content, Image, Text, StyledRequestItem, Flex } from './style'
import { IGroupsData } from '../../Chat'

interface Props {
  id: string
  group: IGroupsData
  image: string
  name: string
  accept: (to: string, group: string) => Promise<void>
  reject: (to: string, group: string) => Promise<void>
}

const RequestItem: React.FC<Props> = ({ image, name, reject, id, group, accept }) => {
  return (
    <StyledRequestItem>
      <Flex>
        <Image url={image}></Image>
        <Content>
          <Text>Entrar no grupo {name}</Text>
          <FiCheck color="#FF6D00" onClick={async () => await accept(id, group._id)}/>
          <GrFormClose color="black" onClick={async () => await reject(id, group._id)}/>
        </Content>
      </Flex>
    </StyledRequestItem>
  )
}

export default RequestItem
