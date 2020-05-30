import styled from 'styled-components'

export const Li = styled.li`
  margin: 0 20px;
  padding: 0;
  font-family: "Lato", sans-serif;
  font-size: 19px;
  height: 35px;
  line-height: 35px;

  &:nth-child(5) {
    background: #f27f1b;
    width: 100px;
    text-align: center;
    border-radius: 5px;
    color: white;
  }

  @media (max-width: 900px) {
    margin-top: 10px;

    &:nth-child(5) {
      margin-top: 15px;
    }
  }
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 6px;

  @media (max-width: 900px) {
    position: absolute;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.7);
    top: 190px;
  }
`

export const Logo = styled.h3`
  display: flex;
  font-family: "Lato", sans-serif;
  font-size: 45px;
  letter-spacing: 0px;
  color: #f27f1b;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 50px;
  }
`

export const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0;
  z-index: 9;

  @media (max-width: 900px) {
    position: relative;
    height: 100vh;
    background: rgba(0 ,0 ,0, 0.5);
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    background: white;
    flex-direction: column;
    max-width: 350px;
    height: 100vh;
    padding: 40px;
  }
`
