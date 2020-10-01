import React from 'react'
import { GrClose } from 'react-icons/gr'
import { StyledPlaces, Title, TitleSpan, Paragrath, Row, Button, DivButton } from './style'
import PlaceItem from './PlaceItem'
import { Usa, Amsterdan, Germany, Italy, Uk, Japan, Chinese, Turky, Indonesia, Irland, SaaraDesert, Dubai, ArrowRight } from '../../assets'

const Places: React.FC = () => {
  return (
    <StyledPlaces>
      <GrClose />
      <Title>Há algum tópicos que você tem <TitleSpan>interesse</TitleSpan>?</Title>
      <Paragrath>Escolha os tópicos que mais te agradam para colocarmos no seu perfil</Paragrath>
      <Row>
        <PlaceItem name="EUA" image={Usa}/>
        <PlaceItem name="Amsterdan" image={Amsterdan}/>
        <PlaceItem name="Amelanha" image={Germany}/>
        <PlaceItem name="Itália" image={Italy}/>
        <PlaceItem name="Reino Unido" image={Uk}/>
        <PlaceItem name="Japão" image={Japan}/>
        <PlaceItem name="China" image={Chinese}/>
        <PlaceItem name="Turquia" image={Turky}/>
        <PlaceItem name="Indonesia" image={Indonesia}/>
        <PlaceItem name="Irlanda" image={Irland}/>
        <PlaceItem name="Saara" image={SaaraDesert}/>
        <PlaceItem name="Dubai" image={Dubai}/>
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
