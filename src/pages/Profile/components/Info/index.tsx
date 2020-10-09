import React, { useState, useEffect, SyntheticEvent } from 'react'
import { FaCheck } from 'react-icons/fa'
import { titleize } from '../../../../utils'
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

interface Props {
  onSubmitInfo: (data: IInfo) => Promise<void>
  display: boolean
  user: {
    email: string
    country?: string
    state?: string
    celphone?: string
    instagram?: string
    twitter?: string
    facebook?: string
    description?: string
    interestings?: string[]
  }
}

interface IInfo {
  email?: string
  country?: string
  state?: string
  celphone?: string
  instagram?: string
  twitter?: string
  facebook?: string
  description?: string
  interestings?: string
}

interface IFormData {
  email: string
  country?: string
  state?: string
  celphone?: string
  instagram?: string
  twitter?: string
  facebook?: string
  description?: string
  interestings?: string
}

const Info: React.FC<Props> = ({ display, user, onSubmitInfo }) => {
  const {
    email,
    country,
    state,
    celphone,
    instagram,
    twitter,
    facebook,
    description,
    interestings: interestingsUser
  } = user

  const [CanEdit, setCanEdit] = useState<boolean>(true)
  const [FormData, setFormData] = useState<IFormData>({
    email: '',
    country: '',
    state: '',
    celphone: '',
    instagram: '',
    twitter: '',
    facebook: '',
    description: '',
    interestings: ''
  })

  useEffect(() => {
    setFormData({
      email,
      country,
      state,
      celphone,
      instagram,
      twitter,
      facebook,
      description,
      interestings: interestingsUser?.map(interesting => titleize(interesting ?? '')).join(', ')
    })
  }, [email, country, state, celphone, instagram, twitter, facebook, description, interestingsUser])

  function onChange (e: SyntheticEvent): void {
    const target = e.target as HTMLInputElement
    setFormData({ ...FormData, [target.name]: target.value })
  }

  return (
    <StyledInfo>
      <Container>
        <DivTitle>
          <Title>Perfil</Title>
          <Edit type="button" changeEdit={CanEdit} hidden={display}>
            <Pencil src={ImagePencil} alt="Profile" changeEdit={CanEdit} onClick={() => setCanEdit(!CanEdit)} hidden={display}/>
            <FaCheck
              onClick={() => {
                onSubmitInfo(FormData)
                setCanEdit(!CanEdit)
              }}
            />
          </Edit>
        </DivTitle>
        <FormInfo>
          <Flex>
            <DivColumn>
              <InputItem
                title="Email"
                name="email"
                value={FormData.email}
                disabled={CanEdit}
                className="email"
                onChange={(e) => onChange(e)}
              />
              <Grid>
                <InputItem
                  title="País"
                  name="country"
                  value={FormData.country ?? 'Não preenchido'}
                  disabled={CanEdit}
                  onChange={(e) => onChange(e)}
                />
                <InputItem
                  title="Estado"
                  name="state"
                  value={FormData.state ?? 'Não preenchido'}
                  disabled={CanEdit}
                  onChange={(e) => onChange(e)}
                />
                <InputItem
                  title="Telefone"
                  name="celphone"
                  value={FormData.celphone ?? 'Não preenchido'}
                  disabled={CanEdit}
                  onChange={(e) => onChange(e)}
                />
                <InputItem
                  title="Instagram"
                  name="instagram"
                  value={FormData.instagram ?? 'Não preenchido'}
                  disabled={CanEdit}
                  onChange={(e) => onChange(e)}
                />
                <InputItem
                  title="Twitter"
                  name="twitter"
                  value={FormData.twitter ?? 'Não preenchido'}
                  disabled={CanEdit}
                  onChange={(e) => onChange(e)}
                />
                <InputItem
                  title="Facebook"
                  name="facebook"
                  value={FormData.facebook ?? 'Não preenchido'}
                  disabled={CanEdit}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
            </DivColumn>
            <DivColumn>
              <TextItem
                title="Descrição"
                name="description"
                value={FormData.description ?? 'Não preenchido'}
                disabled={CanEdit}
                onChange={(e) => onChange(e)}
              />
              <TextItem
                title="Meus interesses"
                name="interestings"
                value={FormData.interestings ?? 'Não preenchido'}
                disabled={CanEdit}
                onChange={(e) => onChange(e)}
              />
            </DivColumn>
          </Flex>
        </FormInfo>
      </Container>
    </StyledInfo>
  )
}

export default Info
