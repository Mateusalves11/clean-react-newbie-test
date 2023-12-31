import { Validation } from '@/protocols/validation'
import { FieldValidation } from '@/@core/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  private constructor(private readonly validators: FieldValidation[]) {}
  validate(fieldName: string, fieldValue: string): string {
    const validators = this.validators.filter(
      (validator) => validator.field === fieldName
    )
    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
  }

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }
}
