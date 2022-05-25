import { Grid } from '@mui/material'
import { useContext } from 'react'
import ItemProduct from '../../components/item-product'
import { ContextProduct } from '../../context/product-context'

window.document.title = 'Inicio'
function Home() {
  const { products } = useContext(ContextProduct)

  return (
    <>
      <Grid container spacing={1}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ItemProduct data={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home
