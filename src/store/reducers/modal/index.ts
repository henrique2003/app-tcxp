import { ModalActionType, CHANGE_MODAL, StateDefault, Register } from '../../actions/modal/types'

const initialState: StateDefault = {
  open: false,
  component: Register
}

export default function Modal (state = initialState, action: ModalActionType): StateDefault {
  const { payload, type } = action
  switch (type) {
    case CHANGE_MODAL:
      return payload
    default:
      return state
  }
}
