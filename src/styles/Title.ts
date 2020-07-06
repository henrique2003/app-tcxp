import styled from 'styled-components'

export const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  text-align: center;

  /* Tablets */
  @media (max-width: 900px) {
    font-size: 30px;
  }

  /* Big celphones */
  @media (max-width: 600px) {
    font-size: 28px;
  }

  /* Celphones */
  @media (max-width: 428px) {
    font-size: 25px;
  }
`
