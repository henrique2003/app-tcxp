import React, { FormEvent, useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { changeConfirmDenounceModal } from '../../store/actions'
import { StateDefault } from '../../store/actions/confirmDenounce/types'
import { BadFace } from '../../assets'
import {
  DenounceForm,
  Button, Header,
  PhraseOption,
  ImageFace,
  TextArea,
  Title,
  Label,
  Trace,
  Email
} from './style'

interface RootState {
  comfirmDenounce: boolean
}

const mapState = (state: RootState): RootState => ({
  comfirmDenounce: state.comfirmDenounce
})

interface DispatchProps {
  changeConfirmDenounceModal: (payload: StateDefault) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeConfirmDenounceModal: (payload) =>
    dispatch(changeConfirmDenounceModal(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const Denounce: React.FC<Props> = ({ changeConfirmDenounceModal, comfirmDenounce: open }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function onSubmit (e: FormEvent): void {
    e.preventDefault()
    changeConfirmDenounceModal(!open)
  }
  return (
    <>
      <Trace></Trace>
      <DenounceForm onSubmit={(e) => onSubmit(e)}>
        <Header>
          <ImageFace src={BadFace} alt="bad_face"/>
          <Title>Conte-nos o que aconteceu para tomarmos as devidas providências <span>!</span></Title>
        </Header>
        <Label htmlFor="denounce">Deixe seu relato aqui:</Label>
        <TextArea id="denounce" placeholder="Mensagem:"></TextArea>
        <Button type="submit">Enviar</Button>
        <PhraseOption>Ou se preferir entre em contato pelo e-mail</PhraseOption>
        <Email>XXXXX@gmailcom.br</Email>
      </DenounceForm>
    </>
  )
}

export default connector(Denounce)
