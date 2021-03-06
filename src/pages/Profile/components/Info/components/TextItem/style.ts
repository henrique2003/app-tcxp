import styled from 'styled-components'

export const DivTitleItem = styled.div`
  display: flex;
  margin-top: 40px;

  &:nth-child(2) {
    margin-top: 80px;
  }

  @media(max-width: 1150px) {
    margin-top: 40px;
  }
`

export const SpanTitleItem = styled.div`
  width: 11px;
  height: 11px;
  margin-right: 15px;
  margin-top: 10px;
  background: #FF6D00;
  border-radius: 50%;
`

export const TitleItem = styled.p`
  font-size: 25px;

  @media(max-width: 850px) {
    font-size: 22px;
  }
  
  @media(max-width: 500px) {
    font-size: 21px;
  }
`

export const AnswerRow = styled.div`
  margin-top: 10px;
  display: flex;
`

export const Answer = styled.p`
  font-size: 20px;
  margin-right: 10px;
  
  @media(max-width: 850px) {
    font-size: 19px;
  }
`

export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.7);
  background: transparent;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 20px;
  width: 100%;
  resize: none;
  color: black;

  &:disabled {
    border-bottom: 1px solid transparent;
  }

  @media(max-width: 850px) {
    font-size: 19px;
  }
  
  @media(max-width: 500px) {
    font-size: 18px;
  }
`
