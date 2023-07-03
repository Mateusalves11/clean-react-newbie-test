'use client'
import { AiFillInfoCircle } from 'react-icons/ai'
import { InputWrap, InputBase, Status } from './input.styles'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = ({ onChange, name, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getTitle = (): string => {
    return ''
  }

  return (
    <InputWrap>
      <InputBase {...props} data-testid={name} readOnly onFocus={enableInput} onChange={onChange} />
      <Status data-testid={`${name}-status`} title={getTitle()} ><AiFillInfoCircle color='red' /></Status>
    </InputWrap>
  )
}

export default Input
