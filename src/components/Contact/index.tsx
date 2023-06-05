import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { remove } from '../../store/reducers/contact'

import * as S from '../Contact/styles'

type Props = {
  name: string
  email: string
  phone: number
  id: number
}

const Contact = ({ name, email, phone, id }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  return (
    <>
      <td>
        <S.ContactInfoWrapper>
          <S.ContactInfoStyles>{name}</S.ContactInfoStyles>
        </S.ContactInfoWrapper>
      </td>
      <td>
        <S.ContactInfoWrapper>
          <S.ContactInfoStyles>{email}</S.ContactInfoStyles>
        </S.ContactInfoWrapper>
      </td>
      <td>
        <S.ContactInfoWrapper>
          <S.ContactInfoStyles>{phone}</S.ContactInfoStyles>
        </S.ContactInfoWrapper>
      </td>
      <td>
        {isEditing ? (
          <>
            <S.ButtonSavelStyles />
            <S.ButtonCancelStyles onClick={() => setIsEditing(false)} />
          </>
        ) : (
          <>
            <S.ButtonEditStyles onClick={() => setIsEditing(true)} />
            <S.ButtonRemoveStyles onClick={() => dispatch(remove(id))} />
          </>
        )}
      </td>
    </>
  )
}

export default Contact
