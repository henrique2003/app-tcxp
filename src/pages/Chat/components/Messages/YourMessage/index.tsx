import React from 'react'
import { StyledYourMessage, BoxMessage, PersonMessage, Message, Time } from './style'

interface Props {
  messagePerson: string
  message: string
  time?: string
}

const YourMessage: React.FC<Props> = ({ message, messagePerson, time }) => {
  return (
    <StyledYourMessage>
      <BoxMessage length={message.length}>
        <PersonMessage>{messagePerson}</PersonMessage>
        <Message>{message}</Message>
      </BoxMessage>
      {/* <Time>{time}</Time> */}
    </StyledYourMessage>
  )
}

export default YourMessage
