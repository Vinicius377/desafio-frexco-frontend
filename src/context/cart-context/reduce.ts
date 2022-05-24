import types from './types'
import { Reducer, useContext } from 'react'
import CartCheckout from '../../types/cart.t'
import { ContextProduct } from '../product-context'

interface Action {
  type: string
  payload: {
    id: string
  }
}

const CartReduce: Reducer<CartCheckout[], Action> = (
  state: CartCheckout[],
  action: Action
) => {
  const { products, setProduct } = useContext(ContextProduct)
  if (!setProduct) {
    return state
  }
  let indexById = state.findIndex(product => product.id === action.payload.id)
  let countValue = 0

  if (indexById !== -1) {
    countValue = state[indexById].count
  } else {
    indexById = state.length
  }

  let newArrCart = [...state]
  let newArrProduct = [...products]
  switch (action.type) {
    case types.INCREMENT:
      //Decrementando no estoque e incrementando no carrinho
      newArrCart[indexById] = { id: action.payload.id, count: countValue + 1 }
      newArrProduct[indexById] = {
        ...newArrProduct[indexById],
        count: newArrProduct[indexById].count - 1,
      }
      setProduct(newArrProduct)
      return newArrCart

    case types.DECREMENT:
      if (state[indexById].count < 1) {
        return state.filter(item => item.id !== action.payload.id)
      }
      //Incrementando no estoque e decrementando no carrinho
      newArrProduct[indexById] = {
        ...newArrProduct[indexById],
        count: newArrProduct[indexById].count + 1,
      }
      setProduct(newArrProduct)
      newArrCart[indexById] = { id: action.payload.id, count: countValue - 1 }
      return newArrCart
    default:
      return state
  }
}
export default CartReduce
