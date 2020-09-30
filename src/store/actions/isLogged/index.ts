import { LoggedActionType, CHANGE_LOGGED, StateDefault } from './types'

export function changeLogged (payload: StateDefault): LoggedActionType {
  return {
    type: CHANGE_LOGGED,
    payload
  }
}
