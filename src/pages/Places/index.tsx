import React from 'react'
import { GrClose } from 'react-icons/gr'
import { StyledPlaces, Title, TitleSpan, Paragrath, Row } from './style'
import PlaceItem from './PlaceItem'
import { Usa } from '../../assets'

const Places: React.FC = () => {
  return (
    <StyledPlaces>
      <GrClose />
      <Title>Há algum tópicos que você tem <TitleSpan>interesse</TitleSpan>?</Title>
      <Paragrath>Escolha os tópicos que mais te agradam para colocarmos no seu perfil</Paragrath>
      <Row>
        <PlaceItem name="EUA" image={Usa}/>
        <PlaceItem name="EUA" image={Usa}/>
        <PlaceItem name="EUA" image={Usa}/>
        <PlaceItem name="EUA" image={Usa}/>
        <PlaceItem name="EUA" image={Usa}/>
      </Row>
    </StyledPlaces>
  )
}

export default Places
