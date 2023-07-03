import { Authentication, ListUsers } from '@/@core/domain/usecases'
import {faker} from '@faker-js/faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): Authentication.Model => {
  return {
    token: faker.number.bigInt().toString(),
  }
}

export const mockUsersModel = (): ListUsers.Model => {
  return {
    page: faker.number.int(),
    per_page:faker.number.int(),
    total: faker.number.int(),
    total_pages: faker.number.int(),
    data: [
        {
            id: faker.number.int(),
            email: faker.internet.email(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            avatar: faker.internet.avatar()
        }
      ]
  }
}