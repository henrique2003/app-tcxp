import { CHANGE_NAVBAR, NavbarActionType, StateDefault } from './types'

export function changeNavbar (payload: StateDefault): NavbarActionType {
  return {
    type: CHANGE_NAVBAR,
    payload
  }
}
