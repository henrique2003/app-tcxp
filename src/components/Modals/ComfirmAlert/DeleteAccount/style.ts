import styled from 'styled-components'

export const StyledModal = styled.div`
  max-width: 500px;
  background: #FF6D00;
  border-radius: 10px;
  padding: 30px;
  margin: 0 auto;
  color: white;
`

export const Message = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
  margin-top: 15px;
`

export const Flex = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media(max-width: 400px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  background: white;
  color: #FF6D00;
  text-align: center;
  padding: 7px 25px;
  margin-right: 7px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:nth-child(2) {
    margin-right: 0;
    margin-left: 10px;
  }

  @media(max-width: 400px) {
    margin-right: 0;
    margin-left: 0;
    font-size: 17px;
    margin-top: 15px;

    &:nth-child(2) {
      margin-right: 0;
      margin-left: 0;
    }
  }
`
