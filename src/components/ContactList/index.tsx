import { useSelector } from 'react-redux'
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

const ContactList = () => {
  const { contacts } = useSelector((state: RootReducer) => state)
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
            {contacts.map((c) => (
              <tr key={c.name}>
                <Contact name={c.name} email={c.email} phone={c.phone} />
                <td>
                  <ButtonEditStyles />
                  <ButtonRemoveStyles />
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
