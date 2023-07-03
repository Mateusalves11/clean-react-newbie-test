import { RemoteListUsers } from '@/@core/data/usecases'
import { ListUsers } from '@/@core/domain/usecases'
import { makeApiUrl } from '@/@core/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/@core/main/factories/http/axios-http-client-factory'

export const makeRemoteListUsers = (): ListUsers => {
  return new RemoteListUsers(
    makeApiUrl('/api/users'),
    makeAxiosHttpClient()
  )
}
