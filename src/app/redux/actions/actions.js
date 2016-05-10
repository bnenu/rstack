import { SET_PAGE, TOGGLE_SIDEBAR, REQUEST_AUTH, REQUEST_LOGOUT, RECEIVE_AUTH_SUCCESS, RECEIVE_AUTH_FAILURE } from '../constants/constants'
import { signup, login, getAccount } from '../../api/api'
import history from '../../router/history'

export const setPage = (current) => {
  return {
    type: SET_PAGE,
    payload: current
  }
}
export const toggleSidebar = (sidebarState) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: !sidebarState
  }
}

export const getUser = (token) => {
  const tkn = localStorage.getItem('token')
  console.log('stored token is', tkn);
  return function(dispatch) {
    return getAccount(token)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return dispatch({
            type: SET_ACCOUNT,
            payload: response.data
          })
        } else {
          let error = new Error(response.statusText)
          error.response = response
          throw error
        }
      })
      .catch(err => {
        return console.log(err);
      })
  }
}

export const loginUserSuccess = (token) => {
  localStorage.setItem('token', token);
  return {
    type: RECEIVE_AUTH_SUCCESS,
    payload: {
      token: token
    }
  }
}

export const loginUserFailure = (error) => {
  localStorage.removeItem('token');
  return {
    type: RECEIVE_AUTH_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export const loginUserRequest = () => {
  return {
    type: REQUEST_AUTH
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
      type: REQUEST_LOGOUT
  }
}

export const logoutAndRedirect = () => {
  return (dispatch, state) => {
      dispatch(logout());
      history.push('/');
  }
}

export const loginUser = (credentials, redirect) => {
  return function(dispatch) {
    dispatch(loginUserRequest());
    return login(credentials)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response
        } else {
          let error = new Error(response.statusText)
          error.response = response
          throw error
        }
      })
      .then(response => {
        try {
          //let decoded = jwtDecode(response.token);
          dispatch(loginUserSuccess(response.data.id_token));
          history.push(redirect)
        } catch (e) {
          console.log(e)
            dispatch(loginUserFailure({
              response: {
                status: 403,
                statusText: 'Invalid token'
              }
            }));
        }
      })
      .catch(err => {
        dispatch(loginUserFailure({
          response: {
            status: 'unhandled error',
            statusText: 'nok'
          }
        }));
      })
  }
}

export const signupUser = (user, redirect) => {
  return function(dispatch) {
    dispatch(loginUserRequest())
    return signup(user)
      .then((response) => {
        if (response.status === 201) {
          history.push(redirect)
        } else {
          let error = new Error(response.statusText)
          error.response = response
          throw error
        }
      })
      .catch(error => { dispatch(loginUserFailure(error)) })
  }
}
