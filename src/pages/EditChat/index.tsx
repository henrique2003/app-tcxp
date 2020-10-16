import React, { useState, useEffect } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Pencil as PencilImage, PictureGroup } from '../../assets'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { BsPlus } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import MemberItem from './MemberItem'
import { StateDefault } from '../../store/actions/isLogged/types'
import { changeLogged } from '../../store/actions'
import {
  StyledEditChat,
  Trace,
  DivTitle,
  Edit,
  Pencil,
  Title,
  Flex,
  DivImage,
  Label,
  TextArea,
  DivInfo,
  DivArea,
  DivImageHover,
  Members,
  MemberTitle,
  DivOutGroup,
  ButtonOutGroup
} from './style'
import { Dispatch } from 'redux'
import { ConnectedProps, connect } from 'react-redux'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { setToken } from '../../utils'
import { IGroupsData } from '../Chat/index'
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

type Props = PropsFromRedux & RouteComponentProps<any> & {
  match: {
    params: {
      id: string
    }
  }
}

const EditChat: React.FC<Props> = ({ changeLogged, history, match }) => {
  const [CanEdit, setCanEdit] = useState<boolean>(false)
  const [User, setUser] = useState<User>()
  const [Group, setGroup] = useState<IGroupsData>({
    _id: '',
    title: '',
    description: '',
    creator: {
      _id: '',
      email: '',
      name: '',
      totalAvaliate: 0
    },
    image: {
      url: '',
      key: '',
      name: '',
      size: 0
    }
  })
  const [Role, setRole] = useState<number>(3)

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()

    async function load (): Promise<void> {
      try {
        const res = await api.get('/load/user')

        setUser(res.data.body)
        changeLogged(true)
      } catch (error) {
        history.push('/')
        toast.error('Acesso negado')
      }
    }
    load()

    async function loadGroup (): Promise<void> {
      try {
        const res = await api.get(`/group/${match.params.id as string}`)

        setGroup(res.data.body)
      } catch (error) {
        history.push('/dashboard/chat')
        toast.error('Grupo não encontrado')
      }
    }
    loadGroup()
  }, [changeLogged, history])

  useEffect(() => {
    const admin = Group.administrators?.map(admin => {
      if (admin._id === User?._id) {
        return true
      } else {
        return false
      }
    })

    if (Group.creator._id === User?._id) {
      return setRole(1)
    } else if (admin) {
      return setRole(2)
    } else {
      return setRole(3)
    }
  }, [Group.administrators, Group.creator, User])

  async function updateGroup (): Promise<void> {
    try {
      console.log(Group)
      const res = await api.put(`/groups/${match.params.id as string}`, Group)

      setGroup(res.data.body)
      toast.success('Alterado com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
    }
  }

  async function updateImage (file: File): Promise<void> {
    try {
      const data = new FormData()
      data.append('file', file)

      const res = await api.put(`/groups/${match.params.id as string}`, data)

      setGroup(res.data.body)
    } catch (error) {
      toast.error('Imagem inválida')
    }
  }

  async function logoutGroup (): Promise<void> {
    try {
      await api.delete(`/groups/logout/${match.params.id as string}`)

      history.push('/dashboard/chat')
      toast.success('Saiu com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
      toast.error('Erro ao sair do grupo')
    }
  }

  async function destroyGroup (): Promise<void> {
    try {
      await api.delete(`/groups/${match.params.id as string}`)

      history.push('/dashboard/chat')
      toast.success('Apagado com sucesso')
    } catch (error) {
      if (error.response.data.body) {
        toast.error(error.response.data.body)
      }
      toast.error('Erro ao apagar do grupo')
    }
  }

  return (
    <>
      <Trace></Trace>
      <StyledEditChat>
        <Link to="/dashboard/chat">
          <MdKeyboardArrowLeft color="#FF6D00"/>
        </Link>
        <DivTitle>
          {Role !== 3 && (
            <Edit type="button" changeEdit={CanEdit}>
              <Pencil src={PencilImage} alt="Profile" changeEdit={CanEdit} onClick={() => setCanEdit(!CanEdit)}/>
              <FaCheck onClick={async () => {
                setCanEdit(!CanEdit)
                await updateGroup()
              }}/>
            </Edit>
          )}
          <Title
            value={Group.title}
            changed={!CanEdit}
            disabled={!CanEdit}
            onChange={(e) => setGroup({ ...Group, title: e.target.value })}
            lengthName={Group.title.length}
          />
        </DivTitle>
        <DivInfo>
          <Flex>
            <DivImage url={Group.image?.url ?? PictureGroup}>
              {Role !== 3 && (
                <DivImageHover htmlFor="image_profile">
                  <BsPlus color="white"/>
                </DivImageHover>
              )}
              <input
                type="file"
                name="image_profile"
                id="image_profile"
                onChange={(e) => e.target.files && updateImage(e.target.files[0])}
              />
            </DivImage>
            <DivArea>
              <Label>Descrição</Label>
              <TextArea
                disabled={!CanEdit}
                value={Group.description}
                onChange={(e) => setGroup({ ...Group, description: e.target.value })}
              ></TextArea>
            </DivArea>
          </Flex>
          <Members>
            <MemberTitle>Membros</MemberTitle>
            {Group.creator && <MemberItem
              user={Group.creator}
              role={1}
              showMore={Role === 1 ? 'no' : Role === 2 ? 'yes' : 'no'} />}
            {Group.administrators?.length !== 0 &&
            Group.administrators &&
            Group.administrators.map(admin => (
              <MemberItem
                key={admin._id}
                user={admin}
                role={2}
                showMore={Role === 2 ? 'no' : Role === 2 ? 'yes' : 'no'} />
            ))}
            {Group.members?.length !== 0 &&
            Group.members &&
            Group.members.map(member => (
              <MemberItem
                key={member._id}
                user={member}
                role={1}
                showMore='no'/>
            ))}
          </Members>
        </DivInfo>
        <DivOutGroup>
          {Role !== 1 && (
            <ButtonOutGroup onClick={async () => await logoutGroup()}>Sair do grupo</ButtonOutGroup>
          )}
          {Role === 1 && (
            <ButtonOutGroup onClick={async () => await destroyGroup()}>Apagar grupo</ButtonOutGroup>
          )}
        </DivOutGroup>
      </StyledEditChat>
    </>
  )
}

export default withRouter(connector(EditChat))
