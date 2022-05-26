import {
  TableCell,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from '@mui/material'
import { useContext } from 'react'

import { ContextCart } from '../../context/cart-context'
import { ContextProduct } from '../../context/product-context'
import ItemCheckout from '../../components/item-checkout'

function Checkout() {
  const { cart } = useContext(ContextCart)
  const { products } = useContext(ContextProduct)

  const itensCart = cart?.map(item => {
    const data = products.find(product => product.id === item.id)
    if (data) {
      return { ...data, count: item.count }
    }
  })
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Classificação</TableCell>
            <TableCell>Medida</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itensCart &&
            itensCart.map(product => {
              if (!product) return
              return <ItemCheckout data={product} key={product.id} />
            })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Checkout
