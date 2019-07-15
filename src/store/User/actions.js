export const GET_USERS_INFO_REQUEST = 'GET_USERS_INFO_REQUEST'
export const GET_USERS_INFO_SUCCESS = 'GET_USERS_INFO_SUCCESS'
export const GET_USERS_INFO_FAILURE = 'GET_USERS_INFO_FAILURE'

export const getUserInfoRequest = () => ({
  type: GET_USERS_INFO_REQUEST,
})
export const getUserInfoSuccess = userInfo => ({
  type: GET_USERS_INFO_SUCCESS,
  payload: { userInfo },
})
export const getUserInfoFailure = error => ({
  type: GET_USERS_INFO_FAILURE,
  payload: { error },
})
