import styled, { css } from 'styled-components'

export const StyledModal = styled.div`
  max-width: 600px;
  background: white;
  border-radius: 10px;
  padding: 10px 0;
  margin: 0 auto;
  color: white;

  svg {
    font-size: 45px;
    color: black;
    cursor: pointer;
    margin-right: 20px;
    margin-top: 5px;
  }
`

export const Header = styled.header`
  width: 100%;
  text-align: right;
`

interface DivGroupProps {
  groupLength: number
}

export const DivGroup = styled.div<DivGroupProps>`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 15px;
  padding-bottom: 15px;
  ${props => props.groupLength > 3 && css`
    overflow-y: scroll;
    height: 360px;
  `}
  /* border: 1px solid red; */

  @media(max-width: 630px) {
    ${props => props.groupLength > 1 && css`
      overflow-y: scroll;
      height: 360px;
    `}
  }
`
