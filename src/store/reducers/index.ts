import { combineReducers } from 'redux'
import navbar from './navbar'
import register from './register'

export const rootReducer = combineReducers({
  navbar,
  register
})

export type RootReducer = ReturnType<typeof rootReducer>
