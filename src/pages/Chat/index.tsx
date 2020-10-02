import React, { useState, useEffect } from 'react'
import { CgMathPlus } from 'react-icons/cg'
import { RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { PictureProfile, PictureGroup, Send } from '../../assets'
import { GroupItem, YourMessage, MyMessage } from './components'
import {
  Groups,
  Messages,
  StyledChat,
  DivGroup,
  MoreGroup,
  HeaderGroup,
  Flex,
  ImageProfileGroup,
  DivInfo,
  DivContent,
  TitleGroup,
  MembersGroup,
  DivMessages,
  DivInputSendMessage,
  InputSendMessage,
  DivSendMessage,
  Padding,
  SendImage
} from './style'

const Chat: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [SideOpen, setSideOpen] = useState<boolean>(false)

  return (
    <StyledChat>
      <DivGroup open={SideOpen}>
        <Groups length={1}>
          <GroupItem
            name="Cleyton"
            role="Administrador"
            lastMessage="17/02/2020"
            image={PictureProfile}
          />
        </Groups>
        <MoreGroup>
          <Link to="/dashboard/chat/criar">
            <CgMathPlus />
          </Link>
        </MoreGroup>
      </DivGroup>
      <Messages>
        <RiMenu5Fill color="#FF6D00" onClick={() => setSideOpen(!SideOpen)}/>
        <Padding>
          <HeaderGroup>
            <Link to={`/dashboard/chat/editar/${'1232'}`}>
              <DivInfo>
                <Flex>
                  <ImageProfileGroup url={PictureGroup}></ImageProfileGroup>
                  <DivContent>
                    <TitleGroup type="text" value="Viagem de Aniversário" />
                    <MembersGroup type="text" value="Você, Bianca de Oliveira, Enzo Fernandes" />
                  </DivContent>
                </Flex>
              </DivInfo>
            </Link>
          </HeaderGroup>
          <DivMessages>
            <YourMessage message="Podemos ir em junho ?" messagePerson="Bianca de Oliveira" time="14:00"/>
            <MyMessage message="Podemos ir" time="12:00"/>
            <YourMessage message="Podemos ir junho para não nos perdermos no meio de todo mundo la na festa que tem sezta feira ?" messagePerson="Bianca de Oliveira" time="14:01"/>
            <YourMessage message="Podemos ir junho para não nos perdermos no meio de todo mundo la na festa que tem sezta feira ?" messagePerson="Bianca de Oliveira" time="14:01"/>
            <MyMessage message="Podemos ir" time="12:00"/>
          </DivMessages>
        </Padding>
        <DivInputSendMessage>
          <DivSendMessage>
            <InputSendMessage placeholder="Digite aqui...">
            </InputSendMessage>
            <SendImage src={Send} alt="Send"/>
          </DivSendMessage>
        </DivInputSendMessage>
      </Messages>
    </StyledChat>
  )
}

export default Chat
