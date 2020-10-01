export const CHANGE_NAVBAR = 'CHANGE_NAVBAR'

interface ChangeAction {
  type: typeof CHANGE_NAVBAR
  payload: boolean
}

export type StateDefault = boolean

export type NavbarActionType = ChangeAction
