import { FieldValidation } from '@/@core/validation/protocols/field-validation'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null
  constructor(readonly field: string) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(_value: string): Error {
    return this.error
  }
}
