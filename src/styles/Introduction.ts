import styled from 'styled-components'

interface IntroductionProps {
  image: string
  isNav: boolean
}

export const StyledIntroductionQuestion = styled.div<IntroductionProps>`
  margin-top: ${(props) => (props.isNav ? '0' : '-120px')};
  display: flex;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  margin-top: 33vh;
  max-width: 460px;

  h4 {
    color: #f27f1b;
    font-size: 34px;
  }

  p {
    margin-top: 15px;
    color: white;
    font-size: 21px;
  }

  /* Ipad */
  @media(max-width: 800px) {
    margin-top: 34vh;

    h4 {
      font-size: 32px;
    }

    p {
      margin-top: 10px;
      font-size: 19px;
    }
  }

  /* Celphone */
  @media(max-width: 600px) {
    margin-top: 34vh;
    max-width: 400px;

    h4 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
    }
  }

  /* Celphone */
  @media(max-width: 428px) {
    margin-top: 37vh;
    max-width: 400px;

    h4 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
`
