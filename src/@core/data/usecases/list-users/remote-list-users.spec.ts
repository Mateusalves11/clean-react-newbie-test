import { HttpStatusCode } from '@/@core/data/protocols/http'
import { HttpClientSpy } from '@/@core/data/test'
import { UnexpectedError } from '@/@core/domain/errors'
import { mockUsersModel } from '@/@core/domain/test'
import {faker} from '@faker-js/faker'
import { ListUsers } from '@/@core/domain/usecases'
import { RemoteListUsers } from './remote-list-users'

interface SutTypes {
  sut: RemoteListUsers
  httpClientSpy: HttpClientSpy<ListUsers.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<ListUsers.Model>()
  const sut = new RemoteListUsers(url, httpClientSpy)
  return { sut, httpClientSpy }
}

describe('RemoteListUsers', () => {
  it('should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    await sut.getUsers()
    expect(httpClientSpy.url).toBe(url)
  })
  it('should throw InvalidCredentialsError if HttpClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.getUsers()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should throw UnexpectedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.getUsers()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.getUsers()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should throw Unexpected if HttPostClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.getUsers()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  it('should return an AccountModel if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockUsersModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.getUsers()
    expect(account).toEqual(httpResult)
  })
})
