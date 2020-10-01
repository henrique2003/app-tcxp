import styled from 'styled-components'

export const DivPerson = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: rgba(0,0,0,0.8);
  padding: 10px;

  a {
    text-decoration: none;
  }

  @media(max-width: 520px) { 
    margin-top: 40px;
    width: 225px;
    height: 225px;
  }

  @media(max-width: 428px) {
    margin-top: 40px;
    width: 210px;
    height: 210px;
  }
`

interface ImagePersonProps {
  url: string
}

export const ImagePerson = styled.div<ImagePersonProps>`
  border: 5px solid rgba(0,0,0,0.3);
  width: 100%;
  height: 100%;
  background: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;

  &:hover div{
    transition: all .3s ease;
    opacity: 1;
  }

  div {
      background: rgba(0,0,0,0.4);
      transition: all .3s ease;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: 0;

    p {
      color: white;
      font-size: 27px;
      text-align: center;
      line-height: 210px;
      width: 100%;
      border: none;
    }
  }
`
