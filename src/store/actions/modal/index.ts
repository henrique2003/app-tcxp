import { CHANGE_MODAL, ModalActionType, StateDefault } from './types'

export const changeModal = (payload: StateDefault): ModalActionType => {
  return {
    type: CHANGE_MODAL,
    payload
  }
}
