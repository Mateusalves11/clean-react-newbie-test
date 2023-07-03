import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpStatusCode
} from '../protocols/http'

// This class is a mock to HttpAxiosClient, HttpFetchClient...
export class HttpClientSpy<R = any> implements HttpClient<R> {
  url: string
  body?: any
  headers?: any
  methods?: string
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request(data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.body = data.body
    this.headers = data.headers
    this.methods = data.method
    return this.response
  }
}
