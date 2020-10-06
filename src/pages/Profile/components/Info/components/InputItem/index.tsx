import React, { SyntheticEvent } from 'react'
import { DivTitleItem, SpanTitleItem, TitleItem, AnswerRow, Answer, Input } from './style'

interface Props {
  title: string
  name: string
  value: string
  disabled: boolean
  onChange?: (e: SyntheticEvent) => void
  className?: string
}

const InputItem: React.FC<Props> = ({ title, name, value, disabled, onChange, className }) => {
  return (
    <div>
      <DivTitleItem>
        <SpanTitleItem></SpanTitleItem><TitleItem>{title}</TitleItem>
      </DivTitleItem>
      <AnswerRow>
        <Answer>R:</Answer>
        <Input
          type="text"
          name={name}
          value={value}
          disabled={disabled}
          length={value.length}
          onChange={onChange}
          className={className}
        />
      </AnswerRow>
    </div>
  )
}

export default InputItem
