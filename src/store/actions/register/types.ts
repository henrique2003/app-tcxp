export const CHANGE_REGISTER = 'CHANGE_REGISTER'

interface Register {
  type: typeof CHANGE_REGISTER
  payload: boolean
}

export type RegisterActionType = Register
