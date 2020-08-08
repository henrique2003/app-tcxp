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

  @media(max-width: 1000px) {
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 30px;
  }

  @media(max-width: 600px) {
    padding: 8px 20px;
  }

  @media(max-width: 480px) {
    padding: 5px 20px;
  }

  @media(max-width: 480px) {
    padding: 3px 20px;
  }
  
  @media(max-width: 360px) {
    padding: 3px 20px;
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

    @media(max-width: 600px) {
      font-size: 40px;
      margin-top: 2px;
    }

    @media(max-width: 480px) {
      font-size: 32px;
      margin-top: 7px;
    }

    @media(max-width: 400px) {
      font-size: 30px;
      margin-top: 5px;
    }
  }
`

export const AccordionTitle = styled.p`
  font-size: 23px;
  color: rgba(0,0,0,0.7);
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  text-align: left;

  @media(max-width: 1000px) {
    font-size: 20px;
  }

  @media(max-width: 480px) {
    font-size: 17px;
  }
  
  @media(max-width: 400px) {
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
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

  @media(max-width: 600px) {
    font-size: 15px;
  }

  @media(max-width: 480px) {
    font-size: 14px;
  }
`
