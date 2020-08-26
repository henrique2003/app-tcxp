import { StateDefault, DelAccountActionType } from '../../actions/deleteAccount/types'

const initialState: StateDefault = false

export default function deleteAccount (state = initialState, action: DelAccountActionType): StateDefault {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_DELETE_ACCOUNT':
      return payload
    default:
      return state
  }
}
