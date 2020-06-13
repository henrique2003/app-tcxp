import React, { useState } from 'react'
import Modal from 'react-modal'
import { connect, ConnectedProps } from 'react-redux'
import { Dispatch } from 'redux'
import { changeRegister } from '../../store/actions/register'
import './style.css'

type Props = PropsFromRedux

const Register: React.FC<Props> = ({ register, changeRegister }) => {
  const [ShowModal, setShowModal] = useState<string>('')

  Modal.setAppElement('#root')
  return (
    <Modal
      isOpen={register}
      onRequestClose={() => {
        setShowModal('')
        changeRegister(!register)
      }}
      overlayClassName={`Overlay ${ShowModal}`}
      className="Modal"
      closeTimeoutMS={800}
      onAfterOpen={() => setShowModal('Show')}
    >
    </Modal>
  )
}

interface RootState {
  register: boolean
}

const mapState = (state: RootState): RootState => ({
  register: state.register
})

interface DispatchProps {
  changeRegister: (payload: boolean) => void
}

const mapDispatch = (dispatch: Dispatch): DispatchProps => ({
  changeRegister: (payload) => dispatch(changeRegister(payload))
})

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Register)
