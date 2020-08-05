import React, { useState, useRef } from 'react'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import { StyleAccordion, AccordionBody, AccordionContent, AccordionText, AccordionTitle } from './style'

interface Props {
  title: string
  content: string
}

const Accordion: React.FC<Props> = ({ title, content }) => {
  const [Active, setActive] = useState<boolean>(false)
  const [MaxHeight, setMaxHeight] = useState<string>('0px')

  const contentt = useRef<HTMLHeadingElement>(null)

  function setHeigth (): void {
    if (contentt.current) {
      setActive(!Active)
      if (Active) {
        setMaxHeight('0px')
      } else {
        setMaxHeight(`${contentt.current.scrollHeight}px`)
      }
    }
  }

  return (
    <StyleAccordion onClick={setHeigth}>
      <AccordionBody>
        <AccordionTitle>{title}</AccordionTitle>
        {Active ? <IoMdClose /> : <IoIosArrowDown />}
      </AccordionBody>
      <AccordionContent active={Active} maxHeight={MaxHeight} ref={contentt}>
        <AccordionText dangerouslySetInnerHTML={{ __html: content }}/>
      </AccordionContent>
    </StyleAccordion>
  )
}

export default Accordion
