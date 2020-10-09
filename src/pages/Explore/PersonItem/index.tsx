import React from 'react'
import { Link } from 'react-router-dom'
import { DivPerson, ImagePerson } from './style'

interface Props {
  image: string
  _id: string
}

const PersonItem: React.FC<Props> = ({ image, _id }) => {
  return (
    <DivPerson>
      <Link to={`/dashboard/perfil/${_id}`}>
        <ImagePerson url={image}>
          <div>
            <p>Ver Perfil!</p>
          </div>
        </ImagePerson>
      </Link>
    </DivPerson>
  )
}

export default PersonItem
