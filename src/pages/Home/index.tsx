import { Grid, Button } from '@mui/material'
import ItemProduct from '../../components/item-product'

function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4}>
        <ItemProduct />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ItemProduct />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ItemProduct />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ItemProduct />
      </Grid>
    </Grid>
  )
}

export default Home
