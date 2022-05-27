import { Card, CardContent, CardActions, Button, Badge } from '@mui/material'
import { AddShoppingCart, RemoveCircleSharp } from '@mui/icons-material'
import { useContext } from 'react'
import { toast } from 'react-toastify'

import Product from '../../types/product.t'
import formatReal from '../../utils/formatReal'
import { ContextCart } from '../../context/cart-context'
import { ContextProduct } from '../../context/product-context'
import { increment, decrement } from '../../context/cart-context/actions'

interface Props {
  data: Product
}

function ItemProduct({ data }: Props) {
  const { dispatchCart, cart } = useContext(ContextCart)
  const { products } = useContext(ContextProduct)

  const productCart = cart?.find(product => product.id === data.id)
  const product = products.find(product => product.id === data.id)

  const addToCart = () => {
    if (!dispatchCart) return

    if (!product) return

    if (product?.count === productCart?.count) {
      toast.warning(`Não tem mais ${data.name} no estoque`)
      return
    }

    dispatchCart(increment(data.id))
    toast.success(`${data.name} foi adicionado ao carrinho!`)
  }
  const removeToCart = () => {
    if (!dispatchCart) return

    if (!productCart) return

    dispatchCart(decrement(data.id))
    toast.warning(`${data.name} foi removido do carrinho!`)
  }

  return (
    <Badge badgeContent={productCart?.count || 0} color="primary">
      <Card>
        <CardContent>
          <div>
            <h1>{data.name}</h1>
            <h3>{data.type}</h3>
          </div>
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>{data.measure}</h3>
              <h2>Preço: {formatReal(data.price)}</h2>
            </div>
            <h2>Estoque {data.count}</h2>
          </div>
        </CardContent>
        <CardActions>
          <Button color="success" variant="contained" onClick={addToCart}>
            Adicionar <AddShoppingCart sx={{ marginLeft: 5 }} />
          </Button>
          <Button color="warning" variant="contained" onClick={removeToCart}>
            <RemoveCircleSharp />
          </Button>
        </CardActions>
      </Card>
    </Badge>
  )
}

export default ItemProduct
