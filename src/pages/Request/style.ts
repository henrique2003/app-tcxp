import styled from 'styled-components'

export const StyledRequest = styled.div`
  border-top: 1px solid rgba(0,0,0,0.2);
  padding: 30px 0;
  
  .no_requests {
    font-size: 20px;
    text-align: center;
    color: rgba(0,0,0,0.8);
    margin: 0 auto;
    margin-top: 70px;
  }
`

export const Title = styled.h3`
  font-size: 35px;
  color: #000000c8;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;

  @media(max-width: 800px) {
    font-size: 33px;
  }

  @media(max-width: 500px) {
    font-size: 29px;
  }
`

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 60px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  @media(max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    padding-left: 55px;
  }

  @media(max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media(max-width: 500px) {
    padding-left: 0;
    margin-top: 10px;
  }
`
