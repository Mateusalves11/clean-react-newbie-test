import { AxiosHttpClient } from '@/@core/infra/http/axios-http-client/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
