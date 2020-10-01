import { combineReducers } from 'redux'
import navbar from './navbar'
import modal from './modal'
import deleteAccount from './deleteAccount'
import inviteGroup from './inviteGroup'
import comfirmDenounce from './comfirmDenounce'

export const rootReducer = combineReducers({
  navbar,
  modal,
  deleteAccount,
  inviteGroup,
  comfirmDenounce
})

export type RootReducer = ReturnType<typeof rootReducer>
