import styled from 'styled-components'

interface StyledWelcome {
  background: string
}

export const StyledWelcome = styled.div<StyledWelcome>`
  width: 100%;
  background: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding-top: 80px;
  padding-bottom: 70px;

  @media(max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 60px;
  }
`

interface ImageProfileProps {
  image: string
}

export const ImageProfile = styled.div<ImageProfileProps>`
  width: 250px;
  height: 250px;
  margin: 30px auto;
  border-radius: 50%;
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-bottom: 30px;

  @media(max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`

interface ChangeProps {
  changed: boolean
  lengthName?: number
}

export const DivName = styled.div<ChangeProps>`
  display: flex;
  justify-content: center;

  svg {
    font-size: 35px;
    color: white;
    margin-left: 25px;
    cursor: pointer;
    transition: all .2s ease;
    display: ${props => props.changed ? 'block' : 'none'};

    &:hover {
      color: #FF6E00;
      transition: all .2s ease;
    }
  }
`

export const Salutation = styled.p`
  font-size: 27px;
  font-weight: bold;
  color: white;

  @media(max-width: 600px) {
    font-size: 25px;
  }
`

export const Name = styled.input<ChangeProps>`
  font-size: 27px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.changed ? 'white' : 'transparent'};
  max-width: ${props => props.lengthName ? props.lengthName * 15 : '15'}px;
  margin-left: 10px;
  cursor: default;

  @media(max-width: 600px) {
    font-size: 25px;
  }
`

export const PencilIcon = styled.img<ChangeProps>`
  width: 35px;
  height: 35px;
  margin-left: 25px;
  cursor: pointer;
  display: ${props => props.changed ? 'none' : 'block'};

  @media(max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`
