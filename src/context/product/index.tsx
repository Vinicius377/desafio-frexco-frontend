import { createContext, ReactNode, useEffect, useState } from 'react'
import api from '../../services/api'

interface Product {
  name: string
  price: string
  type: string
  count: string
  measure: string
}

interface Props {
  children: ReactNode
}

const initialValue = {
  name: 'product name',
  price: '00.00',
  type: 'product type',
  count: '0',
  measure: 'product measure',
}

const ContextProduct = createContext<Product>(initialValue)

function ProviderProduct({ children }: Props) {
  const [product, setProduct] = useState<Product>(initialValue)

  useEffect(() => {
    api
      .get('/product')
      .then(result => {
        setProduct(result.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <ContextProduct.Provider value={product}>
      {children}
    </ContextProduct.Provider>
  )
}
