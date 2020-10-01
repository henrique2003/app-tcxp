import styled from 'styled-components'

export const StyledModal = styled.div`
  max-width: 500px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  color: white;
  text-align: right;

  svg {
    color: black;
    font-size: 35px;
    cursor: pointer;
  }
`

export const Message = styled.p`
  color: black;
  font-size: 22px;
  text-align: center;
  margin: 40px 10px 60px 10px;

  span {
    color: #FF6D00;
  }

  @media(max-width: 428px) {
    font-size: 21px;
  }
`
