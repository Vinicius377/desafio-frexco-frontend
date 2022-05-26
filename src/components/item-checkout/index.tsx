import { TableCell, TableRow, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp'
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
  const { dispatchCart } = useContext(ContextCart)
  const { products } = useContext(ContextProduct)

  const addItem = (id: string) => {
    if (!dispatchCart) return

    const product = products.find(product => product.id === id)
    if (!product) return

    if (product?.count < 1) {
      toast.warning(`Não tem mais ${data.name} no estoque`)
      return
    }
    dispatchCart(increment(id))
  }
  const removeItem = (id: string) => {
    if (!dispatchCart) return
    dispatchCart(decrement(id))
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
          <Button
            variant="contained"
            color="success"
            onClick={() => addItem(data.id)}
          >
            <AddCircleIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => removeItem(data.id)}
          >
            <RemoveCircleSharpIcon />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ItemCheckout
