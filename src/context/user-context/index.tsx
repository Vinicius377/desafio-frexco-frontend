import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import api from '../../services/api'
import useLocalStorage from '../../hook/useLocalStorage'

interface User {
  token: string
  data: {
    name: string
    id: string
    email: string
  }
}

interface Context {
  setToken?: (value: string | number | Object) => void
  setUser?: Dispatch<User>
  user: User
}
interface Props {
  children: ReactNode
}

const initialValue: User = {
  token: '',
  data: {
    name: '',
    id: '',
    email: '',
  },
}

const ContextUser = createContext<Context>({ user: initialValue })

function ProviderUser({ children }: Props) {
  const [user, setUser] = useState<User>(initialValue)
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['authorization'] = `Bearer ${token}`
    }
    api
      .get('/login')
      .then(result => {
        setUser(result.data.data)
        setToken(result.data.token)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <ContextUser.Provider value={{ user, setUser, setToken }}>
      {children}
    </ContextUser.Provider>
  )
}

export { ContextUser, ProviderUser }
