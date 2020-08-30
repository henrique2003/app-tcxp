export const CHANGE_MODAL_INVITE_GROUP = 'CHANGE_MODAL_INVITE_GROUP'

export interface ChangeModalInviteGroup {
  type: typeof CHANGE_MODAL_INVITE_GROUP
  payload: boolean
}

export type StateDefault = boolean

export type InviteGroupActionType = ChangeModalInviteGroup
