import styled from 'styled-components'

export const StyledExplore = styled.div`
  
`

interface DivSearchProps {
  url: string
}

export const DivSearch = styled.div<DivSearchProps>`
  background: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  height: 600px;

  svg {
    color: #808080;
    font-size: 30px;
    margin-bottom: -5px;
    margin-left: -50px;
    cursor: pointer;
    transition: color .3s ease;

    &:hover {
      color: #808080c9;
    }
  }

  @media(max-width: 700px) {
    height: 500px;

    svg {
      font-size: 27px;
      margin-bottom: -5px;
      margin-left: -45px;
    }
  }

  @media(max-width: 520px) {
    svg {
      font-size: 27px;
      margin-left: -40px;
    }
  }

  @media(max-width: 428px) {
    height: 400px;

    svg {
      font-size: 25px;
      margin-left: -38px;
    }
  }
`

export const Phrase = styled.p`
  max-width: 500px;
  margin: 0 auto;
  padding-top: 150px;
  margin-bottom: 70px;
  font-size: 32px;
  font-weight: bold;
  color: white;
  text-align: center;

  @media(max-width: 700px) {
    padding-top: 120px;
    margin-bottom: 80px;
    font-size: 29px;
  }

  @media(max-width: 520px) {
    font-size: 28px;
  }

  @media(max-width: 428px) {
    font-size: 25px;
    padding-top: 100px;
    margin-bottom: 60px;
  }
`

export const DivInput = styled.div`
  margin: 0 auto;
  text-align: center;
`

export const Input = styled.input`
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  width: 400px;
  color: #808080;
  font-size: 20px;

  @media(max-width: 700px) {
    font-size: 19px;
    padding: 8px 20px;
  }

  @media(max-width: 520px) {
    font-size: 19px;
    padding: 8px 20px;
    width: 100%;
    margin-left: -15px;
  }

  @media(max-width: 428px) {
    font-size: 18px;
    padding: 7px 20px;
    margin-left: -10px;
  }
`

export const TitlePersons = styled.h3`
  font-size: 35px;
  text-align: center;
  font-weight: bold;
  margin-top: 55px;
  color: rgba(0,0,0,0.9);

  @media(max-width: 700px) {
    font-size: 33px;
    margin-top: 45px;
  }

  @media(max-width: 520px) {
    font-size: 30px;
    margin-top: 40px;
  }

  @media(max-width: 428px) {
    font-size: 28px;
    margin-top: 40px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  padding-bottom: 70px;

  @media(max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }

  @media(max-width: 520px) {
    margin-top: 20px;
  }

  @media(max-width: 428px) {
    margin-top: 0;
  }
`
