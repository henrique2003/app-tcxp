import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeDeleteAccountModal } from '../../../../store/actions'
import { StateDefault } from '../../../../store/actions/deleteAccount/types'
import { Container } from '../../../../styles'
import { StyledDangerZone, Title, Form, Aks, Line, Message, Button } from './style'

interface RootState {
  deleteAccount: boolean
}

const mapState = (state: RootState): RootState => ({
  deleteAccount: state.deleteAccount
})

interface DispatchProps {
  changeDeleteAccountModal: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeDeleteAccountModal: (payload) => dispatch(changeDeleteAccountModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const DangerZone: React.FC<Props> = ({ changeDeleteAccountModal }) => {
  return (
    <StyledDangerZone>
      <Container>
        <Title>Área de risco</Title>
        <Form>
          <Aks>Apagar está conta?</Aks>
          <Line></Line>
          <Message>Cuidado, esta ação é irrevercível</Message>
          <Button type="button" onClick={() => changeDeleteAccountModal(true)}>Apagar conta</Button>
        </Form>
      </Container>
    </StyledDangerZone>
  )
}

export default connector(DangerZone)
