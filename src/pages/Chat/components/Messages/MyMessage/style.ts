import styled from 'styled-components'

export const StyledMyMessage = styled.div`
  margin-top: 40px;
  width: 100%;
`

interface BoxMessageProps {
  length: number
}

export const BoxMessage = styled.div<BoxMessageProps>`
  background: #FF6D00;
  max-width: 200px;
  ${props => props.length > 40 && 'max-width: 340px;'}
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  padding: 10px 15px;
  margin-left: auto;
`

export const Message = styled.p`
  color: rgba(255,255,255,0.9);
  font-weight: bold;
  font-size: 17px;
  margin-left: 5px;
`

export const Time = styled.p`
  font-size: 13px;
  margin-top: 7px;
  margin-right: 15px;
  color: rgba(0,0,0,0.9);
  text-align: right;
`
