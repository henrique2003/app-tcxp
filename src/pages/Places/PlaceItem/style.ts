import styled from 'styled-components'

interface StyledPlaceItemProps {
  background: string
}

export const StyledPlaceItem = styled.div<StyledPlaceItemProps>`
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: 50% 50%;
  margin: 20px auto;
  border-radius: 40px;
  width: 250px;
  -webkit-box-shadow: 1px 3px 11px 0px rgba(0,0,0,0.7);
  -moz-box-shadow: 1px 3px 11px 0px rgba(0,0,0,0.7);
  box-shadow: 1px 3px 11px 0px rgba(0,0,0,0.7);
  cursor: pointer;

  @media(max-width: 1200px) {
    width: 200px;
  }
  
  @media(max-width: 750px) {
    width: 175px;
  }
  
  @media(max-width: 650px) {
    width: 160px;
  }

  @media(max-width: 600px) {
    width: 220px;
  }
  
  @media(max-width: 400px) {
    width: 175px;
  }
`

export const PlaceTitle = styled.p`
  color: white;
  font-size: 19px;
  text-align: center;
  font-weight: bold;
  margin-top: 140px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  
  @media(max-width: 1200px) {
    margin-top: 120px;
  }
  
  @media(max-width: 750px) {
    margin-top: 90px;
  }
  
  @media(max-width: 650px) {
    margin-top: 80px;
  }

  @media(max-width: 600px) {
    margin-top: 120px;
  }

  @media(max-width: 400px) {
      margin-top: 90px;
  }
`

interface DivCheckProps {
  selected: boolean
}

export const DivCheck = styled.div<DivCheckProps>`
  text-align: center;
  width: 50px;
  height: 50px;
  background: #FF6D00;
  margin-top: -20px;
  margin-left: auto;
  padding: 20px;
  border-radius: 30px;
  opacity: ${props => props.selected ? '1' : '0'};
  transition: all .2s ease;
`

export const Check = styled.img`
  width: 20px;
  height: 15px;
  margin-bottom: 10px !important;
  margin-left: -4px;
`
