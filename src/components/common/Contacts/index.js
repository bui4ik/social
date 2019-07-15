import React from 'react'
import * as S from './styles'

const Contacts = ({ contacts }) => {
  return (
    <S.Contacts>
      <S.ContactsItem>Contacts: </S.ContactsItem>
      <S.ContactsItem href={contacts.facebook}>facebook</S.ContactsItem>
      <S.ContactsItem href={contacts.github}>github</S.ContactsItem>
      <S.ContactsItem href={contacts.instagram}>instagram</S.ContactsItem>
      <S.ContactsItem href={contacts.twitter}>twitter</S.ContactsItem>
      <S.ContactsItem href={contacts.vk}>vk</S.ContactsItem>
    </S.Contacts>
  )
}

export default Contacts
