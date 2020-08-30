import styled from 'styled-components'

export const StyledGroup = styled.div`
  display: flex;
  padding-top: 15px;
  margin-top: 20px;
  border-top: 1px solid #808080;

  &:nth-child(1) {
    border: none;
    padding-top: 0;
    margin-top: 0;
  }

  @media(max-width: 630px) {
    flex-direction: column;
    text-align: center;
    margin: 0 20px;
    margin-top: 20px;
    padding-top: 25px;
  }
`

interface ImageProps {
  url: string
}

export const Image = styled.div<ImageProps>`
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 25px;

  @media(max-width: 630px) {
    margin: 0 auto;
  }
`

export const DivInfo = styled.div`
  margin-right: 30px;
  margin-top: 15px;

  @media(max-width: 630px) {
    margin: 0;
    margin-top: 15px;
  }
`

export const TitleGroup = styled.p`
  font-size: 20px;
  color: #FF6D00;
  margin-bottom: 10px;
`

export const DescriptionGroup = styled.p`
  font-size: 18px;
  color: black;
`

export const Button = styled.button`
  color: white;
  border: none;
  border-radius: 5px;
  background: #FF6D00;
  text-align: center;
  padding: 7px 40px !important;
  height: 40px;
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
  border: 1px solid white;
  transition: all .3s ease;

  &:hover {
    color: #FF6D00;
    background: white;
    border: 1px solid #FF6D00;
    transition: all .3s ease;
  }

  @media(max-width: 630px) {
    margin: 0 auto;
    margin-top: 20px;
  }
`
