import { CHANGE_DELETE_ACCOUNT, StateDefault, DelAccountActionType } from './types'

export const changeDeleteAccountModal = (payload: StateDefault): DelAccountActionType => {
  return {
    type: CHANGE_DELETE_ACCOUNT,
    payload
  }
}
