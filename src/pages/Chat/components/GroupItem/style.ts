import styled from 'styled-components'

export const StyledMemberItem = styled.div`
  margin: 20px 0 15px 0;
  margin-top: 5px;
  display: flex;
  padding: 10px 10px;
  padding-bottom: 15px;
  background: white;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.10);
  cursor: pointer;
  transition: background .2s ease;

  &:hover {
    background: rgba(0,0,0,0.04);
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
  font-size: 17px;
`

export const Time = styled.p`
  color: rgba(0,0,0,0.9);
  margin-left: auto;
  margin-right: 20px;
  margin-top: 7px;
  font-size: 15px;
`
