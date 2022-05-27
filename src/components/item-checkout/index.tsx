import { TableCell, TableRow, Button } from '@mui/material'
import { AddCircle, RemoveCircleSharp } from '@mui/icons-material'
import { useContext } from 'react'
import { toast } from 'react-toastify'

import formatReal from '../../utils/formatReal'
import Product from '../../types/product.t'
import { ContextCart } from '../../context/cart-context'
import { increment, decrement } from '../../context/cart-context/actions'
import { ContextProduct } from '../../context/product-context'

interface Props {
  data: Product
}

function ItemCheckout({ data }: Props) {
  const { dispatchCart, cart } = useContext(ContextCart)
  const { products } = useContext(ContextProduct)

  const product = products.find(product => product.id === data.id)
  const productCart = cart?.find(product => product.id === data.id)

  const addItem = () => {
    if (!dispatchCart) return

    if (!product) return

    if (product?.count === productCart?.count) {
      toast.warning(`Não tem mais ${data.name} no estoque`)
      return
    }
    dispatchCart(increment(data.id))
  }
  const removeItem = () => {
    if (!dispatchCart) return
    dispatchCart(decrement(data.id))
  }
  return (
    <TableRow key={data.id}>
      <TableCell sx={{ color: 'white', width: '30%' }}>{data.name}</TableCell>
      <TableCell sx={{ color: 'white' }}>{data.type}</TableCell>
      <TableCell sx={{ color: 'white' }}>{data.measure}</TableCell>
      <TableCell sx={{ color: 'white' }}>{formatReal(data.price)}</TableCell>
      <TableCell sx={{ color: 'white' }}>{data.count}</TableCell>
      <TableCell>
        <div style={{ display: 'flex', gap: 5 }}>
          <Button variant="contained" color="success" onClick={addItem}>
            <AddCircle />
          </Button>
          <Button variant="contained" color="error" onClick={removeItem}>
            <RemoveCircleSharp />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ItemCheckout
