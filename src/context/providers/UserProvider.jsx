/* eslint-disable react/prop-types */
import { useState } from 'react'
import { userContext } from '..'
import { useEffect } from 'react'

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}
