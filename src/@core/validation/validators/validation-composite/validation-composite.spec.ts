import {faker} from '@faker-js/faker'
import { FieldValidationSpy } from '@/@core/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

interface SutTypes {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName = faker.database.column()): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(fieldValidationSpy)
  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation it is fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationSpy } = makeSut(fieldName)
    const errorMessage = 'any_error_message'
    fieldValidationSpy[0].error = new Error(errorMessage)
    fieldValidationSpy[1].error = new Error(faker.word.words())
    const error = sut.validate(fieldName, faker.word.words())
    expect(error).toBe(errorMessage)
  })
  test('should return falsy if validation it is correct', () => {
    const { sut } = makeSut()
    const fieldName = faker.person.firstName()
    const error = sut.validate(fieldName, faker.word.words())
    expect(error).toBeFalsy()
  })
})
