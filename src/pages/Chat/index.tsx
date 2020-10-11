import React, { useState, useEffect } from 'react'
import { CgMathPlus } from 'react-icons/cg'
import { RiMenu5Fill } from 'react-icons/ri'
import { PictureProfile, PictureGroup, Send } from '../../assets'
import { setToken, editDate } from '../../utils'
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
import api from '../../services/api'
import { toast } from 'react-toastify'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { changeLogged } from '../../store/actions'
import { StateDefault } from '../../store/actions/deleteAccount/types'
import { User } from '../Profile'

interface RootState {
  isLogged: boolean
}

const mapState = (state: RootState): RootState => ({
  isLogged: state.isLogged
})

interface DispatchProps {
  changeLogged: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeLogged: (payload) => dispatch(changeLogged(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & RouteComponentProps<any>

interface IGroupsData {
  _id: string
  title: string
  description: string
  image: {
    name: string
    size: number
    key: string
    url: string
  }
  messages?: Messages[]
  creator?: User[] | string
  administrators?: User[] | string
  members?: User[] | string
}

interface Messages {
  _id: string
  user: User | string
  content: string
  inviteDate: string
}

interface IGroups {
  creatorGroup: IGroupsData[]
  adminGroup: IGroupsData[]
  memberGroup: IGroupsData[]
}

const Chat: React.FC<Props> = ({ changeLogged, history }) => {
  const [GroupData, setGroupData] = useState<IGroups>()
  const [SideOpen, setSideOpen] = useState<boolean>(false)
  const [GroupsLength, setGroupsLength] = useState<number>(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()

    async function load (): Promise<void> {
      try {
        await api.get('/load/user')

        changeLogged(true)
      } catch (error) {
        toast.error('Acesso negado')
        history.push('/')
      }
    }
    load()

    async function loadGroups (): Promise<void> {
      try {
        const res = await api.get('/groups/mine')

        setGroupData(res.data.body)

        let groupLength = 0
        if (res.data.body?.creatorGroup) {
          groupLength = res.data.body?.creatorGroup.length
        }
        if (res.data.body?.adminGroup) {
          groupLength += res.data.body?.adminGroup.length as number
        }
        if (res.data.body?.memberGroup) {
          groupLength += res.data.body?.memberGroup.length as number
        }

        setGroupsLength(groupLength)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadGroups()
  }, [])

  return (
    <StyledChat>
      <DivGroup open={SideOpen}>
        <Groups length={GroupsLength}>
          {GroupData?.creatorGroup.map(group => (
            <GroupItem
              key={group._id}
              name={group.title}
              role="Administrador"
              lastMessage={group.messages && group.messages[group.messages.length - 1] ? editDate(group.messages[group.messages.length - 1].inviteDate) : ''}
              image={PictureProfile}
            />
          ))}
          {GroupData?.adminGroup.map(group => (
            <GroupItem
              key={group._id}
              name={group.title}
              role="Administrador"
              lastMessage={group.messages && group.messages[group.messages.length - 1] ? editDate(group.messages[group.messages.length - 1].inviteDate) : ''}
              image={PictureProfile}
            />
          ))}
          {GroupData?.memberGroup.map(group => (
            <GroupItem
              key={group._id}
              name={group.title}
              role="Administrador"
              lastMessage={group.messages && group.messages[group.messages.length - 1] ? editDate(group.messages[group.messages.length - 1].inviteDate) : ''}
              image={PictureProfile}
            />
          ))}
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
                    <TitleGroup type="text" value="Viagem de Aniversário" onChange={() => false}/>
                    <MembersGroup type="text" value="Você, Bianca de Oliveira, Enzo Fernandes" onChange={() => false}/>
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

export default withRouter(connector(Chat))
