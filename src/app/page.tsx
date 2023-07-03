'use client';
import { makeLoginValidation } from "@/@core/main/factories/usecases/login/login-validation-factory";
import { makeRemoteAuthentication } from "@/@core/main/factories/usecases/login/remote-authentication-factory";
import Login from "@/modules/login/screens/main";

export default function App() {
  return (
    <Login validation={makeLoginValidation()} authentication={makeRemoteAuthentication()} />
  )
}
