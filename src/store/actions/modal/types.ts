export const CHANGE_MODAL = 'CHANGE_MODAL'
export const Register = 'Register'
export const Login = 'Login'

export interface Modal {
  type: typeof CHANGE_MODAL
  payload: {
    open: boolean
    component: typeof Register | typeof Login
  }
}

export interface StateDefault {
  open: boolean
  component: typeof Register | typeof Login
}

export type ModalActionType = Modal
