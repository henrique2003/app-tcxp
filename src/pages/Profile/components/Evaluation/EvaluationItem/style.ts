import styled from 'styled-components'

export const DivEvaluation = styled.div`
  border-radius: 30px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
  padding: 40px 50px;
  padding-bottom: 50px;
  margin-right: 15px;
  background: white;

  &:nth-child(2) {
    margin-right: 0;
    margin-left: 15px;
  }

  @media(max-width: 1100px) {
    margin-right: 0;
    margin-left: 0;
    margin-top: 25px;

    &:nth-child(2) {
      margin-right: 0;
      margin-left: 0;
    }
  }

  @media(max-width: 680px) {
    padding: 30px;
    padding-bottom: 40px;
  }
`

export const Flex = styled.div`
  display: flex;

  @media(max-width: 500px) {
    flex-direction: column;
  }
`

interface ImageProps {
  image: string
}

export const Image = styled.img<ImageProps>`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media(max-width: 680px) {
    width: 100px;
    height: 100px;
  }

  @media(max-width: 500px) {
    margin: 0 auto;
  }
`

export const DivImage = styled.div`
  @media(max-width: 500px) {
    margin: 0 auto;
  }
`

export const DivComment = styled.div`
  margin-left: 40px;
  margin-top: 15px;
  font-size: 50px;

  @media(max-width: 1200px) {
    font-size: 40px;
  }

  @media(max-width: 1100px) {
    font-size: 50px;
  }

  @media(max-width: 680px) {
    margin-left: 30px;
    margin-top: 0;
    font-size: 40px;
  }

  @media(max-width: 500px) {
    text-align: center;
    width: 100%;
    margin: 0;
    margin-top: 5px;
  }
`

export const Comment = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 5px;

  @media(max-width: 1100px) {
    font-size: 25px;
  }

  @media(max-width: 680px) {
    font-size: 22px;
  }
`

export const Name = styled.p`
  font-size: 18px;
  margin-top: 10px;

  @media(max-width: 1100px) {
    font-size: 20px;
  }

  @media(max-width: 680px) {
    font-size: 18px;
  }
`
