import * as actions from './actions'
import { axiosInstance } from 'api/axiosinstance'
import { getUserInfoFailure } from './actions'

export const getUserInfo = id => async dispatch => {
  dispatch(actions.getUserInfoRequest())
  try {
    const { data } = await axiosInstance.get(`/profile/${id}`)
    dispatch(actions.getUserInfoSuccess(data))
    console.log(data)
  } catch (e) {
    dispatch(getUserInfoFailure(e))
  }
}
