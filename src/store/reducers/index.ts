import { combineReducers } from 'redux'
import navbar from './navbar'

export const rootReducer = combineReducers({
  navbar
})

export type RootReducer = ReturnType<typeof rootReducer>
