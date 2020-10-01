import styled from 'styled-components'

export const Trace = styled.div`
  background: rgba(0,0,0,0.2);
  height: 1px;
  width: 100%;
`

export const DenounceForm = styled.form`
  margin: 80px auto;
  max-width: 700px;

  @media(max-width: 750px) {
    margin: 70px 40px;
  }

  @media(max-width: 428px) {
    margin: 60px 20px;
  }
`

export const Header = styled.header`
  display: flex;
  margin-bottom: 80px;

  @media(max-width: 650px) {
    margin-bottom: 60px;
  }

  @media(max-width: 530px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: rgba(0,0,0,0.7);
  margin-left: 30px;

  span {
    color: #FF6D00;
  }

  @media(max-width: 650px) {
    font-size: 22px;
  }

  @media(max-width: 530px) {
    margin-left: 0;
    margin-top: 15px;
  }
`

export const ImageFace = styled.img`
  width: 70px;
  height: 60px;

  @media(max-width: 750px) {
    width: 80px;
  }

  @media(max-width: 700px) {
    width: 90px;
  }

  @media(max-width: 650px) {
    width: 70px;
    height: 55px;
  }

  @media(max-width: 530px) {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: rgba(0,0,0,0.7);
  margin-bottom: 15px;
  display: block;

  @media(max-width: 650px) {
    font-size: 17px;
    margin-bottom: 12px;
  }
`

export const TextArea = styled.textarea`
  resize: none;
  font-size: 17px;
  font-weight: bold;
  color: #9b9b9b;
  padding: 15px 20px;
  padding-bottom: 70px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
  width: 100%;

  @media(max-width: 650px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  width: 100%;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  padding: 8px 0;
  color: white;
  background: #ff6d00db;
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transition: all .3s ease;
    background: #FF6D00;
  }

  @media(max-width: 650px) {
    font-size: 17px;
    padding: 7px 0;
  }
`

export const PhraseOption = styled.p`
  margin-top: 50px;
  color: rgba(0,0,0,0.8);
  text-align: center;
  width: 100%;
  font-size: 20px;

  @media(max-width: 650px) {
    font-size: 19px;
    margin-top: 40px;
  }
`

export const Email = styled.p`
  margin-top: 20px;
  color: #FF6D00;
  text-align: center;
  width: 100%;
  font-size: 20px;

  @media(max-width: 650px) {
    font-size: 19px;
    margin-top: 15px;
  }
`
