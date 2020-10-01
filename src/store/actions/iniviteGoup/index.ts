import { CHANGE_MODAL_INVITE_GROUP, StateDefault, InviteGroupActionType } from './types'

export const changeInviteGroupModal = (payload: StateDefault): InviteGroupActionType => {
  return {
    type: CHANGE_MODAL_INVITE_GROUP,
    payload
  }
}
