import React, { useState } from 'react'
import { Checked } from '../../../assets'
import { StyledPlaceItem, PlaceTitle, DivCheck, Check } from './style'

interface Props {
  image: string
  name: string
  addPlaces: (place: string) => void
  removePlaces: (place: string) => void
}

const PlaceItem: React.FC<Props> = ({ image, name, addPlaces, removePlaces }) => {
  const [Selected, setSelected] = useState<boolean>(false)

  return (
    <StyledPlaceItem background={image} onClick={() => {
      setSelected(!Selected)

      if (!Selected) {
        addPlaces(name)
      } else {
        removePlaces(name)
      }
    }}>
      <DivCheck selected={Selected}>
        <Check src={Checked} alt={name}/>
      </DivCheck>
      <PlaceTitle>{name}</PlaceTitle>
    </StyledPlaceItem>
  )
}

export default PlaceItem
