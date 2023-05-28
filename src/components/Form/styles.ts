import styled from 'styled-components'
import { colors } from '../../styles'

export const FormStyles = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputStyles = styled.input`
  font-size: 22px;
  border-radius: 10px;
  background-color: ${colors.white};
  height: 40px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid ${colors.darkGray};
`

export const NameInputStyles = styled(InputStyles)`
  width: 35%;
`

export const EmailInputStyles = styled(InputStyles)`
  width: 30%;
`

export const PhoneInputStyled = styled(InputStyles)`
  width: 20%;
`

export const ButtonStyled = styled.button`
  font-size: 22px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-bottom: 2px solid ${colors.darkGray};
  border-radius: 10px;
  width: 10%;
`
