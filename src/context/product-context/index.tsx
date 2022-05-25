import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react'
import api from '../../services/api'
import Product from '../../types/product.t'

interface Props {
  children: ReactNode
}

const initialValue: Product[] = [
  {
    name: 'product name',
    price: 0,
    type: 'product type',
    count: 0,
    measure: 'product measure',
    id: '',
  },
]
interface ContextProduct {
  products: Product[]
  setProduct?: Dispatch<Product[]>
}

const ContextProduct = createContext<ContextProduct>({ products: initialValue })

function ProviderProduct({ children }: Props) {
  const [products, setProduct] = useState<Product[]>(initialValue)

  useEffect(() => {
    api
      .get<Product[]>('/product')
      .then(result => {
        setProduct(result.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])
  return (
    <ContextProduct.Provider value={{ products, setProduct }}>
      {children}
    </ContextProduct.Provider>
  )
}

export { ContextProduct, ProviderProduct }
