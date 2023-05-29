import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    new Contact('Yago Frankley', 'frankleyyago@email.com', 31923420192, 1),
    new Contact('Maria Santos', 'silvamaria@email.com', 31994924932, 2),
    new Contact('Jõao Damasceno', 'damascenojoao@email.com', 31993280922, 3)
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((contact) => contact.id !== action.payload)
    }
  }
})

export const { remove } = contactSlice.actions

export default contactSlice.reducer
