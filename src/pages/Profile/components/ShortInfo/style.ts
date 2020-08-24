import styled from 'styled-components'

export const StyledShortInfo = styled.div`
  width: 100%;
  margin-top: 40px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`

export const DivContent = styled.div`
  margin-right: 20px;
  text-align: center;

  &:nth-child(2) {
    margin-right: 0;
    margin-left: 20px;
  }
`

export const Content = styled.p`
  font-size: 28px;

  &:nth-child(2) {
    margin-top: 15px;
  }

  @media(max-width: 600px) {
    font-size: 27px;
  }

  @media(max-width: 428px) {
    font-size: 25px;
  }
`
