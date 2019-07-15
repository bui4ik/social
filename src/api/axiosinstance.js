import * as axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '45975240-6918-482a-9333-1ee7c047ad37',
  },
})
