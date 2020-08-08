import styled from 'styled-components'

export const StyledContent = styled.div`
  padding: 50px 0 60px 0;
  background: #eeeeee;
`
export const Row = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: row;

  @media(max-width: 1000px) {
    flex-direction: column;
  }
`
export const Form = styled.form`
  flex: 1;
  padding: 25px 30px;
  border-radius: 3px;
  border: 1px solid #ffffff;
  background: white;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.3);
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.3);
`

export const Comments = styled.div`
  flex: 2;
`

export const TitleForm = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 15px 0;
  margin-bottom: 30px;
  color: #808080d1;

  /*Celphone*/
  @media(max-width: 428px) {
    font-size: 18px;
    margin-top: 14px;
    margin-bottom: 20px;
  }
`

export const Label = styled.label`
  color: #F27F1B;
  font-size: 18px;
  display: block;
  margin-bottom: 10px;

  /*Celphone*/
  @media(max-width: 600px) {
    margin-bottom: 5px;
    font-size: 17px;
  }
`

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 7px 10px;
  background: white;
  border: 1px solid rgba(0,0,0,0.2);
  color: #808080;
  font-size: 15px;
  font-weight: 400;
  border-radius: 3px;
  width: 100%;

  /*Celphone*/
  @media(max-width: 600px) {
    margin-bottom: 15px;
  }
`

export const Textarea = styled.textarea`
  background: white;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 10px;
  color: #808080;
  font-size: 16px;
  border-radius: 3px;
  width: 100%;
  resize: none;

  /*Celphone*/
  @media(max-width: 600px) {
    font-size: 15px;
    padding: 5px 10px;
  }
`
export const Submit = styled.button`
  color: white;
  margin-top: 30px;
  background: rgba(242,127,27, 0.9);
  width: 100%;
  padding: 8px;
  border-radius: 20px;
  border: none;
  transition: all .2s ease;
  cursor: pointer;
  font-size: 19px;
  font-family: 'Roboto', sans-serif;

  &:hover {
    transition: all .2s ease;
    background: rgba(242,127,27, 1);
  }

  /*Celphone*/
  @media(max-width: 600px) {
    padding: 5px;
    font-size: 17px;
    margin-top: 20px;
  }
`
