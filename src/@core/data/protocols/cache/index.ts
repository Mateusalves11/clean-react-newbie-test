export interface SetStorage {
  set: (key: string, value: object) => void
}

export interface RemoveItemStorage {
  remove: (key: string) => void
}
export interface GetStorage {
  get: (key: string) => any
}
