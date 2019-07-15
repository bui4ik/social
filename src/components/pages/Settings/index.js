import React from 'react'
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import * as S from './styles'
import * as selectors from 'store/ownUser/selectors'
import * as selectorsIdentity from 'store/identity/selectors'
import { getUserInfo, updateUserInfo } from 'store/ownUser/thunks'
import { connect } from 'react-redux'
import { Form } from 'react-final-form'
import Styles from './formstyles'
import FullName from './components/FullName'
import AboutMe from './components/AboutMe'
import LookingForAJob from './components/LookingForAJob'
import LookingForAJobDescription from './components/LookingForAJobDescription'
import Facebook from './components/Contacts/facebook'
import GitHub from './components/Contacts/github'
import Instagram from './components/Contacts/instagram'
import MainLink from './components/Contacts/mainLink'
import Twitter from './components/Contacts/twitter'
import Vk from './components/Contacts/vk'
import WebSite from './components/Contacts/webSite'
import YouTube from './components/Contacts/YouTube'

class Settings extends React.Component {
  componentDidMount() {
    this.props.getUserInfo(this.props.userId)
  }

  onSubmit = async values => {
    this.props.updateUserInfo(values)
  }

  render() {
    const { aboutMe, fullName, contacts, lookingForAJob, lookingForAJobDescription } = this.props
    return (
      <DefaultPageTemplate>
        <S.Wrapper>
          <S.Content>
            <Styles>
              <Form
                onSubmit={this.onSubmit}
                initialValues={{
                  aboutMe: aboutMe,
                  fullName: fullName,
                  contacts: {
                    facebook: contacts.facebook,
                    github: contacts.github,
                    instagram: contacts.instagram,
                    mainLink: contacts.mainLink,
                    twitter: contacts.twitter,
                    vk: contacts.vk,
                    website: contacts.website,
                    youtube: contacts.youtube,
                  },
                  lookingForAJob: lookingForAJob,
                  lookingForAJobDescription: lookingForAJobDescription,
                }}
                render={({ handleSubmit, form, submitting, pristine }) => (
                  <form onSubmit={handleSubmit}>
                    <FullName />
                    <AboutMe />
                    <LookingForAJob />
                    <LookingForAJobDescription />
                    <Facebook />
                    <GitHub />
                    <Instagram/>
                    <MainLink/>
                    <Twitter/>
                    <Vk/>
                    <WebSite/>
                    <YouTube/>
                    <div className="buttons">
                      <button type="submit" disabled={submitting || pristine}>
                        Submit
                      </button>
                      <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                        Reset
                      </button>
                    </div>
                  </form>
                )}
              />
            </Styles>
          </S.Content>
        </S.Wrapper>
      </DefaultPageTemplate>
    )
  }
}

const mapStateToProps = state => {
  return {
    fullName: selectors.fullNameSelector(state),
    aboutMe: selectors.aboutMeSelector(state),
    lookingForAJob: selectors.lookingForAJobSelector(state),
    lookingForAJobDescription: selectors.lookingForAJobDescriptionSelector(state),
    contacts: selectors.contactsSelector(state),
    error: selectors.errorSelector(state),
    isLoading: selectors.loadingSelector(state),
    userId: selectorsIdentity.userIdSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: id => dispatch(getUserInfo(id)),
    updateUserInfo: id => dispatch(updateUserInfo(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
