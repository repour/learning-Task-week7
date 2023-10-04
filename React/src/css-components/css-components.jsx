import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1900px;
  padding: 2rem 4rem;  

  @media all and (max-width: 768px) {
    max-width: auto;
    width: 100%;
    padding: 0 2rem;
  }
`
export const FlexCon = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const HeadList = styled.ul`
    list-style: none;
    display: flex;
    margin-left: 12rem;
    gap: 1.5rem;
    @media all and (max-width: 1050px) {
    margin-left: auto;
    margin-right: auto;

  }
`
export const HeadItem = styled.li`
    font-size: 1rem;
    font-weight: 600;
`
export const H1 = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin: 3rem 0;
`
export const P500 = styled.p`
  font-size: 1rem;
  font-weight: 500;
`
export const OrangeP = styled.p`
  color: #F48E28;
  font-weight: 500;
`
export const TitleH2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
`
export const ProButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin: auto;
padding: 1rem 2rem;
font-size: 1rem;
font-weight: 500;
background: linear-gradient(180deg, #EFAB68 0%, #F48E28 100%);
border: none;
color: white;
border-radius: 50px;
`
export const ProButImg = styled.img`
background-color: white;
width: 20%;
border-radius: 100%;
padding: 0.5rem;
`
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`




//////////////////////////////////////////////////////////////


export const FormControl = styled.div`
    padding: 0 0 1rem;
    border-bottom: ${(props) => props.noBorder ? 'none' : '1px solid #ababab'};
    margin-bottom: 1rem;
`

export const InputLabel = styled.label`
  color: #555;
  display: block;
  margin-bottom: .5rem;
`

export const Input = styled.input`
  padding: 1rem 2rem;
  border: 1px solid #ababab;
  width: 100%;
  border-radius: .5rem;
  outline: none;
`

export const SubmitButton = styled.button`
  background-color: ${(props) => props.bgColor ?? '#28289f'};
  transition: background-color .25s ease-in;
  border-radius: 0.5rem;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.bgHoverColor ?? '#3838b5'};
    transition: background-color .25s ease-in;
  }

  &:disabled {
    background-color: #eee;
    color: #666;
    cursor: not-allowed;
  }
`
