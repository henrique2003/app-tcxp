import styled from 'styled-components'

export const Trace = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  width: 100%;
  height: 1px;
`

export const StyledEditChat = styled.div`
  margin-top: 40px;

  svg {
    font-size: 55px;
    cursor: pointer;
  }
`

export const DivTitle = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.h3`
  font-size: 35px;
  font-weight: bold;
`

interface EditProps {
  changeEdit: boolean
}

export const Edit = styled.button<EditProps>`
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
