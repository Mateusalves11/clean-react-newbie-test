import styled from 'styled-components'

export const FormLogin = styled.form`
  display: flex;
  width: 100%;
  height: 70vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`


export const ButtonLogin = styled.button`
    max-width: 300px;
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.button.background};
    &:hover{
        background-color: ${({ theme }) => theme.colors.button.hover};
    }
    transition: ease-in-out .3s;
    color: white;
`