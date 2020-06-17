import styled from 'styled-components'

export const StylesMedia = styled.div`
  margin-bottom: 30px;
  display: flex;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
    color: #F27F1B;
    font-size: 17px;
    line-height: 30px;
  }
  
  
  /* Celphones */
  @media(max-width: 500px) {
    margin-bottom: 20px;

    img {
      width: 25px;
      height: 25px;
    }

    span {
      font-size: 16px;
      line-height: 22px;
    }
  }
`
