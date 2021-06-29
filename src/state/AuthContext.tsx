import { useState, createContext, useContext } from 'react'

interface user {
  firstName: string
  lastName: string
  email: string
}

type userState = {
  user: any
  setUser: (user: any) => void
  removeUser: () => void
}

const userContext = createContext<userState | undefined>(undefined)

export const UserProvider: React.FC = ({children}) => {
  const [userValue, setUserValue] = useState<user>()
  return (
    <userContext.Provider value={{
      user: userValue,
      setUser: (user) => setUserValue(user),
      removeUser: () => setUserValue(undefined)
    }}>
      {children}
    </userContext.Provider>
  )
}

export const useUserValue = () => {
  const userValue = useContext(userContext)
  return userValue
}