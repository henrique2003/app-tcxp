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

  header {
    p {
      margin-top: 20px !important;
    }
  }

  /* Tablets */
  @media (max-width: 900px) {
    margin: 30px 0;
    padding-bottom: 400px;

    header {
      p {
        font-size: 18px;
      }
    }
  }

  /* Big celphones */
  @media (max-width: 600px) {
    padding-bottom: 0;

    header {
      p {
        margin-top: 17px !important;
      }
    }
  }

  /* Celphones */
  @media (max-width: 428px) {
    header {
      margin: 30px 0;

      p {
        margin-top: 18px !important;
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
