import styled from 'styled-components'

export const StyledRequestItem = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  
  @media(max-width: 500px) {
    margin: 0 15px;
    margin-top: 50px;
  }
`

export const Flex = styled.div`
  display: flex;
  
  @media(max-width: 500px) {
    display: block;
    text-align: center;
  }
`

interface ImageProps {
  url: string
}

export const Image = styled.div<ImageProps>`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  width: 80px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;

  @media(max-width: 800px) {
    width: 70px;
    height: 70px;
  }
  
  @media(max-width: 500px) {
    margin: 0 auto;
  }
`

export const Content = styled.div`
  svg {
    font-size: 35px;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  @media(max-width: 800px) {
    font-size: 30px;
    margin-left: 4px;
  }
  
  @media(max-width: 500px) {
    display: block;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 18px;
  color: rgba(0,0,0,0.8);
  margin-bottom: 10px;
  width: 80%;

  @media(max-width: 800px) {
    font-size: 17px;
  }
  
  @media(max-width: 500px) {
    font-size: 17px;
    max-width: 220px;
    margin: 15px auto;
  }
`
