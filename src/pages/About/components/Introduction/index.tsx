import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AboutIntroduction } from '../../../../assets'
import { Container, StyledIntroduction, Content } from '../../../../styles'

type Props = PropsFromRedux

const IntroductionQuestions: React.FC<Props> = ({ navbar }) => {
  return (
    <StyledIntroduction image={AboutIntroduction} isNav={navbar}>
      <Container>
        <Content>
          <h3>Sobre Nós</h3>
          <h5>Afinal o que é a TCXP?</h5>
          <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de.</p>
        </Content>
      </Container>
    </StyledIntroduction>
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
