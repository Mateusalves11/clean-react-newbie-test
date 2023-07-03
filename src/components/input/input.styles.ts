import styled from 'styled-components'

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 300px;
  width: 100%;
`
export const InputBase = styled.input`
    width: 100%;
    margin: 0;
    padding: 10px;
    border-radius: 30px;
    ::placeholder {
        font-size: 15px;
    }
`

export const Status = styled.span`
  position: absolute;
  right: 8px;
  cursor: help;
`
