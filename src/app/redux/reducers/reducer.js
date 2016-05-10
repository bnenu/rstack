import * as ActionTypes from '../constants/constants'

const appInit = {
  isSidebarOpen: true,
  token: null,
  user: {},
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
}
export const app = (state = appInit, {type, payload}) => {
  switch (type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return Object.assign({}, state, { isSidebarOpen: payload })
    case ActionTypes.SET_PAGE:
      return Object.assign({}, state, { page: payload })
    case ActionTypes.REQUEST_AUTH:
      return Object.assign({}, state, {
        isAuthenticating: true,
        statusText: null
      })
    case ActionTypes.RECEIVE_AUTH_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: payload.token,
        statusText: 'You have been successfully logged in.'
      })
    case ActionTypes.RECEIVE_AUTH_FAILURE:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        token: null,
        statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
      })
    case ActionTypes.REQUEST_LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        token: null,
        statusText: 'You have been successfully logged out.'
      })
    case ActionTypes.SET_ACCOUNT:
      return Object.assign({}, state, { user: payload })
    default:
      return state
  }
}
