import React, { useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import api from '../../services/api'
import { setToken } from '../../utils'
import { StateDefault } from '../../store/actions/isLogged/types'
import { changeLogged } from '../../store/actions/isLogged/index'
import { toast } from 'react-toastify'
// import Carousel from 'react-bootstrap/Carousel'
import Carousel from 'react-multi-carousel'
import { BgWelcomeDashboard, LocationOne, LocationThree, LocationTwo, LocationFour, MostVisited as MostVisitedImage } from '../../assets'
import Location from './Location'
import { Container } from '../../styles'
import {
  StyledDashboard,
  Welcome, WelcomeTitle,
  WelcomeText,
  Title,
  DivLocation,
  MostVisited,
  MostVisitedContent
} from './style'

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

interface IUser {
  name: string
}

const Dashboard: React.FC<Props> = ({ changeLogged, history }) => {
  const [User, setUser] = useState<IUser>({
    name: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()
    async function loadUser (): Promise<void> {
      try {
        const res = await api.get('/load/user')

        setUser(res.data.body)

        changeLogged(true)
      } catch (error) {
        toast.error('Acesso negado')
        history.push('/')
      }
    }
    loadUser()
  }, [changeLogged, history])
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <StyledDashboard>
      <Welcome url={BgWelcomeDashboard}>
        <Container>
          <WelcomeTitle>Olá, {User.name}..</WelcomeTitle>
          <WelcomeText>Que tal planejar uma viagem hoje?</WelcomeText>
          <Link to='/dashboard/explorar'>Pesquisar</Link>
        </Container>
      </Welcome>
      <Container>
        <Title marginTop={90}>Locais que você vai amar</Title>
      </Container>
      <DivLocation>
        <Carousel
          responsive={responsive}
        >
          <Location
            image={LocationOne}
            name="Grécia"
            text="A Grécia é um país do sudeste da Europa com milhares de ilhas espalhadas pelos mares Egeu e Jônico. Bastante influente na antiguidade, a nação é considerada o berço da civilização ocidental."
          />
          <Location
            image={LocationTwo}
            name="Jamaica"
            text="A Jamaica é um país insular no Caribe.É conhecida como o berço da música reggae, e sua capital, Kingston, abriga um museu dedicado ao cantor Bob Marley."
          />
          <Location
            image={LocationThree}
            name="Maldivas"
            text="As Maldivas são uma nação tropical no Oceano Índico composta por 26 atóis em formato de anel, que são formados por mais de 1.000 ilhas de coral. O país é conhecido pelas praias, lagoas azuis e extensos recifes"
          />
          <Location
            image={LocationFour}
            name="Canada"
            text="O Canadá é um país norte-americano que se estende desde os EUA, no sul, até o Círculo Polar Ártico, no norte. Entre suas grandes cidades estão a gigantesca Toronto e Vancouver, que falam francês."
          />
        </Carousel>
      </DivLocation>
      <Container>
        <Title marginTop={100}>Local mais visitadono último ano</Title>
      </Container>
      <MostVisited>
        <section>
          <img src={MostVisitedImage} alt="most-visited"/>
        </section>
        <MostVisitedContent>
          <h5>França</h5>
          <p>A França, na Europa Ocidental, tem cidades medievais, aldeias alpinas e praias mediterrâneas. Paris, sua capital, é famosa pelas casas de alta costura, museus de arte clássica, como o Louvre, e monumentos como a Torre Eiffel. O país também é conhecido pelos vinhos e pela cozinha sofisticada.</p>
        </MostVisitedContent>
      </MostVisited>
    </StyledDashboard>
  )
}

export default withRouter(connector(Dashboard))
