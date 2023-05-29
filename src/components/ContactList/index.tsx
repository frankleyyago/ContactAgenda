import Contact from '../Contact'
import {
  TableBodyStyles,
  TableContainer,
  TableHeadStyles,
  TableStyles
} from './styles'

const contacts = [
  {
    name: 'Yago aFrankley Santos',
    email: 'frankleyyago@outlook.com',
    phone: 123345567
  },
  {
    name: 'Yago Frankley Santos',
    email: 'frankleyyago@outlook.com',
    phone: 123345567
  },
  {
    name: 'Yago Frankley Santos',
    email: 'frankleyyago@outlook.com',
    phone: 1123345567
  },
  {
    name: 'Yago Frankley Santos',
    email: 'frankleyyago@outlook.com',
    phone: 1123345567
  }
]

const ContactList = () => (
  <>
    <TableContainer>
      <TableStyles cellSpacing="0">
        <TableHeadStyles>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </TableHeadStyles>
        <TableBodyStyles>
          {contacts.map((c) => (
            <tr key={c.name}>
              <Contact name={c.name} email={c.email} phone={c.phone} />
            </tr>
          ))}
        </TableBodyStyles>
      </TableStyles>
    </TableContainer>
  </>
)

export default ContactList
