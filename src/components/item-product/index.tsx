import { Card, CardContent, CardActions, Button, Badge } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp'

function ItemProduct() {
  return (
    <Badge badgeContent={10} color="primary">
      <Card>
        <CardContent>
          <div>
            <h1>Tomate</h1>
            <h3>Verdura</h3>
          </div>
          <div
            style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3>kg</h3>
              <h2>Preço: R$10,00</h2>
            </div>
            <h2>Estoque 1239</h2>
          </div>
        </CardContent>
        <CardActions>
          <Button color="success" variant="contained">
            Adicionar <AddShoppingCartIcon sx={{ marginLeft: 5 }} />
          </Button>
          <Button color="warning" variant="contained">
            <RemoveCircleSharpIcon />
          </Button>
        </CardActions>
      </Card>
    </Badge>
  )
}

export default ItemProduct
