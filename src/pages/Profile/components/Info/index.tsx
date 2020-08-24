import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Pencil as ImagePencil } from '../../../../assets'
import { Container } from '../../../../styles'
import {
  StyledInfo,
  DivTitle,
  Title, Edit,
  Pencil,
  FormInfo,
  Flex,
  DivColumn,
  Grid
} from './style'
import { InputItem, TextItem } from './components'

const Info: React.FC = () => {
  const [CanEdit, setCanEdit] = useState<boolean>(true)

  return (
    <StyledInfo>
      <Container>
        <DivTitle>
          <Title>Perfil</Title>
          <Edit type="button" changeEdit={CanEdit}>
            <Pencil src={ImagePencil} alt="Profile" changeEdit={CanEdit} onClick={() => setCanEdit(!CanEdit)}/>
            <FaCheck onClick={() => setCanEdit(!CanEdit)}/>
          </Edit>
        </DivTitle>
        <FormInfo>
          <Flex>
            <DivColumn>
              <InputItem
                title="Email"
                name="name"
                value="henrique.de.melo.cristioglu"
                disabled={CanEdit}
              />
              <Grid>
                <InputItem
                  title="País"
                  name="country"
                  value="Brazil"
                  disabled={CanEdit}
                />
                <InputItem
                  title="Estado"
                  name="state"
                  value="São Paulo"
                  disabled={CanEdit}
                />
                <InputItem
                  title="Telefone"
                  name="celphone"
                  value="25879658"
                  disabled={CanEdit}
                />
                <InputItem
                  title="Instagram"
                  name="instagram"
                  value="@dudaflg126344564"
                  disabled={CanEdit}
                />
                <InputItem
                  title="Twitter"
                  name="twitter"
                  value="@dudaflg23"
                  disabled={CanEdit}
                />
                <InputItem
                  title="Facebook"
                  name="facebook"
                  value="DudaflgOfc"
                  disabled={CanEdit}
                />
              </Grid>
            </DivColumn>
            <DivColumn>
              <TextItem
                title="Descrição"
                name="description"
                value="Amo viajar e ler! Estou procurando pessoas que gostam de visitar museus e entender cada detalhe, assim como eu."
                disabled={CanEdit}
              />
              <TextItem
                title="Meus interesses"
                name="interest"
                value="Inglaterra, China, Estados unidos, Alemanha"
                disabled={CanEdit}
              />
            </DivColumn>
          </Flex>
        </FormInfo>
      </Container>
    </StyledInfo>
  )
}

export default Info
