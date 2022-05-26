import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import api from '../../services/api'
import useLocalStorage from '../../hook/useLocalStorage'

interface User {
  name: string
  id: string
  email: string
  isAdm: boolean
}

interface Context {
  setToken?: (value: string | number | Object) => void
  setUser?: Dispatch<User>
  user?: User
}
interface Props {
  children: ReactNode
}

const ContextUser = createContext<Context>({})

function ProviderUser({ children }: Props) {
  const [user, setUser] = useState<User>()
  const [token, setToken] = useLocalStorage('token')

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }, [token])
  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      api
        .get('/auth')
        .then(result => {
          setUser(result.data)
        })
        .catch(e => {
          toast.error('Houve algum erro!')
          console.log(e)
        })
    }
  }, [])

  return (
    <ContextUser.Provider value={{ user, setUser, setToken }}>
      {children}
    </ContextUser.Provider>
  )
}

export { ContextUser, ProviderUser }
