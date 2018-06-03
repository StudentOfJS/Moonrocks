import { RouterAction, LocationChangeAction } from 'react-router-redux'
type ReactRouterAction = RouterAction | LocationChangeAction
import { Actions } from './reducers'

export type RootAction =
  | ReactRouterAction
  | Actions