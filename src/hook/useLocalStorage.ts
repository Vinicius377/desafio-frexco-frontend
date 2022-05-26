import { useState } from 'react'

function useLocalStorage(key: string) {
  const [value, setValue] = useState<string | number | Object>(() => {
    const initialValue = localStorage.getItem(key)
    if (initialValue) {
      return JSON.parse(initialValue)
    }
    return
  })
  const setStorage = (value: string | number | Object): void => {
    localStorage.setItem(key, JSON.stringify(value))
    setValue(value)
  }
  return [value, setStorage] as const
}

export default useLocalStorage
