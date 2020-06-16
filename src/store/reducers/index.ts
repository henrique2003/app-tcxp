import { combineReducers } from 'redux'
import navbar from './navbar'
import modal from './modal'

export const rootReducer = combineReducers({
  navbar,
  modal
})

export type RootReducer = ReturnType<typeof rootReducer>
