import React, { useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import { StyledPlaces, Title, TitleSpan, Paragrath, Row, Button, DivButton } from './style'
import PlaceItem from './PlaceItem'
import { Usa, Amsterdan, Germany, Italy, Uk, Japan, Chinese, Turky, Indonesia, Irland, SaaraDesert, Dubai, ArrowRight } from '../../assets'
import { changeLogged } from '../../store/actions'
import { StateDefault } from '../../store/actions/deleteAccount/types'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import { setToken } from '../../utils'
import api from '../../services/api'
import { toast } from 'react-toastify'

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

const Places: React.FC<Props> = ({ changeLogged, history }) => {
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
  }, [changeLogged, history])

  var places: string[] = []

  function addPlaces (place: string): void {
    places.push(place)
  }

  function removePlaces (place: string): void {
    const newPlaces: string[] = places.filter(lastPlace => {
      return lastPlace !== place
    })
    places = newPlaces
  }

  async function submitPlaces (): Promise<void> {
    try {
      if (places.length === 0) {
        toast.error('Necessário selecionar algum tópico')
      }

      await api.put('/users', { interestings: places.join(',') })

      history.push('/dashboard')
    } catch (error) {
      toast.error(error.response)
    }
  }

  return (
    <StyledPlaces>
      <Link to="/dashboard">
        <GrClose />
      </Link>
      <Title>Há algum tópicos que você tem <TitleSpan>interesse</TitleSpan>?</Title>
      <Paragrath>Escolha os tópicos que mais te agradam para colocarmos no seu perfil</Paragrath>
      <Row>
        <PlaceItem name="EUA" addPlaces={addPlaces} removePlaces={removePlaces} image={Usa}/>
        <PlaceItem name="Amsterdan" addPlaces={addPlaces} removePlaces={removePlaces} image={Amsterdan}/>
        <PlaceItem name="Amelanha" addPlaces={addPlaces} removePlaces={removePlaces} image={Germany}/>
        <PlaceItem name="Itália" addPlaces={addPlaces} removePlaces={removePlaces} image={Italy}/>
        <PlaceItem name="Reino Unido" addPlaces={addPlaces} removePlaces={removePlaces} image={Uk}/>
        <PlaceItem name="Japão" addPlaces={addPlaces} removePlaces={removePlaces} image={Japan}/>
        <PlaceItem name="China" addPlaces={addPlaces} removePlaces={removePlaces} image={Chinese}/>
        <PlaceItem name="Turquia" addPlaces={addPlaces} removePlaces={removePlaces} image={Turky}/>
        <PlaceItem name="Indonesia" addPlaces={addPlaces} removePlaces={removePlaces} image={Indonesia}/>
        <PlaceItem name="Irlanda" addPlaces={addPlaces} removePlaces={removePlaces} image={Irland}/>
        <PlaceItem name="Saara" addPlaces={addPlaces} removePlaces={removePlaces} image={SaaraDesert}/>
        <PlaceItem name="Dubai" addPlaces={addPlaces} removePlaces={removePlaces} image={Dubai}/>
      </Row>
      <DivButton>
        <Button onClick={submitPlaces}>
          <img src={ArrowRight} alt="Button"/>
        </Button>
      </DivButton>
    </StyledPlaces>
  )
}

export default withRouter(connector(Places))
