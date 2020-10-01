import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Container } from '../../styles'
import { Pencil } from '../../assets'
import {
  StyledCreateChat,
  Trace,
  Title,
  OrangeCircle,
  Form,
  Label,
  Input,
  TextArea,
  DivButton,
  Button
} from './style'

const CreateChat: React.FC = () => {
  return (
    <>
      <Trace></Trace>
      <StyledCreateChat>
        <Container>
          <Link to="/dashboard/chat">
            <MdKeyboardArrowLeft color="#FF6D00"/>
          </Link>
          <Title>Nova Conversa</Title>
          <Form>
            <OrangeCircle>
              <img src={Pencil} alt="Pencil"/>
            </OrangeCircle>
            <Label htmlFor="name">Nome:</Label>
            <Input id="name" name="name" placeholder="Ex: Férias no Havaí"></Input>
            <Label htmlFor="description">Descrição:</Label>
            <TextArea id="description" name="description" placeholder="Ex: Grupo para passar férias no Havaí do dia 20 a 30."></TextArea>
            <DivButton>
              <Button type="submit">Criar</Button>
            </DivButton>
          </Form>
        </Container>
      </StyledCreateChat>
    </>
  )
}

export default CreateChat
