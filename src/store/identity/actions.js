// action types for login
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'
export const GET_CAPTCHA = 'GET_CAPTCHA'
// login through it-kamasutra
export const signinRequest = (login, password, rememberMe, captcha) => ({
  type: SIGNIN_REQUEST,
  payload: { login, password, rememberMe, captcha },
})
export const signinSuccess = data => ({
  type: SIGNIN_SUCCESS,
  payload: { data },
})
export const signinFailure = (error, resultCode) => ({
  type: SIGNIN_FAILURE,
  payload: { error, resultCode },
})
export const getCaptcha = url => ({
  type: GET_CAPTCHA,
  payload: { url },
})
