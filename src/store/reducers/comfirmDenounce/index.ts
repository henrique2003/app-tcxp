import { StateDefault, ConfirmDenounceActionType } from '../../actions/confirmDenounce/types'

const initialState: StateDefault = false

export default function deleteAccount (state = initialState, action: ConfirmDenounceActionType): StateDefault {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_COMFIRM_DENOUNCE':
      return payload
    default:
      return state
  }
}
