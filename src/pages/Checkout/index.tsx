import {
  TableCell,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Button,
} from '@mui/material'
import { useContext } from 'react'
import { toast } from 'react-toastify'

import { ContextCart } from '../../context/cart-context'
import { ContextProduct } from '../../context/product-context'
import { ContextUser } from '../../context/user-context'

import ItemCheckout from '../../components/item-checkout'
import formatReal from '../../utils/formatReal'
import api from '../../services/api'

function Checkout() {
  const { cart, total } = useContext(ContextCart)
  const { products } = useContext(ContextProduct)
  const { user } = useContext(ContextUser)

  let itensCart = cart?.map(item => {
    const data = products.find(product => product.id === item.id)
    if (data) {
      return { ...data, count: item.count }
    }
  })

  const onBuy = async () => {
    api
      .post('/buy', { cart })
      .then(result => {
        console.log(result)
        itensCart = []
      })
      .catch(e => {
        if (e.response.status == 401) {
          toast.error('Faça o login antes de comprar!')
          throw new Error(e)
        }
        throw new Error(e)
      })
  }

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
        <TableRow sx={{ backgroundColor: '#fff' }}>
          <TableCell>SubTotal :</TableCell>
          {total && (
            <TableCell sx={{ color: 'green' }}>{formatReal(total)}</TableCell>
          )}
        </TableRow>
      </Table>
      <Button
        variant="contained"
        onClick={onBuy}
        disabled={!user || user.isAdm}
      >
        Finalizar pedido
      </Button>
    </TableContainer>
  )
}

export default Checkout
