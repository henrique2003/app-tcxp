import { RegisterActionType, CHANGE_REGISTER } from '../../actions/register/types'

const initialState: boolean = false

export default function Register (state = initialState, action: RegisterActionType): boolean {
  const { payload, type } = action
  switch (type) {
    case CHANGE_REGISTER:
      return payload
    default:
      return state
  }
}
