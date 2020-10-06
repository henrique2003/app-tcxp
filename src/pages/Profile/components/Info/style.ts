import styled from 'styled-components'

export const StyledInfo = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`

export const DivTitle = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 25px;
`

export const Title = styled.h3`
  font-size: 35px;
  font-weight: bold;
`

interface EditProps {
  changeEdit: boolean
  hidden: boolean
}

export const Edit = styled.button<EditProps>`
  display: ${props => props.hidden ? 'none' : 'block'};
  margin-top: 3px;
  margin-left: 25px;
  border: none;
  background: #FF6D00;
  width: 40px;
  height: 40px;
  padding: 7px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);

  svg {
    color: white;
    font-size: 25px;
    margin-left: 1px;
    margin-top: 1px;
    display: ${props => props.changeEdit ? 'none' : 'block'};
  }
`

export const Pencil = styled.img<EditProps>`
  width: 100%;
  height: 100%;
  display: ${props => props.changeEdit ? 'block' : 'none'};
`

export const FormInfo = styled.form`
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
  padding: 20px 70px;
  padding-bottom: 60px;

  @media(max-width: 850px) {
    padding: 20px 50px;
    padding-bottom: 60px;
  }
  
  @media(max-width: 500px) {
    padding: 10px 40px;
    padding-bottom: 50px;
  }
  
  @media(max-width: 400px) {
    padding: 10px 30px;
    padding-bottom: 50px;
  }
`

export const Flex = styled.div`
  display: flex;

  @media(max-width: 1150px) {
    flex-direction: column-reverse;
  }
`

export const DivColumn = styled.div`
  flex: 1;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media(max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
