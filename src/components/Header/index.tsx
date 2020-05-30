import React from 'react'

import { Container, Ul, Li, StyledHeader, Logo } from './style'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo>tcxp</Logo>
        <Ul>
          <Li>Home</Li>
          <Li>Sobre</Li>
          <Li>Dúvidas</Li>
          <Li>Cadastre-se</Li>
          <Li>Entrar</Li>
        </Ul>
      </Container>
    </StyledHeader>
  )
}

export default Header
