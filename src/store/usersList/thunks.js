import * as actions from './actions'
import { axiosInstance } from 'api/axiosinstance'

export const getAllUsers = (count, page) => async dispatch => {
  dispatch(actions.getAllUsersRequest())
  try {
    const { data } = await axiosInstance.get('/users', { params: { page, count } })
    dispatch(actions.getAllUsersSuccess(data.items, data.totalCount))
    console.log(data)
  } catch (e) {
    dispatch(actions.getAllUsersFailure(e))
  }
}

export const searchUsers = (term) => async dispatch => {
  dispatch(actions.searchUsersRequest())
  try {
    const { data } = await axiosInstance.get('/users', { params: { term } })
    console.log(data)
    dispatch(actions.searchUsersSuccess(data.items, data.totalCount))
  } catch (e) {
    dispatch(actions.searchUsersFailure(e))
  }
}

export const followUser = (id) => async dispatch => {
  dispatch(actions.followUserRequest())
  try {
    const { data } = await axiosInstance.post(`/follow/${id}`)
    dispatch(actions.followUserSuccess(id))
    console.log(data)
  } catch (e) {
    dispatch(actions.followUserFailure(e))
  }
}

export const unFollowUser = (id) => async dispatch => {
  dispatch(actions.unFollowUserRequest())
  try {
    const { data } = await axiosInstance.delete(`/follow/${id}`)
    dispatch(actions.unFollowUserSuccess(id))
    console.log(data)
  } catch (e) {
    dispatch(actions.unFollowUserFailure(e))
  }
}
