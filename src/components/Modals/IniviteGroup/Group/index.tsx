import React from 'react'
import {
  StyledGroup,
  Image,
  DivInfo,
  TitleGroup,
  DescriptionGroup,
  Button
} from './style'

interface Props {
  id: string
  image: string
  title: string
  description: string
  invite: (group: string) => Promise<void>
}

const Group: React.FC<Props> = ({ image, title, description, id, invite }) => {
  const handleDescription = (description: string): string => {
    let shortDescription = ''
    if (description.length > 20) {
      for (let index = 0; index < 20; index++) {
        shortDescription += description[index]
      }
      shortDescription += '...'
    } else {
      shortDescription = description
    }

    return shortDescription
  }

  return (
    <StyledGroup>
      <Image url={image}/>
      <DivInfo>
        <TitleGroup>{title}</TitleGroup>
        <DescriptionGroup>{handleDescription(description)}</DescriptionGroup>
      </DivInfo>
      <Button type="button" onClick={async () => await invite(id)}>Convidar</Button>
    </StyledGroup>
  )
}

export default Group
