export const CHANGE_LOGGED = 'CHANGE_LOGGED'

interface ChangeAction {
  type: typeof CHANGE_LOGGED
  payload: boolean
}

export type StateDefault = boolean

export type LoggedActionType = ChangeAction
