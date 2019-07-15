// get logged user information
export const GET_LOGGED_USER_INFO_REQUEST = 'GET_LOGGED_USER_INFO_REQUEST'
export const GET_LOGGED_USER_INFO_SUCCESS = 'GET_LOGGED_USER_INFO_SUCCESS'
export const GET_LOGGED_USER_INFO_FAILURE = 'GET_LOGGED_USER_INFO_FAILURE'
// update logged user photo
export const UPDATE_LOGGED_USER_PHOTO_REQUEST = 'UPDATE_LOGGED_USER_PHOTO_REQUEST'
export const UPDATE_LOGGED_USER_PHOTO_SUCCESS = 'UPDATE_LOGGED_USER_PHOTO_SUCCESS'
export const UPDATE_LOGGED_USER_PHOTO_FAILURE = 'UPDATE_LOGGED_USER_PHOTO_FAILURE'

// get logged user information action creators
export const getLoggedUserInfoRequest = () => ({
  type: GET_LOGGED_USER_INFO_REQUEST,
})
export const getLoggedUserInfoSuccess = userInfo => ({
  type: GET_LOGGED_USER_INFO_SUCCESS,
  payload: { userInfo },
})
export const getLoggedUserInfoFailure = error => ({
  type: GET_LOGGED_USER_INFO_FAILURE,
  payload: { error },
})
// update logged user photo action creators
export const updateLoggedUserPhotoRequest = () => ({
  type: UPDATE_LOGGED_USER_PHOTO_REQUEST,
})
export const updateLoggedUserPhotoSuccess = ({ data }) => ({
  type: UPDATE_LOGGED_USER_PHOTO_SUCCESS,
  payload: { data },
})
export const updateLoggedUserPhotoFailure = error => ({
  type: UPDATE_LOGGED_USER_PHOTO_FAILURE,
  payload: { error },
})
