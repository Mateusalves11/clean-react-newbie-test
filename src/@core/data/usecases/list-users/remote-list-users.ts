import { HttpClient, HttpStatusCode } from '@/@core/data/protocols/http'
import { UnexpectedError } from '@/@core/domain/errors'
import { ListUsers } from '@/@core/domain/usecases'

export class RemoteListUsers implements ListUsers {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<ListUsers.Model>
  ) {}

  async getUsers(): Promise<ListUsers.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}

