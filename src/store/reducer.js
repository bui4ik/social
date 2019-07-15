import identity from 'store/identity/reducer'
import allUsers from './usersList/reducer'
import anotherUser from './User/reducer'
import loggedUser from './ownUser/reducer'

const rootReducer = {
  identity,
  allUsers,
  anotherUser,
  loggedUser,
}

export default rootReducer
