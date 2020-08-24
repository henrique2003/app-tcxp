import React from 'react'
import { DivTitleItem, SpanTitleItem, TitleItem, AnswerRow, Answer, TextArea } from './style'

interface Props {
  title: string
  name: string
  value: string
  disabled: boolean
}

const TextItem: React.FC<Props> = ({ title, name, value, disabled }) => {
  return (
    <>
      <DivTitleItem>
        <SpanTitleItem></SpanTitleItem><TitleItem>{title}</TitleItem>
      </DivTitleItem>
      <AnswerRow>
        <Answer>R:</Answer>
        <TextArea
          name={name}
          disabled={disabled}
          defaultValue={value}
        ></TextArea>
      </AnswerRow>
    </>
  )
}

export default TextItem
