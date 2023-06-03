import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contact from '../Contact'

import * as S from './styles'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  return (
    <>
      <S.TableContainer>
        <S.TableStyles cellSpacing="0">
          <S.TableHeadStyles>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </S.TableHeadStyles>
          <S.TableBodyStyles>
            {items.map((c) => (
              <tr key={c.name}>
                <Contact
                  name={c.name}
                  email={c.email}
                  phone={c.phone}
                  id={c.id}
                />
              </tr>
            ))}
          </S.TableBodyStyles>
        </S.TableStyles>
      </S.TableContainer>
    </>
  )
}

export default ContactList
