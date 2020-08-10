import styled from 'styled-components'

export const StyledCard = styled.div`
  margin: 0 30px;
  margin-top: 55px;
  text-align: center;

  @media(max-width: 1024px) {
    margin: 0 20px;
    margin-top: 55px;
  }
  
  @media(max-width: 430px) {
    margin: 0 10px;
    margin-top: 45px;
  }
`

export const Header = styled.div`
  margin: 0 auto;
  max-width: 230px;
  
  @media(max-width: 430px) {
    max-width: 180px;
  }
`

export const CardHeader = styled.header`
  display: flex;
`

export const DivIcon = styled.div`
  width: 50px;
  height: 50px;

  @media(max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
  
  @media(max-width: 430px) {
    width: 40px;
    height: 40px;
  }
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`

export const CardTitle = styled.h4`
  color: #ff6d00c2;
  font-size: 35px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin-left: 25px;

  @media(max-width: 1024px) {
    font-size: 30px;
  }
  
  @media(max-width: 430px) {
    font-size: 27px;
    margin-left: 18px;
  }
`

export const Content = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #808080;

  @media(max-width: 1024px) {
    font-size: 17px;
  }
  
  @media(max-width: 430px) {
    margin-top: 15px;
    font-size: 16px;
  }
`
