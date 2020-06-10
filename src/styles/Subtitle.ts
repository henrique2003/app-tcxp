import styled from 'styled-components'

export const Subtitle = styled.p`
  color: #808080;
  font-size: 19px;
  max-width: 550px;
  margin: 0 auto;

  /* Tablets */
  @media (max-width: 900px) {
    font-size: 18px;
  }

  /* Big celphones */
  @media (max-width: 600px) {
    font-size: 17px;
  }

  /* Celphones */
  @media (max-width: 428px) {
    font-size: 15px;
  }
`
