import styled from 'styled-components'

export const StyledWrapper = styled.div`
  background: #e6e5e5;
  color: white;
  padding: 80px 0;
  color: rgba(0,0,0,0.7);

  h4 {
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 400;
  }

  p {
    font-size: 20px;
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
