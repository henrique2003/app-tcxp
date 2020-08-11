import React from 'react'
import { Container } from '../../../../styles'
import { AboutWrapper } from '../../../../assets'
import { StyledWrapper } from './style'

const Wrapper: React.FC = () => {
  return (
    <StyledWrapper background={AboutWrapper}>
      <Container>
        <h4>Você decide o que fazer!</h4>
        <p>Você pode escolher a qualquer hora e em qualquer lugar sem  depender de ninguém para te aconpanhar nesta jornada, Você pode escolher a qualquer hora e em qualquer lugar sem  depender de ninguém para te aconpanhar nesta jornada.</p>
      </Container>
    </StyledWrapper>
  )
}

export default Wrapper
