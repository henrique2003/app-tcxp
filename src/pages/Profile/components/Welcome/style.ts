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
  padding-bottom: 50px;

  @media(max-width: 600px) {
    padding-top: 50px;
    padding-bottom: 60px;
  }
`

interface HiddenProps {
  hidden: boolean
}

export const ImageLabel = styled.label<HiddenProps>`
  display: ${props => props.hidden ? 'none' : 'block'};
  cursor: pointer;
  text-align: center;
  margin: 30px auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  transition: all .3s ease;
  background: rgba(0,0,0,0.3);
  opacity: 0;

  svg {
    color: white;
    font-size: 70px;
    margin-top: 90px;
  }

  &:hover {
    opacity: 1;
    transition: all .3s ease;
  }
  
  @media(max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`

export const InputImage = styled.input`
  display: none;
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
  hidden: boolean
}

export const DivName = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 35px;
    color: white;
    margin-left: 25px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      color: #FF6E00;
      transition: all .2s ease;
    }
  }
`

export const Salutation = styled.p<HiddenProps>`
  display: ${props => !props.hidden ? 'block' : 'none'};
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
  max-width: ${props => props.lengthName ? props.lengthName * 16 : '15'}px;
  margin-left: 10px;
  cursor: default;
  display: block;

  @media(max-width: 600px) {
    font-size: 25px;
  }
`

export const PencilIcon = styled.img<ChangeProps>`
  width: 35px;
  height: 35px;
  margin-left: 25px;
  cursor: ${props => props.hidden ? 'normal' : 'pointer'};
  display: ${props => props.changed ? 'none' : 'block'};

  @media(max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`

export const Submit = styled.button<ChangeProps>`
  border: none;
  background: transparent;
  display: ${props => props.changed ? 'block' : 'none'};
  height: 35px;
`

export const Flex = styled.div<HiddenProps>`
  display: ${props => props.hidden ? 'flex' : 'none'};
  justify-content: center;
  width: 100%;
  margin-top: 30px;

  @media(max-width: 480px) {
    flex-wrap: wrap;
  }

  a {
    text-decoration: none;
    padding: 8px 30px;
    margin: 0 10px;
    color: white;
    font-size: 19px;
    border-radius: 5px;
    text-align: center;
    transition: all .2s ease;

    &:nth-child(1) {
      background: #EE3C3C;

      &:hover {
        background: #d43636;
        transition: all .2s ease;
      }
    }

    &:nth-child(2) {
      background: #808080;
      padding: 8px 45px;

      &:hover {
        background: #6f6f6f;
        transition: all .2s ease;
      }
    }

    @media(max-width: 530px) {
      font-size: 18px;
      padding: 7px 25px;

      &:nth-child(2) {
        padding: 7px 40px;
      }
    }

    @media(max-width: 480px) {
      margin-top: 15px;
    }
  }
`

export const Invite = styled.button`
  padding: 8px 35px;
  margin: 0 10px;
  color: white;
  font-size: 19px;
  border: none;
  border-radius: 5px;
  text-align: center;
  background: #FF6D00;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background: #e86402;
    transition: all .2s ease;
  }

  @media(max-width: 530px) {
    font-size: 18px;
    padding: 7px 30px;
  }

  @media(max-width: 480px) {
    padding: 7px 107px;
    margin-top: 15px;
  }
`
