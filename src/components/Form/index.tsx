import * as S from './styles'

const Form = () => (
  <S.FormStyles>
    <S.NameInputStyles type="text" id="name" placeholder="Full Name" />
    <S.EmailInputStyles type="email" id="email" placeholder="Email" />
    <S.PhoneInputStyles type="number" id="phone" placeholder="Phone Number" />
    <S.ButtonStyles>Add+</S.ButtonStyles>
  </S.FormStyles>
)

export default Form
