import React from 'react'
import { StyledMyMessage, BoxMessage, Message, Time } from './style'

interface Props {
  message: string
  time?: string
}

const MyMessage: React.FC<Props> = ({ message, time }) => {
  return (
    <StyledMyMessage>
      <BoxMessage length={message.length}>
        <Message>{message}</Message>
      </BoxMessage>
      {/* <Time>{time}</Time> */}
    </StyledMyMessage>
  )
}

export default MyMessage
