import React, { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { BgExplore, PictureProfile } from '../../assets'
import { Container } from '../../styles'
import { DivSearch, Input, Phrase, StyledExplore, DivInput, TitlePersons, Grid } from './style'
import PersonItem from './PersonItem'

const Explore: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StyledExplore>
      <DivSearch url={BgExplore}>
        <Container>
          <Phrase>Fassa sua pesquisa e encontre um parceiro ou parceira para  a sua próxima viagem</Phrase>
          <DivInput>
            <Input type="text" placeholder="Procurando alguém ?"/>
            <BsSearch />
          </DivInput>
        </Container>
      </DivSearch>
      <Container>
        <TitlePersons>Pessoas que talvez você goste</TitlePersons>
        <Grid>
          <PersonItem image={PictureProfile}/>
          <PersonItem image={PictureProfile}/>
          <PersonItem image={PictureProfile}/>
        </Grid>
      </Container>
    </StyledExplore>
  )
}

export default Explore
