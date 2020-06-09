import styled from 'styled-components'

interface Props {
  image: string
}

export const StyledDecision = styled.div<Props>`
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  color: white;
  padding-top: 30px;
  padding-bottom: 50px;
  margin-bottom: 40px;

  .content {
    max-width: 450px;
    text-align: center;
    margin: 0 auto;

    h4 {
      font-size: 25px;
      font-weight: 400;
      margin-top: 15px;
    }
    
    p {
      font-size: 19px;
      font-weight: 300;
      margin-top: 15px;
    }

    button {
      border: none;
      border: 2px solid white;
      margin-top: 25px;
      border-radius: 20px;
      padding: 7px 30px;
      text-align: center;
      background: transparent;
      font-size: 18px;
      font-weight: 300;
      color: white;
      cursor: pointer;
    }
  }

  /* Ipad */
  @media(max-width: 768px) {
    .content {
      max-width: 450px;

      h4 {
        font-size: 24px;
      }
      
      p {
        font-size: 18px;
        margin-top: 15px;
      }

      button {
        margin-top: 25px;
        padding: 6px 30px;
        font-size: 17px;
      }
    }
  }

  /* Celphone */
  @media(max-width: 500px) {
    padding: 0 20px;
    padding-top: 25px;
    padding-bottom: 40px;

    .content {
      h4 {
        font-size: 23px;
      }
      
      p {
        font-size: 17px;
      }
    }
  }

  /* Celphone */
  @media(max-width: 428px) {
    .content {
      h4 {
        font-size: 23px;
      }
      
      p {
        font-size: 17px;
      }

      button {
        font-size: 16px;
      }
    }
  }
`
