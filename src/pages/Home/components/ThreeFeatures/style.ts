import styled from 'styled-components'

export const StyleThreeFeatures = styled.div`
  width: 100%;
  margin: 15px 0;

  header {
    p {
      margin-top: 15px;
    }
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
