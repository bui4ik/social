export const initialState = {
  id: '',
  fullName: '',
  aboutMe: '',
  lookingForAJob: '',
  lookingForAJobDescription: '',
  smallPhoto: '',
  largePhoto: '',
  contacts: '',
  isLoading: false,
  error: '',
}

export const idSelector = ({ loggedUser }) => loggedUser.id
export const fullNameSelector = ({ loggedUser }) => loggedUser.fullName
export const aboutMeSelector = ({ loggedUser }) => loggedUser.aboutMe
export const lookingForAJobSelector = ({ loggedUser }) => loggedUser.lookingForAJob
export const lookingForAJobDescriptionSelector = ({ loggedUser }) =>
  loggedUser.lookingForAJobDescription
export const smallPhotoSelector = ({ loggedUser }) => loggedUser.smallPhoto
export const largePhotoSelector = ({ loggedUser }) => loggedUser.largePhoto
export const contactsSelector = ({ loggedUser }) => loggedUser.contacts
export const loadingSelector = ({ loggedUser }) => loggedUser.isLoading
export const errorSelector = ({ loggedUser }) => loggedUser.error
