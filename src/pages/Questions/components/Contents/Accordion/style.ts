import styled from 'styled-components'

export const StyleAccordion = styled.div`
  margin-top: 25px;
  margin-right: 50px;
  padding: 20px 35px;
  background: white;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
  border-radius: 5px;

  &:nth-child(1) {
    margin-top: 0;
  }
`

export const AccordionBody = styled.button`
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 45px;

  svg {
    font-size: 45px;
    color: #F27F1B;
  }
`

export const AccordionTitle = styled.p`
  font-size: 23px;
  color: rgba(0,0,0,0.7);
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`

interface AccordionContentProps {
  active: boolean
  maxHeight: string
}

export const AccordionContent = styled.div<AccordionContentProps>`
  overflow: hidden;
  transition: all .4s ease;
  max-height: ${({ maxHeight }) => maxHeight};
  margin-top: ${({ maxHeight }) => maxHeight === '0px' ? '0' : '20px'};
  margin-bottom: ${({ maxHeight }) => maxHeight === '0px' ? '0' : '10px'};
`

export const AccordionText = styled.div`
  color: #808080;
  font-size: 'Roboto', sans-serif;
`
