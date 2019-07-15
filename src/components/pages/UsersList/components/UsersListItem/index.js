import React from 'react'
import * as S from './styles'
import { NavLink } from 'react-router-dom'
import userNoPhoto from 'assets/img/user.svg'

const UsersListItem = ({ users, followUser, unFollowUser }) => {
  return (
    <>
      {!users ? (
        <div>Loading</div>
      ) : (
        users.map(({ name, id, photos, followed }) => (
          <S.UserItemContainer key={id}>
            {photos.small ? (
              <NavLink to={`/user/${id}`}>
                <S.Photo photo={photos.small} />
              </NavLink>
            ) : (
              <NavLink to={`/user/${id}`}>
                <S.UserPhotoWrapper>
                  <S.UserPhoto src={userNoPhoto} />
                </S.UserPhotoWrapper>
              </NavLink>
            )}
            <S.Name>{name}</S.Name>
            {followed ? (
              <button onClick={() => unFollowUser(id)}>Unfollow</button>
            ) : (
              <button onClick={() => followUser(id)}>follow</button>
            )}
          </S.UserItemContainer>
        ))
      )}
    </>
  )
}

export default UsersListItem
