import {
  GetStorage,
  RemoveItemStorage,
  SetStorage
} from '@/@core/data/protocols/cache'

export class LocalStorageAdapter
  implements SetStorage, RemoveItemStorage, GetStorage
{
  set(key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
