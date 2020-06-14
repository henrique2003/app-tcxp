import styled from 'styled-components'

interface CheckBoxProps {
  useTerms: boolean
}

export const Content = styled.div`
  padding: 20px;
  
  .close {
    position: absolute;
    top: 15px;
    right: 20px;
    float: right;
    cursor: pointer;
    font-size: 60px;
    color: rgba(0,0,0,0.7);
  }

  header {
    width: 100%;
    height: auto;
    margin-top: 60px;
    
    h3 {
      width: 100%;
      text-align: center;
      font-size: 35px;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      text-transform: uppercase;
      color: rgba(0,0,0,0.7);
    }
  }

  section {
    margin-top: 10px;

    form {
      max-width: 330px;
      margin: 0 auto;

      input {
        margin-top: 25px;
        border: none;
        border: 1px solid #808080;
        padding: 10px 20px;
        background: white;
        color: #808080;
        font-size: 16px;
        border-radius: 20px;
        width: 100%;
      }

      svg {
        margin-left: -35px;
        margin-bottom: -4px;
        color: rgba(0,0,0,0.6);
        font-size: 23px;
      }

      button {
        background: rgba(255,109,0, 0.8);
        color: white;
        font-size: 17px;
        border: none;
        border-radius: 30px;
        padding: 10px 0;
        width: 100%;
        margin-top: 25px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        cursor: pointer;
        text-decoration: none;
      }
    }

    button {
      border none;
      text-decoration: underline;
      color: rgba(0,0,0,0.8);
      font-size: 16px;
      background: white;
      text-align: center;
      width: 100%;
      margin-top: 15px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      cursor: pointer;
    }
  }
`

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
`
export const TextUseTerms = styled.label`
  font-size: 16px;
  color: #FF6D00;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration: underline;
`
export const Flex = styled.div`
  display: flex;
  margin-top: 28px;
  line-height: 12px;
`
