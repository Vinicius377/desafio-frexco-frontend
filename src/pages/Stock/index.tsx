import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContextProduct } from '../../context/product-context'
import { ContextUser } from '../../context/user-context'
import ItemStock from '../../components/item-stock'

function Stock() {
  window.document.title = 'Estoque'
  const { products } = useContext(ContextProduct)
  const { user } = useContext(ContextUser)

  const navigate = useNavigate()

  if (!user || !user.isAdm) {
    navigate('/')
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
          {products.map(product => {
            return <ItemStock data={product} key={product.id} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Stock
