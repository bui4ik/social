import React from 'react'
import Header from './components/Header'
import * as S from './styles'

const DefaultPageTemplate = ({ children }) => (
  <S.Background>
    <S.Container>
      <Header />
      <S.BottomSection>{children}</S.BottomSection>
    </S.Container>
  </S.Background>
)

export default DefaultPageTemplate
