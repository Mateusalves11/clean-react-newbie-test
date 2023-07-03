'use client';
import Input from "@/components/input/input";
import { FormLogin, ButtonLogin } from "./main.styles";
import { Authentication } from "@/@core/domain/usecases";
import { useState } from "react";
import { Validation } from "@/protocols/validation";

type Props = {
  validation: Validation
  authentication: Authentication
}

export default function Login({ validation, authentication }: Props) {

  const [state, setState] = useState({
    email: '',
    password: '',
    isLoading: false,
    emailError: '',
    passwordError: ''
  })

  const handleValidation = (): void => {
    setState((prevState) => ({
      ...prevState,
      emailError: validation.validate('email', prevState.email),
      passwordError: validation.validate('password', prevState.password)
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    if (!state.email || !state.password) {
      handleValidation()
      return
    }
    handleValidation()
    if (state.isLoading) {
      return
    }

    try {
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      console.log(account)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setState({ ...state, isLoading: false })
    }

  }


  return (
    <FormLogin onSubmit={handleSubmit}>
      <Input value={state.email} name='email' onChange={(e) => setState({
        ...state,
        email: e.target.value
      })} placeholder="Digite seu Email" />
      <span>{state.emailError}</span>
      <Input name='password' value={state.password} onChange={(e) => setState({
        ...state, password: e.target.value, passwordError: ''
      })} placeholder="Digite sua senha" />
      <span>{state.passwordError}</span>
      <ButtonLogin type='submit'>Login</ButtonLogin>
    </FormLogin>
  )
}