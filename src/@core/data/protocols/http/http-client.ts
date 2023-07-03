type Params = {
  [field: string]: any
}

export type HttpRequest = {
  url: string
  method?: HttpMethod
  body?: any
  params?: Params
  headers?: any
  withCredentials?: boolean
}

export interface HttpClient<R = any> {
  request: (params: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unauthorized = 401,
  badRequest = 400,
  forbidden = 403,
  notFound = 400,
  serverError = 500,
  badGateway = 502
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
