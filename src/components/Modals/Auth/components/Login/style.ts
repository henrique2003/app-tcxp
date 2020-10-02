import styled from 'styled-components'

export const StyledLogin = styled.div`
  height: 465px;

  header {
    margin-bottom: 35px;
    margin-top: 100px !important;

    h3 {
      text-transform: none !important;
    }

    /* Ruduce font size for Tablets */
    @media(max-width: 840px) {
      margin-bottom: 30px;

      h3 {
        font-size: 29px;
      }
    }

    /* Ruduce font size for celphones */
    @media(max-width: 400px) {
      margin-bottom: 25px;

      h3 {
        font-size: 27px;
      }
    }
  }

  p {
    font-size: 16px;
    color: #808080;
    width: 100%;
    text-align: center;
    margin: 0 auto !important;
    margin-top: 50px !important;
  }

  button[type="button"] {
    margin: 0;
    max-width: 100px;
  }

  /* Celphones */
  @media(max-width: 700px) {
    height: 400px;

    header {
      margin-top: 50px !important;

      h3 {
        font-size: 35px;
      }
    }
  }

  /* Small celphones */
  @media(max-width: 470px) {
    height: 370px;

    header {
      margin-top: 70px !important;

      h3 {
        font-size: 30px;
      }
    }
  }

  /* Ruduce all lengths */
  @media(max-width: 380px) {
    height: 330px;

    header {
      margin-top: 50px !important;
      margin-bottom: 25px;
      
      h3 {
        font-size: 25px;
      }
    }
  }
`
