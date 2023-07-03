import { RemoteAuthentication } from '@/@core/data/usecases'
import { Authentication } from '@/@core/domain/usecases'
import { makeApiUrl } from '@/@core/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/@core/main/factories/http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(
    makeApiUrl('/api/login'),
    makeAxiosHttpClient()
  )
}
