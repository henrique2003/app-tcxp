import React, { useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import { StyledHeader } from './style'

const Header: React.FC = () => {
  const [NavShow, setNavShow] = useState<boolean>(false)

  return (
    <StyledHeader navShow={NavShow}>
      <div className="navbar_web">
        <div className="toggle_show" onClick={() => setNavShow(!NavShow)}>
          <IoMdClose />
          <div className="align_justify"></div>
          <div className="align_justify"></div>
          <div className="align_justify"></div>
        </div>
        <div className="container">
          <h3>tcxp</h3>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Dúvidas</li>
            <li>Cadastre-se</li>
            <li>Entrar</li>
          </ul>
        </div>
      </div>
      <div className="navbar_mobile">
        <h3>tcxp</h3>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Dúvidas</li>
          <li>Cadastre-se</li>
          <li>Entrar</li>
        </ul>
      </div>
    </StyledHeader>
  )
}

export default Header
