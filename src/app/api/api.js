import axios from 'axios'
const ROOT_URL = 'http://xx.xx.xx.xx:8080/api'

export const login = (user) => {
  return axios({
    method: 'post',
    url: ROOT_URL + '/authenticate',
    headers: {
      'Authorization': 'Bearer',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
    data: {
      "username": user.username,
      "password": user.password
    }
  })
}

export const signup = (user) => {
  return axios({
    method: 'post',
    url: ROOT_URL + '/signup',
    headers: {
      'Authorization': 'Bearer',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
    data: {
      "email": user.email,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "username": user.username,
      "password": user.password
    }
  })
}

export const getAccount = (token) => {
  return axios({
    method: 'get',
    url: `${ROOT_URL}/account`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    },
  })
}
