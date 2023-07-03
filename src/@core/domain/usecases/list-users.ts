import { UserModel } from '../models'

export interface ListUsers {
  getUsers: () => Promise<ListUsers.Model>
}

export namespace ListUsers {
  export type Model = UserModel
}
