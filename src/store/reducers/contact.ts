import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Yago Frankley',
      email: 'frankleyyago@email.com',
      phone: 31923420192
    },
    {
      id: 2,
      name: 'Joao Silva',
      email: 'silvajoao@email.com',
      phone: 31923420192
    },
    {
      id: 3,
      name: 'Maria Santos',
      email: 'mariasantos@email.com',
      phone: 31923420192
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    }
  }
})

export const { remove } = contactsSlice.actions

export default contactsSlice.reducer
