import { combineReducers } from 'redux'
import navbar from './navbar'
import modal from './modal'
import deleteAccount from './deleteAccount'
import inviteGroup from './inviteGroup'

export const rootReducer = combineReducers({
  navbar,
  modal,
  deleteAccount,
  inviteGroup
})

export type RootReducer = ReturnType<typeof rootReducer>
