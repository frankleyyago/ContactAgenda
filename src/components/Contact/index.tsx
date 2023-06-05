import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { remove, edit } from '../../store/reducers/contact'

import * as S from '../Contact/styles'

type Props = {
  name: string
  email: string
  phone: number
  id: number
}

const Contact = ({
  name: originalName,
  email: originalEmail,
  phone: originalPhone,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }

    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }

    if (originalPhone !== null && originalPhone !== undefined) {
      setPhone(originalPhone.toString())
    }
  }, [originalName, originalEmail, originalPhone])

  function cancelEditing() {
    setIsEditing(false)
    setName(originalName)
  }

  return (
    <>
      <td>
        <S.ContactInfoWrapper>
          <S.ContactInfoStyles
            disabled={!isEditing}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.ContactInfoWrapper>
      </td>
      <td>
        <S.ContactInfoWrapper>
          <S.ContactInfoStyles
            disabled={!isEditing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.ContactInfoWrapper>
      </td>
      <td>
        <S.ContactInfoWrapper>
          <S.ContactInfoStyles
            disabled={!isEditing}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </S.ContactInfoWrapper>
      </td>
      <td>
        {isEditing ? (
          <>
            <S.ButtonSavelStyles
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    email,
                    phone: Number(phone),
                    id
                  })
                )
                setIsEditing(false)
              }}
            />
            <S.ButtonCancelStyles onClick={cancelEditing} />
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
