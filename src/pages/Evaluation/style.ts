import styled from 'styled-components'

export const StyledEvaluation = styled.div`
  padding: 50px 0;
  background: #fafafa;
  width: 100%;
  
  .not_found {
    font-size: 19px;
    color: #808080;
    width: 100%;
    margin: 0 20px;
    margin-top: 80px;
    text-align: center;

    @media(max-width: 600px) {
      margin-top: 60px;
    }
  }
`

export const Title = styled.h2`
  font-size: 35px;
  color: #000000c8;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`

export const Subtitle = styled.p`
  font-size: 18px;
  color: #808080c5;
  text-align: center;
  margin-top: 15px;
`

export const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export const DivEvaluation = styled.div`
  margin-top: 50px;
  margin-right: 15px;

  @media (max-width: 1100px) {
    margin-right: 0;
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 30px 40px;
  padding-bottom: 70px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  margin-top: 80px;
  background: white;
`

export const Message = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 70px;
  margin-top: 10px;
  
  @media(max-width: 740px) {
    margin-bottom: 20px;
  }
`

export const GridForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const Area = styled.textarea`
  font-size: 18px;
  height: 150px;
  color: rgba(0, 0, 0, 0.7);
  padding: 20px 30px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
  resize: none;

  @media(max-width: 800px) {
    font-size: 17px;
  }
  
  @media(max-width: 740px) {
    margin-top: 20px;
  }
`

export const DivStar = styled.div`
  text-align: center;
  font-size: 55px;

  @media(max-width: 800px) {
    font-size: 45px;
  }
`

export const Star = styled.div`
  width: 100%;
  text-align: center;
`

export const Submit = styled.button`
  background: #f27f1b;
  padding: 5px 28px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease;
  display: block;
  margin: 0 auto;
  margin-top: 10px;

  @media(max-width: 740px) {
    display: none;
    margin: 0;
    margin-bottom: -90px;
    margin-top: 30px;
    margin-left: auto !important;
    margin-right: -25px;
  }

  &:hover {
    transform: translateX(5px);
    transition: all 0.4s ease;
  }

  &:nth-child(1) {
    display: none;

    @media(max-width: 740px) {
      display: block;
    }
  }

  img {
    width: 38px;
    margin-top: 2px;
  }
`
