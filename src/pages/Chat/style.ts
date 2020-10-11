import styled from 'styled-components'

export const StyledChat = styled.div`
  display: flex;
  height: 90.4vh;
  overflow-y: hidden;
`

interface DivGroupProps {
  open: boolean
}

export const DivGroup = styled.div<DivGroupProps>`
  width: 600px;
  background: #fafafa;
  transition: all .3s ease;

  @media(max-width: 810px) {
    position: absolute;
    right: 0;
    max-width: ${props => props.open ? '350px' : '0px'};
    overflow: hidden;
    height: 90.4vh;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
    z-index: 50;
  }
`

interface GroupsProps {
  length: number
}

export const Groups = styled.div<GroupsProps>`
  background: #fafafa;
  height: 75vh;
  width: 100%;
  ${props => props.length > 6 && 'overflow-y: scroll;'}
`

export const MoreGroup = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
  background: #FF6D00;
  border-radius: 50%;
  cursor: pointer;
  border: none;

  svg {
    font-size: 40px;
    color: white;
    margin-top: 10px;
  }
`

export const Padding = styled.div`
  padding: 0 15px;
`

export const Messages = styled.div`
  background: rgba(0,0,0,0.3);
  width: 100%;
  padding: 10px 0;

  svg {
    font-size: 45px;
    cursor: pointer;
    display: none;
    margin-left: 30px;
    position: absolute;
    top: 123px;
    

    @media(max-width: 810px) {
      display: block;
    }
    
    @media(max-width: 600px) {
      top: 110px;
    }

    @media(max-width: 550px) {
      top: 108px;
      font-size: 40px;
    }

    @media(max-width: 428px) {
      top: 115px;
      font-size: 35px;
    }
  }
`

export const HeaderGroup = styled.header`
  background: white;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  padding: 10px 20px;
`

export const DivInfo = styled.div`
  margin-bottom: -5px;
  width: 100%;

  @media(max-width: 810px) {
    margin-left: 27px;
  }
`

export const Flex = styled.div`
  display: flex;
`

interface ImageProfileGroupProps {
  url: string
}

export const ImageProfileGroup = styled.div<ImageProfileGroupProps>`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 5px 0;
  margin-top: 4px;

  @media(max-width: 810px) {
    margin-left: 20px;
  }

  @media(max-width: 550px) {
    width: 55px;
    height: 55px;
  }

  @media(max-width: 428px) {
    width: 45px;
    height: 45px;
  }
`

export const DivContent = styled.div`
  margin-left: 20px;
  flex: 2;
  width: 100%;
`

export const TitleGroup = styled.input`
  font-size: 26px;
  color: #FF6D00;
  font-weight: bold;
  width: 90%;
  border: none;
  margin-top: 6px;

  @media(max-width: 550px) {
    margin-top: 5px;
    font-size: 20px;
  }

  @media(max-width: 428px) {
    margin-top: 0;
    font-size: 18px;
  }
`

export const MembersGroup = styled.input`
  font-size: 16px;
  margin-top: 5px;
  margin-left: 5px;
  width: 90%;
  border: none;

  @media(max-width: 550px) {
    font-size: 14px;
  }

  @media(max-width: 550px) {
    font-size: 13px;
  }
`

export const DivMessages = styled.div`
  width: 100%;
  margin-top: 25px;
  height: 460px;
  overflow-y: scroll;
`

export const DivInputSendMessage = styled.div`
  width: 70%;
  background: white;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  z-index: 40;

  @media(max-width: 1030px) {
    width: 65%;
  }

  @media(max-width: 810px) {
    width: 100%;
  }
`

export const SendImage = styled.img`
  width: 24px;
  height: 20px;
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
`

export const DivSendMessage = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;

  @media(max-width: 1030px) {
    max-width: 380px;
  }

  @media(max-width: 428px) {
    margin: 0 20px;
  }
`

export const InputSendMessage = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #EFEFEF;
  color: rgba(0,0,0,0.5);
  font-size: 17px;
  padding: 8px 20px;
  height: 40px;
  resize: none;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
`
