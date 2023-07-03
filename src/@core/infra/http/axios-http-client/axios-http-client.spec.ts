import axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'
import { mockAxios, mockHttpResponse } from '@/@core/infra/test'
import { mockHttpRequest } from '@/@core/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct values', async () => {
    const request = mockHttpRequest()
    const { sut, mockedAxios } = makeSut()

    await sut.request(request)

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method,
      withCredentials: false
    })
  })
  it('should return the correct statusCode and body', async () => {
    const { sut, mockedAxios } = makeSut()
    const request = mockHttpRequest()
    const httpResponse = await sut.request(request)
    const axiosResponse = await mockedAxios.request.mock.results[0].value
    expect(httpResponse).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    })
  })
  it('should return the correct statusCode and body on failure', () => {
    const { sut, mockedAxios } = makeSut()
    const request = mockHttpRequest()
    mockedAxios.request.mockRejectedValueOnce({
      response: mockHttpResponse()
    })

    const promise = sut.request(request)

    expect(promise).toEqual(mockedAxios.request.mock.results[0].value)
  })
})
