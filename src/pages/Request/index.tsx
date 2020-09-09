import React from 'react'
import { PictureProfile } from '../../assets'
import RequestItem from './RequestItem'
import { Title, Grid, StyledRequest } from './style'

const Request: React.FC = () => {
  return (
    <StyledRequest>
      <Title>Suas Solicitações</Title>
      <Grid>
        <RequestItem image={PictureProfile} name="Lucas Montano"/>
        <RequestItem image={PictureProfile} name="Lucas Montano"/>
        <RequestItem image={PictureProfile} name="Lucas Montano"/>
        <RequestItem image={PictureProfile} name="Lucas Montano"/>
      </Grid>
    </StyledRequest>
  )
}

export default Request
