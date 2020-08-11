import styled from 'styled-components'

interface StyledWrapperProps {
  background: string
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  background: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%, 50%;
  color: white;
  padding: 60px 0;
  margin-bottom: 30px;

  h4 {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    color: rgba(255,255,255,0.83);
  }

  @media(max-width: 1000px) {
    h4 {
      font-size: 24px;
    }

    p {
      font-size: 19px;
    }
  }

  @media(max-width: 768px) {
    h4 {
      font-size: 23px;
    }

    p {
      font-size: 17px;
    }
  }

  @media(max-width: 428px) {
    h4 {
      font-size: 22px;
    }

    p {
      font-size: 16px;
    }
  }
`
