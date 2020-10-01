import { combineReducers } from 'redux'
import navbar from './navbar'
import modal from './modal'
import deleteAccount from './deleteAccount'
import inviteGroup from './inviteGroup'
import comfirmDenounce from './comfirmDenounce'
import isLogged from './isLogged'

export const rootReducer = combineReducers({
  navbar,
  modal,
  deleteAccount,
  inviteGroup,
  comfirmDenounce,
  isLogged
})

export type RootState = ReturnType<typeof rootReducer>
