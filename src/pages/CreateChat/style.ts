import styled from 'styled-components'

export const Trace = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  width: 100%;
  height: 1px;
`

export const StyledCreateChat = styled.div`
  margin-top: 40px;

  svg {
    font-size: 55px;
    cursor: pointer;
  }
`

export const Title = styled.h3`
  font-size: 35px;
  font-weight: 400;
  color: rgba(0,0,0,0.8);
  text-align: center;
  margin-top: -55px;

  @media(max-width: 800px) {
    font-size: 32px;
  }

  @media(max-width: 500px) {
    font-size: 30px;
    margin-top: -52px;
  }
  
  @media(max-width: 428px) {
    font-size: 28px;
  }
`

export const OrangeCircle = styled.div`
  background: #FF6D00;
  border-radius: 50%;
  margin: 0 auto;
  width: 70px;
  height: 70px;
  margin-top: -45px;

  img {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  @media(max-width: 500px) {
    width: 65px;
    height: 65px;
    margin-top: -43px;
  }
`

export const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
  margin-top: 80px;
  box-shadow: 4px 4px 4px 4px rgba(80,114,255,.1);
  border: 1px solid #eee;
  border-radius: 5px;
  background: white;
  padding: 20px 40px;
  padding-top: 10px;

  @media(max-width: 800px) {
    padding: 20px 30px;
    padding-top: 10px;
  }
  
  @media(max-width: 428px) {
    padding: 20px;
    padding-top: 10px;
  }
`

export const Label = styled.label`
  display: block;
  color: rgba(0,0,0,0.6);
  font-size: 20px;
  margin-bottom: 15px;
  margin-top: 40px;

  &:nth-child(2) {
    margin-top: 10px;
  }

  @media(max-width: 800px) {
    font-size: 19px;
    margin-bottom: 10px;
  }
  
  @media(max-width: 428px) {
    font-size: 18px;
    margin-bottom: 7px;
    margin-top: 30px;

    &:nth-child(2) {
      margin-top: 15px;
    }
  }
`

export const Input = styled.input`
  border: none;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1);
  color: #9b9b9b;
  padding: 10px 20px;
  width: 100%;
  transition: border .3s ease;

  &:hover, &:focus {
    border: 1px solid #FF6D00;
  }

  @media(max-width: 800px) {
    font-size: 16px;
  }
  
  @media(max-width: 428px) {
    padding: 10px 15px;
  }
`

export const TextArea = styled.textarea`
  resize: none;
  border: none;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1);
  color: #9b9b9b;
  padding: 10px 20px;
  font-size: 16px;
  height: 80px;
  width: 100%;
  transition: border .3s ease;

  &:hover, &:focus {
    border: 1px solid #FF6D00;
  }
  
  @media(max-width: 428px) {
    padding: 10px 15px;
  }
`

export const DivButton = styled.div`
  text-align: right;
  width: 100%;
  margin-top: 20px;

  @media(max-width: 500px) {
    margin-top: 15px;
  }
`

export const Button = styled.button`
  border: none;
  background: #FF6D00;
  color: white;
  text-align: center;
  padding: 6px 40px;
  cursor: pointer;
  font-size: 19px;
  border-radius: 5px;
  transition: transform .3s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media(max-width: 500px) {
    font-size: 18px;
  }
  
  @media(max-width: 428px) {
    font-size: 17px;
  }
`
