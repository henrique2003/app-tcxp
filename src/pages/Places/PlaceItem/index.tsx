import React, { useState } from 'react'
import { Checked } from '../../../assets'
import { StyledPlaceItem, PlaceTitle, DivCheck, Check } from './style'

interface Props {
  image: string
  name: string
}

const PlaceItem: React.FC<Props> = ({ image, name }) => {
  const [Selected, setSelected] = useState<boolean>(false)

  return (
    <StyledPlaceItem background={image} onClick={() => setSelected(!Selected)}>
      <DivCheck selected={Selected}>
        <Check src={Checked} alt={name}/>
      </DivCheck>
      <PlaceTitle>{name}</PlaceTitle>
    </StyledPlaceItem>
  )
}

export default PlaceItem
