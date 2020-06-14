import styled from 'styled-components'

export const StyledModal = styled.div`
  position: relative;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

interface BackgroundProps {
  image: string
}

export const BackgroundLeft = styled.div<BackgroundProps>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 91.5vh;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`
