import * as actions from './actions'
import { axiosInstance } from 'api/axiosinstance'

// login thunk
export const logIn = (email, password, rememberMe, captcha) => async dispatch => {
  dispatch(actions.signinRequest(email, password, rememberMe, captcha))
  try {
    const { data } = await axiosInstance.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha,
    })
    if (data.resultCode === 0) {
      dispatch(actions.signinSuccess(data))
    } else if (data.resultCode === 10) {
      const { data: captcha } = await axiosInstance.get('security/get-captcha-url')
      dispatch(actions.getCaptcha(captcha))
    } else if (data.resultCode === 1) {
      dispatch(actions.signinFailure(data.messages, data.resultCode))
    }
  } catch (e) {
    console.log(e)
  }
}
