import styled from 'styled-components'

export const Trace = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  width: 100%;
  height: 1px;
`

export const StyledEditChat = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  margin-top: 40px;

  svg {
    font-size: 65px;
    cursor: pointer;
  }

  @media(max-width: 1250px) {
    margin: 0 30px;
    margin-top: 40px;
  }

  @media(max-width: 600px) {
    svg {
      display: none;
    }
  }
`

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -55px;

  @media(max-width: 600px) {
    margin-top: 20px;
  }
`

interface ChangeProps {
  changed: boolean
  lengthName?: number
}

export const Title = styled.input<ChangeProps>`
  font-size: 35px;
  font-weight: bold;
  color: rgba(0,0,0,0.7);
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.changed ? 'white' : 'rgba(0,0,0,0.7)'};
  max-width: ${props => props.lengthName ? props.lengthName * 18 : '15'}px;
  margin-left: 10px;
  cursor: default;

  @media(max-width: 900px) {
    font-size: 33px;
  }

  @media(max-width: 600px) {
    font-size: 31px;
    margin-left: 0;
  }
`

interface EditProps {
  changeEdit: boolean
}

export const Edit = styled.button<EditProps>`
  margin-top: 3px;
  margin-right: 20px;
  border: none;
  background: #FF6D00;
  width: 40px;
  height: 40px;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);

  svg {
    color: white;
    font-size: 25px;
    margin-left: 1px;
    margin-top: 1px;
    display: ${props => props.changeEdit ? 'block' : 'none'};
  }

  @media(max-width: 600px) {
    width: 35px;
    height: 35px;

    svg {
      font-size: 20px;
    }
  }
`

export const Pencil = styled.img<EditProps>`
  width: 100%;
  height: 100%;
  display: ${props => props.changeEdit ? 'none' : 'block'};
`

export const DivInfo = styled.div`
  max-width: 537px;
  margin: 0 auto;
  margin-top: 80px;

  @media(max-width: 600px) {
    margin: 0 40px;
    margin-top: 60px;
  }

  @media(max-width: 500px) {
    margin: 0 20px;
    margin-top: 60px;
  }

  @media(max-width: 500px) {
    margin: 0 10px;
    margin-top: 60px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;

  @media(max-width: 600px) {
    flex-direction: column;
  }
`

interface DivImageProps {
  url: string
}

export const DivImage = styled.div<DivImageProps>`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-right: 25px;
  margin-top: 10px;
  background: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  input {
    display: none;
  }

  @media(max-width: 600px) {
    margin: 0 auto;
  }
`

export const DivImageHover = styled.label`
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: rgba(0,0,0,0.4);
  opacity: 0;
  transition: all .3s ease;
  cursor: pointer;
  text-align: center;

  svg {
    font-size: 100px;
    margin-top: 5px;
    color: red;
  }

  &:hover {
    opacity: 1;
    transition: all .3s ease;
  }
`

export const DivArea = styled.div`
  width: 400px;
  
  @media(max-width: 600px) {
    width: 100%;
    margin-top: 20px;
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
  display: block;
  font-size: 22px;
`

export const TextArea = styled.textarea`
  padding: 10px;
  resize: none;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  color: rgba(0,0,0,0.8);
  font-size: 18px;
  height: 80px;
  width: 100%;
  background: white;
  border: 1px solid rgba(0,0,0,0.5);
  transition: border .2s ease;

  &:disabled {
    border: 1px solid rgba(0,0,0,0.2);
  }
`

export const Members = styled.div`
  width: 100%;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  margin-top: 50px;
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
`

export const MemberTitle = styled.p`
  font-size: 19px;
  color: rgba(0,0,0,0.7);
  font-weight: bold;
  margin: 20px 0 0 30px;
  margin-bottom: 15px;
`

export const DivOutGroup = styled.div`
  max-width: 400px;
  margin: 50px auto;
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const ButtonOutGroup = styled.button`
  border: none;
  background: transparent;
  border-bottom: 1px solid #EE3C3Cc8;
  font-size: 19px;
  color: #EE3C3Cc9;
  padding-bottom: 2px;
  text-align: center;
  width: 130px;
  margin: 0 auto;
  cursor: pointer;
`
