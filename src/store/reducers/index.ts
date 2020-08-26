import { combineReducers } from 'redux'
import navbar from './navbar'
import modal from './modal'
import deleteAccount from './deleteAccount'

export const rootReducer = combineReducers({
  navbar,
  modal,
  deleteAccount
})

export type RootReducer = ReturnType<typeof rootReducer>
