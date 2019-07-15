import React from 'react'
import * as S from './styles'

const ProfileInfo = ({ fullName, lookingForAJobDescription, lookingForAJob, aboutMe }) => {
  return (
    <S.Container>
      <S.Username>{fullName}</S.Username>
      <S.LookingForAJobContainer>
        {lookingForAJob ? (
          <S.LookingForAJobPositive>Looking for a job</S.LookingForAJobPositive>
        ) : (
          <S.LookingForAJobNegative>Not looking for a job</S.LookingForAJobNegative>
        )}
        <S.LookingForAJobDescription>
          Job description: {lookingForAJobDescription}
        </S.LookingForAJobDescription>
        <S.LookingForAJobSVGWrapper />
      </S.LookingForAJobContainer>
      <S.AboutMe>{aboutMe}</S.AboutMe>
    </S.Container>
  )
}

export default ProfileInfo
