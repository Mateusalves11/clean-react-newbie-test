import {faker} from '@faker-js/faker'
import { HttpRequest } from '../protocols/http'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  body: faker.helpers.arrayElement([{
    [faker.lorem.word()]: faker.lorem.word()
  }]),
  method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']),
  headers: faker.helpers.objectValue({
    [faker.lorem.word()]: faker.lorem.word()
  })
})
