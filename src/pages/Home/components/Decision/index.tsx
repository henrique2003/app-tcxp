import React from 'react'
import BackImage from '../../../../assets/images/home/back_decision.png'
import { StyledDecision } from './style'

const Decision: React.FC = () => {
  return (
    <StyledDecision image={BackImage}>
      <div className="content">
        <h4>Você decide o que fazer!</h4>
        <p>Você pode escolher a qualquer hora e em qualquer lugar sem  depender de ninguém para te aconpanhar nesta jornada</p>
        <button>Cadastre-se</button>
      </div>
    </StyledDecision>
  )
}

export default Decision
