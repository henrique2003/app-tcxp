import styled from 'styled-components'

interface StyledLocationProps {
  url: string
}

export const StyledLocation = styled.div<StyledLocationProps>`
  border-radius: 30px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  color: white;
  padding: 30px 40px;
  margin: 0 50px;
  height: 400px;
  overflow: hidden;
  transition: all .5s ease;

  @media(max-width: 1200px) {
    height: 350px;
  }

  @media(max-width: 1100px) {
    height: 330px;
  }

  @media(max-width: 1030px) {
    height: 400px;
    margin: 0 80px;
  }

  @media(max-width: 900px) {
    height: 320px;
    margin: 0 50px;
  }

  @media(max-width: 700px) {
    height: 300px;
    margin: 0 40px;
  }

  @media(max-width: 610px) {
    margin: 0 30px;
  }

  @media(max-width: 580px) {
    padding: 30px;
  }

  @media(max-width: 530px) {
    margin: 0 20px;
  }

  @media(max-width: 465px) {
    height: 400px;
    margin: 0 70px;
    padding: 30px 40px;
  }

  @media(max-width: 465px) {
    margin: 0 50px;
  }

  @media(max-width: 380px) {
    margin: 0 30px;
  }
`

interface HoverProps {
  hover: boolean
}

export const Title = styled.h5<HoverProps>`
  font-size: 25px;
  transition: margin .5s ease;
  margin-top: ${props => props.hover ? '0' : '315'}px;

  svg {
    line-height: 10px;
    color: white;
    font-size: 30px;
    margin-right: 10px;
  }

  @media(max-width: 1200px) {
    margin-top: ${props => props.hover ? '0' : '265'}px;
  }

  @media(max-width: 1100px) {
    margin-top: ${props => props.hover ? '0' : '235'}px;
  }

  @media(max-width: 1030px) {
    margin-top: ${props => props.hover ? '0' : '315'}px;
  }

  @media(max-width: 900px) {
    margin-top: ${props => props.hover ? '0' : '235'}px;
  }

  @media(max-width: 750px) {
    font-size: 23px;
  }

  @media(max-width: 700px) {
    margin-top: ${props => props.hover ? '-10' : '215'}px;
  }

  @media(max-width: 650px) {
    font-size: 22px;
  }

  @media(max-width: 465px) {
    margin-top: ${props => props.hover ? '0' : '315'}px;
  }
`

export const Text = styled.p<HoverProps>`
  margin-top: 20px;
  font-size: 18px;
  transition: opacity .8s ease;
  opacity: ${props => props.hover ? '1' : '0'};

  @media(max-width: 750px) {
    font-size: 17px;
  }

  @media(max-width: 650px) {
    font-size: 16px;
  }

  @media(max-width: 580px) {
    margin-top: 10px;
  }

  @media(max-width: 465px) {
    font-size: 17px;
  }
`
