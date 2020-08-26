export const CHANGE_DELETE_ACCOUNT = 'CHANGE_DELETE_ACCOUNT'

export interface ChangeDeleteAccount {
  type: typeof CHANGE_DELETE_ACCOUNT
  payload: boolean
}

export type StateDefault = boolean

export type DelAccountActionType = ChangeDeleteAccount
