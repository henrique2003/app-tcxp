import styled from 'styled-components'

export const StyledYourMessage = styled.div`
  margin-top: 40px;
  width: 100%;
`

interface BoxMessageProps {
  length: number
}

export const BoxMessage = styled.div<BoxMessageProps>`
  background: #ffffff;
  max-width: 200px;
  ${props => props.length > 40 && 'max-width: 340px;'}
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  padding: 10px 15px;
`

export const PersonMessage = styled.p`
  color: #FF6D00;
  font-size: 19px;
  font-weight: bold;
`

export const Message = styled.p`
  color: rgba(0,0,0,0.7);
  font-size: 16px;
  margin-top: 5px;
`

export const Time = styled.p`
  font-size: 13px;
  margin-top: 7px;
  margin-left: 15px;
  color: rgba(0,0,0,0.9);
`
