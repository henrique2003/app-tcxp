import styled from 'styled-components'

interface CheckBoxProps {
  useTerms: boolean
}

export const CheckBox = styled.div<CheckBoxProps>`
  position: relative;
  border: 2px solid #808080;
  border-radius: 20px;
  margin-right: 10px;
  margin-left: 5px;
  width: 15px;
  height: 15px;
  cursor: pointer;
  
  input[type="checkbox"] {
    display: none;
  }

  svg {
    visibility: ${(props) => (props.useTerms ? 'visible' : 'hidden')};
    display: block;
    position: absolute;
    top: -8px;
    left: 30px;
    color: green !important;
  }

  // Celphones
  @media(max-width: 470px) {
    svg {
      top: -6px;
      left: 31px;
    }
  }

  // Small Celphones
  @media(max-width: 400px) {
    margin-right: 8px;
    margin-left: 5px;
    width: 13px;
    height: 13px;
    
    svg {
      top: -5px;
    }
  }
`
export const TextUseTerms = styled.label`
  font-size: 16px;
  color: #FF6D00;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: underline;

  // Small Celphones
  @media(max-width: 400px) {
    font-size: 15px;
  }
`
export const Flex = styled.div`
  display: flex;
  margin-top: 28px;
  line-height: 12px;

  // Small Celphones
  @media(max-width: 400px) {
    margin-top: 23px;
    line-height: 10px;
  }
`
