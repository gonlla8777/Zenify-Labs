/* eslint-disable react/prop-types */
import { useState } from 'react'
import { userContext } from '..'
import { useEffect } from 'react'

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('user')

    if (user) {
      setUser(JSON.parse(user))
      setIsEmpty(false)
    }
  }, [isEmpty])

  return (
    <userContext.Provider value={{ user, setUser, setIsEmpty, isEmpty }}>
      {children}
    </userContext.Provider>
  )
}
