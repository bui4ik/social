import React from 'react'
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import { getUserInfo } from 'store/User/thunks'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as S from './styles'
import AnotherUserPhoto from './components/UserPhoto'
import * as selectors from 'store/User/selectors'
import ProfileInfo from 'components/common/ProfileInfo'
import Contacts from 'components/common/Contacts'

class OtherUserProfilePage extends React.Component {
  componentDidMount() {
    debugger;
    this.props.getUserInfo(this.props.match.params.id)
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
    return (
      <DefaultPageTemplate>
        <S.Wrapper>
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
                <AnotherUserPhoto />
              </S.MainInfo>
              <Contacts contacts={contacts} />
            </S.Profile>
          )}
        </S.Wrapper>
      </DefaultPageTemplate>
    )
  }
}

withRouter(OtherUserProfilePage)

const mapStateToProps = state => {
  return {
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
)(OtherUserProfilePage)
