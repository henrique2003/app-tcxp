import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { QuestionsIntroduction } from '../../../../assets'
import { Container, StyledIntroductionQuestion, Content } from '../../../../styles'

type Props = PropsFromRedux

const IntroductionQuestions: React.FC<Props> = ({ navbar }) => {
  return (
    <StyledIntroductionQuestion image={QuestionsIntroduction} isNav={navbar}>
      <Container>
        <Content>
          <h4>Dúvidas</h4>
          <p>Ficou com dúvida sobre algo, veja abaixo algumas das dúvidas mais frequentes dentre todos que acessam a nossa plataforma. Caso você não encontre o que precisa, preencha o formulário e responderemos em breve</p>
        </Content>
      </Container>
    </StyledIntroductionQuestion>
  )
}

interface RootState {
  navbar: boolean
}

const mapState = (state: RootState): RootState => ({
  navbar: state.navbar
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(IntroductionQuestions)
