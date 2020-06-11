import styled from 'styled-components'

export const StyledComments = styled.div`
  margin-top: 100px;
  padding: 40px;
  padding-bottom: 100px;
  background: #eeeeee;

  @media(max-width: 1200px) {    
    padding: 40px 0;
  }

  @media(max-width: 1100px) {
    padding: 50px 80px 100px 80px;
    padding-bottom: 100px;
  }

  @media(max-width: 800px) {
    padding: 40px;
    padding-bottom: 100px;
  }

  @media(max-width: 500px) {
    padding: 40px 0 100px 0;
  }
`

export const Row = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media(max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
