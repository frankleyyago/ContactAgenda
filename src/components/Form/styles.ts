import styled from 'styled-components'
import variables from '../../styles/variables'

export const FormStyles = styled.form`
  display: flex;
  justify-content: space-between;
`

export const InputStyles = styled.input`
  font-size: 22px;
  border-radius: 10px;
  background-color: ${variables.white};
  height: 40px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid ${variables.darkGray};
  outline: none;
`

export const NameInputStyles = styled(InputStyles)`
  width: 35%;
`

export const EmailInputStyles = styled(InputStyles)`
  width: 30%;
`

export const PhoneInputStyles = styled(InputStyles)`
  width: 20%;
`

export const ButtonStyles = styled.button`
  font-size: 22px;
  background-color: ${variables.blue};
  color: ${variables.white};
  border: none;
  border-bottom: 2px solid ${variables.darkGray};
  border-radius: 10px;
  width: 10%;
  cursor: pointer;
`
