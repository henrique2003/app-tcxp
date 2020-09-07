export const CHANGE_COMFIRM_DENOUNCE = 'CHANGE_COMFIRM_DENOUNCE'

export interface ChangeComfirmDenounce {
  type: typeof CHANGE_COMFIRM_DENOUNCE
  payload: boolean
}

export type StateDefault = boolean

export type ConfirmDenounceActionType = ChangeComfirmDenounce
