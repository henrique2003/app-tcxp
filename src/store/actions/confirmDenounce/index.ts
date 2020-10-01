import { CHANGE_COMFIRM_DENOUNCE, StateDefault, ConfirmDenounceActionType } from './types'

export const changeConfirmDenounceModal = (payload: StateDefault): ConfirmDenounceActionType => {
  return {
    type: CHANGE_COMFIRM_DENOUNCE,
    payload
  }
}
