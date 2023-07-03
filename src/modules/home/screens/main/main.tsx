/* eslint-disable @next/next/no-img-element */
'use client'

import { ListUsers } from "@/@core/domain/usecases"
import { useEffect, useState } from "react"

type Props = {
  listUsers: ListUsers
}

export default function Home({ listUsers }: Props) {

  const [state, setState] = useState<ListUsers.Model>({
    data: [
      {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
      }
    ],
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
  })

  useEffect(() => {

    const getUsers = async () => {
      try {
        const users = await listUsers.getUsers()
        setState(users)
        console.log(users)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [listUsers])

  console.log(state)
  return (
    <div>
      <h1>Home</h1>
      {state.data.map(user => (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'space-around', padding: 12 }} key={user.id}>
            <p>{user.email}</p>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}