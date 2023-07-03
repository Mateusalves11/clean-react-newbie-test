'use client'
import { makeRemoteListUsers } from '@/@core/main/factories/usecases/list-users/remote-list-users-factory'
import HomeScreen from '@/modules/home/screens/main/main'

export default function Home() {
  return (
    <HomeScreen listUsers={makeRemoteListUsers()} />
  )
}