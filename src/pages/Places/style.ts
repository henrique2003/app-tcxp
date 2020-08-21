import styled from 'styled-components'

export const StyledPlaces = styled.div`
  svg {
    font-size: 50px;
    color: #FF6D00 !important;
    position: absolute;
    top: 32px;
    right: 40px;
    cursor: pointer;

    path {
      stroke: #FF6D00;
    }

    @media(max-width: 800px) {
      font-size: 45px;
      top: 25px;
      right: 25px;
    }

    @media(max-width: 500px) {
      font-size: 35px;
      top: 20px;
      right: 20px;
    }
  }
`

export const Title = styled.h1`
  color: black;
  font-size: 30px;
  margin: 0 20px;
  margin-top: 40px;
  text-align: center;
  font-weight: bold;

  @media(max-width: 800px) {
    margin-top: 90px;
    font-size: 27px;
  }

  @media(max-width: 500px) {
    font-size: 25px;
  }

  @media(max-width: 428px) {
    font-size: 23px;
  }
`

export const TitleSpan = styled.span`
  color: #FF6D00;
`

export const Paragrath = styled.p`
  color: black;
  font-size: 19px;
  text-align: center;
  margin: 0 auto;
  margin-top: 25px;
  max-width: 400px;

  @media(max-width: 800px) {
    padding: 0 20px;
    margin-top: 17px;
    font-size: 18px;
  }

  @media(max-width: 500px) {
    font-size: 17px;
  }

  @media(max-width: 428px) {
    font-size: 16px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 50px;

  @media(max-width: 1200px) {
    max-width: 1000px;
  }


  @media(max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 750px;
  }

  @media(max-width: 750px) {
    max-width: 650px;
  }

  @media(max-width: 650px) {
    max-width: 100%;
  }

  @media(max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const DivButton = styled.div`
  text-align: center;
  margin: 15px 0;
  width: 100%;
`

export const Button = styled.button`
  background: #FF6D00;
  padding: 5px 28px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;

  img {
    margin-top: 2px;
  }
`
