import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { useContext } from 'react'
import { ContextProduct } from '../../context/product-context'
import ItemStock from '../../components/item-stock'

function Stock() {
  const { products } = useContext(ContextProduct)
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
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
          {products.map(product => {
            return <ItemStock data={product} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Stock
