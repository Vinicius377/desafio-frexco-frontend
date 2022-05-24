import { useState } from 'react'

function useLocalStorage(key: string) {
  const [value, setValue] = useState<string | number | Object>(() => {
    const initialValue = localStorage.getItem(key)
    if (initialValue) {
      return JSON.stringify(initialValue)
    }
    return
  })
  const setStorage = (value: string | number | Object) => {
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }
  return [value, setStorage]
}

export default useLocalStorage