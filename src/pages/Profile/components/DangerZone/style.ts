import styled from 'styled-components'

export const StyledDangerZone = styled.div`
  margin-top: 130px;
  margin-bottom: 40px;

  @media(max-width: 650px) {
    margin-top: 90px;
  }
`

export const Title = styled.h3`
  font-size: 35px;
  font-weight: bold;
  color: #EE3C3C;
`

export const Form = styled.form`
  margin-top: 25px;
  width: 100%;
  padding: 30px 40px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
`

export const Aks = styled.h4`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
  color: rgba(0,0,0,0.8);
`

export const Line = styled.div`
  background: #eeeeee;
  height: 1px;
  width: 100%;
  margin-bottom: 20px;
`

export const Message = styled.p`
  color: #808080;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 30px;
`

export const Button = styled.button`
  background: #EE3C3C;
  padding: 8px 35px;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
`
