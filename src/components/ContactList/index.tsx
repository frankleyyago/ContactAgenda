import { useDispatch, useSelector } from 'react-redux'

import { remove } from '../../store/reducers/contact'

import Contact from '../Contact'
import {
  ButtonRemoveStyles,
  ButtonEditStyles,
  TableBodyStyles,
  TableContainer,
  TableHeadStyles,
  TableStyles
} from './styles'
import { RootReducer } from '../../store'
import ContactClass from '../../models/Contact'

type Props = ContactClass

const ContactList = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.contacts)
  return (
    <>
      <TableContainer>
        <TableStyles cellSpacing="0">
          <TableHeadStyles>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th></th>
            </tr>
          </TableHeadStyles>
          <TableBodyStyles>
            {items.map((c) => (
              <tr key={c.name}>
                <Contact
                  name={c.name}
                  email={c.email}
                  phone={c.phone}
                  id={c.id}
                />
                <td>
                  <ButtonEditStyles />
                  <ButtonRemoveStyles onClick={() => dispatch(remove(c.id))} />
                </td>
              </tr>
            ))}
          </TableBodyStyles>
        </TableStyles>
      </TableContainer>
    </>
  )
}

export default ContactList
