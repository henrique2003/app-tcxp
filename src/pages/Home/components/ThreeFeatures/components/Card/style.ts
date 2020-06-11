import styled from 'styled-components'

export const StyleCard = styled.div`
  margin-top: 55px;
  text-align: center;

  .wrapper_icon {
    padding: 15px 10px;
    padding-top: 5px;
    border: 1px solid #FF6D00;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h4 {
    margin-top: 15px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.7);
  }

  p {
    margin-top: 13px !important;
    color: #808080;
    font-size: 18px;
    max-width: 250px;
    margin: 0 auto;
  } 

  &:nth-child(2) {
    .wrapper_icon {
      padding: 10px;
    }

    p {
      max-width: 300px;
    } 
  }

  &:nth-child(3) {
    .wrapper_icon {
      padding: 11px;
      padding-bottom: 12px;
    }

    p {
      max-width: 300px;
    } 
  }

  @media(max-width: 900px) {
    h4 {
      margin-top: 10px;
    }

    p {
      margin-top: 10px !important;
    }
  }

  /* Tablets */
  @media(max-width: 768px) {
    .wrapper_icon {
      width: 65px;
      height: 65px;
    }

    h4 {
      margin-top: 10px;
      font-size: 23px;
    }

    p {
      margin-top: 10px !important;
      font-size: 17px;
    }
  }

  /* Celphone */
  @media(max-width: 500px) {
    .wrapper_icon {
      width: 65px;
      height: 65px;
    }

    h4 {
      margin-top: 7px;
      font-size: 21px;
    }

    p {
      margin-top: 7px !important;
      font-size: 16px;
    }
  }
`
