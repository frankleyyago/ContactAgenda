import { HeaderStyles } from './styles'

import logo from '../../assets/image/logo.svg'

const Header = () => (
  <HeaderStyles>
    <img src={logo} alt="logo" />
    <h1>eContacts</h1>
  </HeaderStyles>
)

export default Header
