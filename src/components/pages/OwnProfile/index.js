import React from 'react'
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import * as identitySelectors from 'store/identity/selectors'
import { getUserInfo } from 'store/ownUser/thunks'
import { connect } from 'react-redux'
import * as S from './styles'
import PhotoDownloader from './components/PhotoDownloader'
import ProfileInfo from '../../common/ProfileInfo'
import UserPhoto from './components/OwnUserPhoto'
import Contacts from '../../common/Contacts'
import * as selectors from 'store/ownUser/selectors'

class ProfilePage extends React.Component {
  state = {
    photoDownloader: false,
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.userId)
  }

  openPhotoDownloader = () => {
    this.setState({ photoDownloader: true })
  }

  closePhotoDownloader = () => {
    this.setState({ photoDownloader: false })
  }

  render() {
    const {
      id,
      fullName,
      lookingForAJobDescription,
      lookingForAJob,
      aboutMe,
      contacts,
    } = this.props
    const { photoDownloader } = this.state
    return (
      <DefaultPageTemplate>
        <S.Wrapper>
          {photoDownloader && <PhotoDownloader closePhotoDownloader={this.closePhotoDownloader} />}
          {!id ? (
            <div>Loading</div>
          ) : (
            <S.Profile>
              <S.MainInfo>
                <ProfileInfo
                  fullName={fullName}
                  lookingForAJob={lookingForAJob}
                  lookingForAJobDescription={lookingForAJobDescription}
                  aboutMe={aboutMe}
                />
                <UserPhoto openPhotoDownloader={this.openPhotoDownloader} />
              </S.MainInfo>
              <Contacts contacts={contacts}/>
            </S.Profile>
          )}
        </S.Wrapper>
      </DefaultPageTemplate>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: identitySelectors.userIdSelector(state),
    id: selectors.idSelector(state),
    fullName: selectors.fullNameSelector(state),
    lookingForAJobDescription: selectors.lookingForAJobDescriptionSelector(state),
    lookingForAJob: selectors.lookingForAJobSelector(state),
    aboutMe: selectors.aboutMeSelector(state),
    contacts: selectors.contactsSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: id => dispatch(getUserInfo(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage)
