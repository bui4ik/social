import * as actions from './actions'
import { axiosInstance } from 'api/axiosinstance'
import { getLoggedUserInfoFailure } from './actions'

export const getUserInfo = id => async dispatch => {
  dispatch(actions.getLoggedUserInfoRequest())
  try {
    const { data } = await axiosInstance.get(`/profile/${id}`)
    dispatch(actions.getLoggedUserInfoSuccess(data))
    console.log(data)
  } catch (e) {
    dispatch(getLoggedUserInfoFailure(e))
  }
}

export const updateUserInfo = values => async dispatch => {
  try {
    const { data } = await axiosInstance.put(`/profile/`, values)
    console.log(data)
  } catch (e) {
    dispatch(getLoggedUserInfoFailure(e))
  }
}

export const updateUserPhoto = photo => async dispatch => {
  dispatch(actions.updateLoggedUserPhotoRequest())
  try {
    const formData = new FormData()
    formData.append('image', photo[0])
    const { data } = await axiosInstance.post(`/profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    dispatch(actions.updateLoggedUserPhotoSuccess(data))
  } catch (e) {
    dispatch(actions.updateLoggedUserPhotoFailure(e))
  }
}
