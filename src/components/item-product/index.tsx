import { Card, CardContent, CardActions, Button, Badge } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp'
import { useContext } from 'react'
import { toast } from 'react-toastify'

import Product from '../../types/product.t'
import formatReal from '../../utils/formatReal'
import { ContextCart } from '../../context/cart-context'
import { increment, decrement } from '../../context/cart-context/actions'
import { ContextProduct } from '../../context/product-context'

interface Props {
  data: Product
}

function ItemProduct({ data }: Props) {
  const { dispatchCart, cart } = useContext(ContextCart)
  const { products } = useContext(ContextProduct)
  const productCart = cart?.find(product => product.id === data.id)

  const addToCart = (id: string) => {
    if (!dispatchCart) return

    const product = products.find(product => product.id === id)
    if (!product) return

    if (product?.count < 1) {
      toast.warning(`Não tem mais ${data.name} no estoque`)
      return
    }

    dispatchCart(increment(id))
    toast.success(`${data.name} foi adicionado ao carrinho!`)
  }
  const removeToCart = (id: string) => {
    if (!dispatchCart) return

    if (!productCart) return

    dispatchCart(decrement(id))
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
          <Button
            color="success"
            variant="contained"
            onClick={() => addToCart(data.id)}
          >
            Adicionar <AddShoppingCartIcon sx={{ marginLeft: 5 }} />
          </Button>
          <Button
            color="warning"
            variant="contained"
            onClick={() => removeToCart(data.id)}
          >
            <RemoveCircleSharpIcon />
          </Button>
        </CardActions>
      </Card>
    </Badge>
  )
}

export default ItemProduct
