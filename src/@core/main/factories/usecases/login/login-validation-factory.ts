import { ValidationBuilder } from '@/@core/validation/builders/validation-builder'
import { ValidationComposite } from '@/@core/validation/validators/validation-composite/validation-composite'

export const makeLoginValidation = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().build()
  ])
}
