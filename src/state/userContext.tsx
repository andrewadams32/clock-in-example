import { useState, createContext, useContext } from 'react'

const context = createContext<any>(undefined)

export const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState({
    firstName: "Andrew"
  })

  return (
    <context.Provider value={{
      user: user,
      setUser: (user: any) => {setUser(user)},
      removeUser: () => {setUser({firstName: ""})}
    }}>
      {children}
    </context.Provider>
  )
}

export const useUsers = () => {
  const userState = useContext(context)
  return userState
}