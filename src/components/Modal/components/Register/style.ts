import styled from 'styled-components'

interface CheckBoxProps {
  useTerms: boolean
}

export const Content = styled.div`
  padding: 20px 40px;
  
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
      max-width: 310px;
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
        margin-bottom: 0;
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
      margin-top: 25px;
      margin-bottom: 30px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      cursor: pointer;
    }
  }

  // Celphones
  @media(max-width: 470px) {
    padding: 20px 40px;
    
    .close {
      font-size: 55px;
    }

    header {
      margin-top: 30px;
      
      h3 {
        font-size: 30px;
      }
    }

    section {
      margin-top: 10px;

      form {
        max-width: 310px;

        input {
          margin-top: 15px;
          padding: 7px 20px;
        }

        svg {
          font-size: 20px;
        }

        button {
          font-size: 17px;
          padding: 8px 0;
          margin-top: 20px;
        }
      }

      button {
        font-size: 15px;
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
  }

  // Small Celphones
  @media(max-width: 400px) {
    padding: 20px 30px;
    
    .close {
      font-size: 50px;
      top: 5px;
      right: 5px;
    }

    header {
      margin-top: 25px;
      
      h3 {
        font-size: 27px;
      }
    }

    section {
      margin-top: 20px;

      form {
        max-width: 320px;

        input {
          margin-top: 15px;
          padding: 6px 15px;
          font-size: 15px;
        }

        svg {
          font-size: 17px;
        }

        button {
          font-size: 15px;
          padding: 6px 0;
          margin-top: 18px;
        }
      }

      button {
        font-size: 15px;
        margin-top: 20px;
        margin-bottom: 5px;
      }
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
