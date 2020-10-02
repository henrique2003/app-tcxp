import styled from 'styled-components'

export const StyledEmailConfirmation = styled.div`
  margin-top: 200px;
`

export const Div = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 20px;

  @media(max-width: 768px) {
    margin: 0 auto;
    margin-top: 50px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;

  @media(max-width: 675px) {
    flex-direction: column;
  }
`

export const ImageFace = styled.img`
  width: 60px;
  height: 60px;

  @media(max-width: 768px) {
    width: 55px;
    height: 55px;
  }

  @media(max-width: 675px) {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`

export const Alert = styled.div`
  font-size: 28px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 600;
  margin-left: 40px;
  line-height: 55px;

  @media(max-width: 768px) {
    font-size: 26px;
    margin-left: 30px;
  }

  @media(max-width: 675px) {
    margin-left: 0;
    text-align: center;
    line-height: 35px;
  }
`

export const Form = styled.form`
  margin-top: 50px;
  width: 100%;
  padding: 40px 50px;
  border-radius: 8px;
  background: #eeeeeec8;

  @media(max-width: 675px) {
    padding: 40px;
  }
  
  @media(max-width: 480px) {
    padding: 35px;
  }
`

export const Message = styled.p`
  color: #ff6d00;
  font-size: 18px;
  
  @media(max-width: 500px) {
    font-size: 17px;
  }
`

export const InputCode = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  border-bottom: 3px solid rgba(0, 0, 0, 0.7);
  margin-top: 50px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  padding: 5px;

  @media(max-width: 675px) {
    font-size: 17px;
  }
  
  @media(max-width: 480px) {
    font-size: 16px;
  }
`

export const DivButton = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 35px;
`

export const Button = styled.button`
  background: #f27f1b;
  padding: 5px 28px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;

  img {
    margin-top: 2px;
  }

  @media(max-width: 675px) {
    padding: 2px 25px;
  }
`

export const CodeResend = styled.p`
  margin: 30px 0;
  color: rgba(0,0,0,0.75);
  font-size: 19px;
  text-align: center;

  @media(max-width: 550px) {
    font-size: 18px;
  }
`

export const CodeResendSpan = styled.button`
  color: #FF6D00;
  border: none;
  font-size: 19px;
  background: transparent;
  margin-left: 7px;
  cursor: pointer;

  @media(max-width: 550px) {
    font-size: 18px;
  }
`
