import styled from 'styled-components'

export const StyledMostTravel = styled.div`
  display: block;
  position: static;
  margin: 35px 0;
  padding-bottom: 480px;

  .most_travel_body {
    position: relative;
    margin: 50px 0;
  }

  .most_travel_header {
    text-align: center;
    width: 100%;

    h3 {
      font-family: "Open Sans", sans-serif;
      font-weight: 400;
      font-size: 32px;
      color: rgba(0, 0, 0, 0.7);
    }

    p {
      margin-top: 20px !important;
      color: #808080;
      font-size: 19px;
      max-width: 550px;
      margin: 0 auto;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    margin: 30px 0;
    padding-bottom: 400px;

    .most_travel_header {
      h3 {
        font-size: 30px;
      }

      p {
        margin-top: 20px !important;
        font-size: 18px;
      }
    }
  }

  /* Big celphones */
  @media (max-width: 600px) {
    padding-bottom: 0;

    .most_travel_header {
      h3 {
        font-size: 28px;
      }

      p {
        margin-top: 17px !important;
        font-size: 17px;
      }
    }
  }

  /* Celphones */
  @media (max-width: 428px) {
    .most_travel_header {
      margin: 30px 0;

      h3 {
        font-size: 25px;
      }

      p {
        margin-top: 18px !important;
        font-size: 15px;
      }
    }
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;

  /* Bid celphones */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
