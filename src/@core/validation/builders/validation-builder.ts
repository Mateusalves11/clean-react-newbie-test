import { FieldValidation } from '@/@core/validation/protocols/field-validation'
import { RequiredFieldValidation } from '@/@core/validation/validators/required-field/required-field'
import { EmailValidation } from '../validators/email-validation/email-validation'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validation: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validation.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validation.push(new EmailValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validation
  }
}
