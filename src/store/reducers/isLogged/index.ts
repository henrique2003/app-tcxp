import { LoggedActionType } from '../../actions/isLogged/types'

const initialState: boolean = false

export default function isLogged (state = initialState, action: LoggedActionType): boolean {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_LOGGED':
      return payload
    default:
      return state
  }
}
