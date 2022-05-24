import {
  createContext,
  ReactNode,
  useReducer,
  Dispatch,
  useState,
  useEffect,
  useContext,
} from 'react'
import CartReduce from './reduce'
import { ContextProduct } from '../../context/product-context'
import CartCheckout from '../../types/cart.t'

interface Props {
  children: ReactNode
}

interface Action {
  type: string
  payload: {
    id: string
  }
}
interface Context {
  cart?: CartCheckout[]
  dispatchCart?: Dispatch<Action>
  total?: number
}

const CartContext = createContext<Context>({})

function CartContextProvider({ children }: Props) {
  const [cart, dispatchCart] = useReducer(CartReduce, [])
  const [total, setTotal] = useState(0)
  const { products } = useContext(ContextProduct)

  useEffect(() => {
    setTotal(() => {
      let incrementedValue = 0
      cart.forEach(item => {
        const productById = products.findIndex(
          product => product.id === item.id
        )
        if (productById === -1) {
          return
        }
        incrementedValue =
          incrementedValue + products[productById].price * item.count
      })
      return incrementedValue
    })
  }, [cart])

  return (
    <CartContext.Provider value={{ total, cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider }
export default CartContext
