import styled from 'styled-components'

export const StyledDashboard = styled.div`
  
`

interface WelcomeProps {
  url: string
}

export const Welcome = styled.div<WelcomeProps>`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 120px 0;

  a {
    text-decoration: none;
    color: white;
    padding: 8px 25px;
    border: 1px solid white;
    background: transparent;
    text-align: center;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 40px;
    display: block;
    max-width: 150px;
  }
`

export const WelcomeTitle = styled.h4`
  font-size: 40px;
  color: white;
  font-weight: bold;
`

export const WelcomeText = styled.p`
  color: white;
  font-size: 24px;
  margin-top: 15px;
  margin-left: 3px;
`

interface TitleProps {
  marginTop: number
}

export const Title = styled.h3<TitleProps>`
  margin-top: ${props => props.marginTop}px;
  font-size: 35px;
  color: #FF6E01;
  text-align: center;

  @media(max-width: 900px) {
    text-align: center;
  }
`

export const DivLocation = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1330px;
`

export const MostVisited = styled.div`
  color: white;
  margin: 60px auto;
  max-width: 1200px;
  display: flex;
  padding: 30px 40px;
  box-shadow: 4px 4px 4px 4px rgba(0,0,0,.1);

  section {
    flex: 1;

    img {
      border-radius: 3px;
      width: 100%;
      height: 100%;
    }
  }

  @media(max-width: 1300px) {
    margin: 60px 40px;
  }

  @media(max-width: 900px) {
    flex-direction: column;
  }

  @media(max-width: 500px) {
    padding: 30px 20px;
    margin: 60px 15px;
  }
`

export const MostVisitedContent = styled.div`
  margin-left: 40px;
  flex: 2;

  h5 {
    margin-top: 20px;
    font-size: 30px;
    color: rgba(0,0,0,0.7);
  }

  p {
    margin-top: 30px;
    font-size: 19px;
    color: rgba(0,0,0,0.7);
    max-width: 710px;
  }

  @media(max-width: 1200px) {
    flex: 1;

    h5 {
      font-size: 30px;
    }

    p {
      margin-top: 20px;
      font-size: 19px;
    }
  }

  @media(max-width: 1030px) {
    h5 {
      margin-top: 0;
    }
  }

  @media(max-width: 950px) {
    p {
      font-size: 18px;
    }
  }

  @media(max-width: 900px) {
    margin-left: 0;

    h5 {
      margin-top: 40px;
      font-size: 30px;
    }

    p {
      margin-top: 20px;
      font-size: 19px;
    }
  }

  @media(max-width: 650px) {
    h5 {
      margin-top: 25px;
      font-size: 27px;
    }

    p {
      margin-top: 15px;
      font-size: 18px;
    }
  }

  @media(max-width: 500px) {
    h5 {
      margin-top: 20px;
      font-size: 25px;
    }

    p {
      margin-top: 10px;
      font-size: 17px;
    }
  }
`
