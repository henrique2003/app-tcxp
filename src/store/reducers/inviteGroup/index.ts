import { StateDefault, InviteGroupActionType } from '../../actions/iniviteGoup/types'

const initialState: StateDefault = false

export default function iniviteGroup (state = initialState, action: InviteGroupActionType): StateDefault {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_MODAL_INVITE_GROUP':
      return payload
    default:
      return state
  }
}
