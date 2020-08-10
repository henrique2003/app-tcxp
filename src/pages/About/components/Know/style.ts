import styled from 'styled-components'

export const StyledKnow = styled.div`
  width: 100%;
  margin: 80px 0 110px 0;

  @media(max-width: 430px) {
    margin: 60px 0 80px 0;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
