import styled from 'styled-components'

export const StyledFooter = styled.div`
  padding: 30px 50px;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* Tablets */
  @media(max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const RowLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* Tablets */
  @media(max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
  
  /* Celphone */
  @media(max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const RowSocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
