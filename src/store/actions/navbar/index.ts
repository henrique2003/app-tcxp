import { CHANGE_NAVBAR, NavbarActionType } from './types'

export function changeNavbar (payload: boolean): NavbarActionType {
  return {
    type: CHANGE_NAVBAR,
    payload
  }
}
