import React from 'react'
import * as S from './styles'
import routes from 'config/routes'

const SideBar = () => {
  return (
    <S.Container>
      <S.Item to={routes.root} exact>My Profile</S.Item>
      <S.Item to={routes.users}>Users</S.Item>
      <S.Item to={routes.settings}>Settings</S.Item>
    </S.Container>
  )
}

export default SideBar
