import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Omit } from '@reduxjs/toolkit/dist/tsHelpers'

import * as S from './styles'
import Contact from '../../models/Contact'
import { add } from '../../store/reducers/contact'

const Form = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const addContact = (e: FormEvent) => {
    e.preventDefault()

    const contactToAdd: Omit<Contact, 'id'> = {
      name,
      email,
      phone: parseInt(phone, 10)
    }

    dispatch(add(contactToAdd))
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <S.FormStyles onSubmit={addContact}>
      <S.NameInputStyles
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
        placeholder="Full Name"
      />
      <S.EmailInputStyles
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        placeholder="Email"
      />
      <S.PhoneInputStyles
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="number"
        id="phone"
        placeholder="Phone Number"
      />
      <S.ButtonStyles type="submit">Add+</S.ButtonStyles>
    </S.FormStyles>
  )
}

export default Form
