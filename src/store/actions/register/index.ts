import { CHANGE_REGISTER, RegisterActionType } from './types'

export const changeRegister = (payload: boolean): RegisterActionType => {
  return {
    type: CHANGE_REGISTER,
    payload
  }
}
