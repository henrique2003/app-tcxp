import React, { useState, useEffect } from 'react'
import { CgMathPlus } from 'react-icons/cg'
import { RiMenu5Fill } from 'react-icons/ri'
import { PictureGroup, Send } from '../../assets'
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

export interface IGroupsData {
  _id: string
  title: string
  description: string
  image?: {
    name: string
    size: number
    key: string
    url: string
  }
  creator: User
  messages?: Messages[]
  administrators?: User[]
  members?: User[]
}

interface Messages {
  _id: string
  user: User
  content: string
  inviteDate: string
}

export interface IGroups {
  creatorGroup: IGroupsData[]
  adminGroup: IGroupsData[]
  memberGroup: IGroupsData[]
}

const Chat: React.FC<Props> = ({ changeLogged, history }) => {
  const [User, setUser] = useState<User>()
  const [GroupData, setGroupData] = useState<IGroups>()
  const [SideOpen, setSideOpen] = useState<boolean>(false)
  const [GroupsLength, setGroupsLength] = useState<number>(0)
  const [InitialDisplay, setInitialDisplay] = useState<boolean>(true)
  const [Message, setMessage] = useState<string>('')
  const [ActiveGroup, setActiveGroup] = useState<IGroupsData>({
    _id: '',
    title: '',
    description: '',
    creator: {
      _id: '',
      name: '',
      email: '',
      totalAvaliate: 0
    },
    administrators: [],
    members: [],
    messages: []
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()

    async function load (): Promise<void> {
      try {
        const res = await api.get('/load/user')

        setUser(res.data.body)
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
  }, [changeLogged, history])

  async function showGroup (id: string): Promise<void> {
    try {
      const res = await api.get(`/group/${id}`)

      setActiveGroup(res.data.body)
      setInitialDisplay(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  function showMembers (creator: string, administrator: User[], members: User[]): string {
    const adminName: string[] = administrator.map(admin => {
      return admin.name
    })

    const memberName: string[] = members.map(member => {
      return member.name
    })

    const admin = adminName.join(', ')
    const member = memberName.join(', ')

    let showAdmin = ''
    if (admin) {
      showAdmin = `, ${admin}`
    }

    let showMember = ''
    if (member) {
      showMember = `, ${member}`
    }

    return creator + showAdmin + showMember
  }

  async function sendMessage (): Promise<void | null> {
    try {
      if (!Message) {
        toast.error('Campo em branco')
        return null
      }

      const res = await api.put(`/group/message/new/${ActiveGroup._id}`, { message: Message })

      setMessage('')
      setActiveGroup({ ...ActiveGroup, messages: res.data.body.messages })
    } catch (error) {
      console.log(error.message)
    }
  }

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
              image={group.image?.url ?? PictureGroup}
              onClick={async () => {
                setSideOpen(!SideOpen)
                await showGroup(group._id)
              }}
            />
          ))}
          {GroupData?.adminGroup.map(group => (
            <GroupItem
              key={group._id}
              name={group.title}
              role="Administrador"
              lastMessage={group.messages && group.messages[group.messages.length - 1] ? editDate(group.messages[group.messages.length - 1].inviteDate) : ''}
              image={group.image?.url ?? PictureGroup}
              onClick={async () => {
                setSideOpen(!SideOpen)
                await showGroup(group._id)
              }}
            />
          ))}
          {GroupData?.memberGroup.map(group => (
            <GroupItem
              key={group._id}
              name={group.title}
              role="Administrador"
              lastMessage={group.messages && group.messages[group.messages.length - 1] ? editDate(group.messages[group.messages.length - 1].inviteDate) : ''}
              image={group.image?.url ?? PictureGroup}
              onClick={async () => {
                setSideOpen(!SideOpen)
                await showGroup(group._id)
              }}
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
          <HeaderGroup ifDisplay={InitialDisplay}>
            <Link to={`/dashboard/chat/editar/${ActiveGroup._id}`}>
              <DivInfo>
                <Flex>
                  <ImageProfileGroup url={ActiveGroup.image?.url ?? PictureGroup}></ImageProfileGroup>
                  <DivContent>
                    <TitleGroup type="text" value={ActiveGroup.title} onChange={() => false}/>
                    <MembersGroup
                      type="text"
                      value={showMembers(ActiveGroup.creator.name, ActiveGroup.administrators ?? [], ActiveGroup.members ?? [])}
                      onChange={() => false}/>
                  </DivContent>
                </Flex>
              </DivInfo>
            </Link>
          </HeaderGroup>
          <DivMessages ifDisplay={InitialDisplay}>
            {ActiveGroup.messages?.map(message => {
              let id = ''

              if (typeof message.user === 'string') {
                id = message.user
              } else {
                id = message.user._id
              }

              if (id === User?._id) {
                return (
                  <MyMessage key={message._id} message={message.content} time="12:00"/>
                )
              } else {
                return (
                  <YourMessage key={message._id} message={message.content} messagePerson={message.user.name} time="14:00"/>
                )
              }
            })}
          </DivMessages>
        </Padding>
        <DivInputSendMessage ifDisplay={InitialDisplay}>
          <DivSendMessage>
            <InputSendMessage placeholder="Digite aqui..." onChange={e => setMessage(e.target.value)} value={Message}>
            </InputSendMessage>
            <SendImage src={Send} alt="Send" onClick={async () => await sendMessage()}/>
          </DivSendMessage>
        </DivInputSendMessage>
      </Messages>
    </StyledChat>
  )
}

export default withRouter(connector(Chat))
