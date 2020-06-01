import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 80px;

  /* Ipad */
  @media(max-width: 900px) {
    padding: 0 90px;
  }

  /* Big celphone */
  @media(max-width: 600px) {
    padding: 0 55px;
  }

  /* Celphone */
  @media(max-width: 428px) {
    padding: 0 35px;
  }
`
