import styled from 'styled-components'

export const StyledEvaluation = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
`

export const Title = styled.h3`
  font-size: 35px;
  font-weight: bold;
`

export const Subtitle = styled.p`
  color: #808080;
  font-weight: bold;
  font-size: 19px;
  margin-top: 7px;
  margin-left: 1px;
`

export const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
