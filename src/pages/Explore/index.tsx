import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BgExplore, PictureProfile } from '../../assets'
import { Container } from '../../styles'
import { DivSearch, Input, Phrase, StyledExplore, DivInput, TitlePersons, Grid } from './style'
import PersonItem from './PersonItem'
import api from '../../services/api'
import { setToken } from '../../utils'
import { toast } from 'react-toastify'
import { changeLogged } from '../../store/actions'
import { StateDefault } from '../../store/actions/isLogged/types'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { User } from '../Profile/index'

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

interface Peoples {
  data: User[]
  pagination: {
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: number | null
    nextPage: number | null
    perPage: number
  }
}

const Explore: React.FC<Props> = ({ history, changeLogged }) => {
  const [Peoples, setPeoples] = useState<Peoples>({
    data: [],
    pagination: {
      hasNextPage: false,
      hasPrevPage: false,
      prevPage: null,
      nextPage: null,
      perPage: 1
    }
  })
  const [PeoplesFiltred, setPeoplesFiltred] = useState<User[]>([])
  const [Search, setSearch] = useState<string>('')

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

    async function loadPeoples (): Promise<void> {
      try {
        const res = await api.get('/users')
        setPeoples(res.data.body)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadPeoples()
  }, [changeLogged, history])

  async function search (data: string): Promise<void> {
    try {
      const res = await api.post('/user/search', { search: data })

      setPeoplesFiltred(res.data.body)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (Search.length === 0) {
      setPeoplesFiltred([])
    }
  }, [Search])

  return (
    <StyledExplore>
      <DivSearch url={BgExplore}>
        <Container>
          <Phrase>Fasa sua pesquisa e encontre um parceiro ou parceira para  a sua próxima viagem</Phrase>
          <DivInput>
            <Input type="text" placeholder="Procurando alguém ?" onChange={(e) => setSearch(e.target.value)}/>
            <BsSearch onClick={async () => await search(Search)}/>
          </DivInput>
        </Container>
      </DivSearch>
      <Container>
        <TitlePersons>Pessoas que talvez você goste</TitlePersons>
        <Grid>
          {Peoples.data.length === 0 && PeoplesFiltred.length === 0 ? <p>Nenhuma pessoa encontrada</p>
            : PeoplesFiltred.length !== 0 ? PeoplesFiltred.map(people => (
              <PersonItem key={people._id} image={people.imageProfile?.url ?? PictureProfile} _id={people._id}/>
            )) : Peoples.data.map(people => (
              <PersonItem key={people._id} image={people.imageProfile?.url ?? PictureProfile} _id={people._id}/>
            ))}
        </Grid>
      </Container>
    </StyledExplore>
  )
}

export default withRouter(connector(Explore))
