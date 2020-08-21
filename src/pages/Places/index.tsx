import React from 'react'
import { GrClose } from 'react-icons/gr'
import { StyledPlaces, Title, TitleSpan, Paragrath, Row, Button, DivButton } from './style'
import PlaceItem from './PlaceItem'
import { Usa, ArrowRight } from '../../assets'

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
      <DivButton>
        <Button>
          <img src={ArrowRight} alt="Button"/>
        </Button>
      </DivButton>
    </StyledPlaces>
  )
}

export default Places
