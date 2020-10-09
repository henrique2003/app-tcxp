import React, { useState, useEffect, FormEvent } from 'react'
import StarRatingComponent from 'react-star-rating-component'
import EvaluationItem from '../Profile/components/Evaluation/EvaluationItem'
import { Container } from '../../styles'
import {
  StyledEvaluation,
  Title,
  Grid,
  DivEvaluation,
  Subtitle,
  Form,
  Message,
  GridForm,
  Area,
  DivStar,
  Submit,
  Star
} from './style'
import { PictureProfile, ArrowRight } from '../../assets'
import { changeLogged } from '../../store/actions'
import { StateDefault } from '../../store/actions/confirmDenounce/types'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { User } from '../Profile/index'
import { setToken } from '../../utils'

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

const Evaluation: React.FC<Props> = ({ history, changeLogged, match }) => {
  const [User, setUser] = useState<User>({
    _id: '',
    name: '',
    email: '',
    totalAvaliate: 0,
    avaliate: []
  })
  const [Eval, setEval] = useState<number>(3)
  const [Comment, setComment] = useState<string>('')

  useEffect(() => {
    window.scrollTo(0, 0)
    setToken()
    async function load (): Promise<void> {
      try {
        await api.get('/load/user')
        changeLogged(true)
      } catch (error) {
        toast.error('Acesse negado')
        history.push('/')
      }
    }
    load()

    async function loadPeople (): Promise<void> {
      try {
        const res = await api.get(`/user/${match.params.id as string}`)
        setUser(res.data.body)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadPeople()
  }, [history, changeLogged, match.params.id])

  // Register evaluation
  async function onSubmit (e: FormEvent): Promise<void | null> {
    try {
      e.preventDefault()

      if (!Comment) {
        toast.error('Campo comentário em branco')
        return null
      }

      const res = await api.put(`/users/avaliate/${match.params.id as string}`, { avaliate: Eval * 2, comment: Comment })

      setUser(res.data.body)
      toast.success('Avaliação realizada com sucesso')
      history.push(`/dashboard/perfil/${match.params.id as string}`)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <StyledEvaluation>
      <Container>
        <Title>Avaliações</Title>
        <Subtitle>{User.totalAvaliate ? User.totalAvaliate : 0}/10</Subtitle>
        {User.avaliate?.length === 0 && <p className="not_found">Usuário ainda não tem nenhuma avaliação</p>}
        <Grid>
          {User.avaliate?.length !== 0 && User.avaliate?.map(evaluation => (
            <DivEvaluation key={evaluation._id}>
              <EvaluationItem
                content={evaluation.comment}
                image={evaluation.user.imageProfile?.url ?? PictureProfile}
                name={evaluation.user.name}
                evaluation={evaluation.avaliate}
              />
            </DivEvaluation>
          ))}
        </Grid>
        <Form onSubmit={async e => await onSubmit(e)}>
          <Message>Que tal fazer uma avaliação?</Message>
          <GridForm>
            <Submit type="submit">
              <img src={ArrowRight} alt="submit"/>
            </Submit>
            <Area placeholder="Escreva um comentário:" onChange={e => setComment(e.target.value)}></Area>
            <DivStar>
              <Star>
                <StarRatingComponent
                  name="evaluationOne"
                  starCount={5}
                  value={Eval}
                  starColor="#FF6D00"
                  emptyStarColor="#808080"
                  onStarClick={(value) => setEval(value)}
                />
              </Star>
              <Submit type="submit">
                <img src={ArrowRight} alt="submit"/>
              </Submit>
            </DivStar>
          </GridForm>
        </Form>
      </Container>
    </StyledEvaluation>
  )
}

export default withRouter(connector(Evaluation))
