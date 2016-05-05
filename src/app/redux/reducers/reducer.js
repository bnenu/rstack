import * as ActionTypes from '../constants/constants'

export const app = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return state
    default:
      return state
  }
}
