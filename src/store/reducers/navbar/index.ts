import { NavbarActionType } from '../../actions/navbar/types'

const initialState: boolean = false

export default function navbar (state = initialState, action: NavbarActionType): boolean {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_NAVBAR':
      return payload
    default:
      return state
  }
}
