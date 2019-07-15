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

export const idSelector = ({ anotherUser }) => anotherUser.id
export const fullNameSelector = ({ anotherUser }) => anotherUser.fullName
export const aboutMeSelector = ({ anotherUser }) => anotherUser.aboutMe
export const lookingForAJobSelector = ({ anotherUser }) => anotherUser.lookingForAJob
export const lookingForAJobDescriptionSelector = ({ anotherUser }) =>
  anotherUser.lookingForAJobDescription
export const smallPhotoSelector = ({ anotherUser }) => anotherUser.smallPhoto
export const largePhotoSelector = ({ anotherUser }) => anotherUser.largePhoto
export const contactsSelector = ({ anotherUser }) => anotherUser.contacts
export const loadingSelector = ({ anotherUser }) => anotherUser.isLoading
export const errorSelector = ({ anotherUser }) => anotherUser.error
