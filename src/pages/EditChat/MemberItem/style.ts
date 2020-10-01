import styled from 'styled-components'

interface StyledMemberItemProps {
  open: boolean
}

export const StyledMemberItem = styled.div<StyledMemberItemProps>`
  margin: 20px 0 15px 0;
  margin-top: 0;
  display: flex;
  border-top: 1px solid rgba(0,0,0,0.2);
  padding: 0 10px;
  padding-top: 20px;

  svg {
    margin-top: 5px;
    margin-left: auto;

    &[color="rgba(0,0,0,0.7)"] {
      display: ${props => props.open ? 'block' : 'none'};
    }

    &[color="#FF6D00"] {
      display: ${props => props.open ? 'none' : 'block'};
    }
  }
`

interface ImageProps {
  url: string
}

export const Image = styled.div<ImageProps>`
  width: 60px;
  height: 60px;
  background: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 0 20px;
  border-radius: 50%;
  margin-right: 20px;
`

export const Name = styled.h4`
  color: #FF6D00;
  font-size: 19px;
  font-weight: bold;
  margin-top: 4px;
`

export const Role = styled.p`
  color: rgba(0,0,0,0.8);
  margin-top: 7px;
  font-size: 16px;
`

interface OptionsProps {
  open: boolean
}

export const Options = styled.div<OptionsProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid ${props => props.open ? 'rgba(0,0,0,0.2)' : 'white'};
  overflow: hidden;
  max-height: ${props => props.open ? '100px' : '0px'};
  transition: all .4s ease;

  @media(max-width: 428px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Button = styled.button`
  text-align: center;
  color: rgba(0,0,0,0.6);
  border: none;
  background: transparent;
  font-size: 16px;
  padding: 12px 0;
  cursor: pointer;

  &:nth-child(1) {
    border-right: 1px solid rgba(0,0,0,0.6);
  }

  @media(max-width: 428px) {
    border-top: 1px solid rgba(0,0,0,0.2);

    &:nth-child(1) {
      border: none;
    }
  }
`
