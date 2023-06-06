import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Augustine of Hippo',
      email: 'hippoaug@email.com',
      phone: 31923420192
    },
    {
      id: 2,
      name: 'Hermes Trismegistus',
      email: '3timesbig@email.com',
      phone: 31923420192
    },
    {
      id: 3,
      name: 'Diogenes of Sinope',
      email: 'thegodphilosopher@email.com',
      phone: 31923420192
    },
    {
      id: 4,
      name: 'Epictetus of Hierapolis',
      email: 'epichiera@email.com',
      phone: 31923420192
    },
    {
      id: 5,
      name: 'Zeno of Citium',
      email: 'citiumzeno@email.com',
      phone: 31923420192
    },
    {
      id: 6,
      name: 'Plato of Athens',
      email: 'plato@email.com',
      phone: 31923420192
    },
    {
      id: 7,
      name: 'Marcus Aurelius',
      email: 'marcaur@email.com',
      phone: 31923420192
    },
    {
      id: 8,
      name: 'Aristotle of Athens',
      email: 'aristotlepolymath@email.com',
      phone: 31923420192
    },
    {
      id: 9,
      name: 'Seneca The Younger',
      email: 'thegodphilosopher@email.com',
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
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    add: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const existingContact = state.items.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (existingContact) {
        alert('Já existe um contato com esse nome')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, add } = contactsSlice.actions

export default contactsSlice.reducer
