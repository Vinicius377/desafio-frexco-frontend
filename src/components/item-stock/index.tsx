import { TableRow, TableCell, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import EditForm from '../edit-form'

import Product from '../../types/product.t'
import formatReal from '../../utils/formatReal'
import api from '../../services/api'
import { useContext, useState } from 'react'
import { ContextProduct } from '../../context/product-context'
import { toast } from 'react-toastify'

interface Props {
  data: Product
}
function ItemStock({ data }: Props) {
  const { setProduct, products } = useContext(ContextProduct)
  const [collapse, setCollapse] = useState(true)

  const onEdit = () => {
    setCollapse(!collapse)
  }

  const onDelete = (id: string) => {
    if (!setProduct) return
    api
      .delete('/product', { data: { id } })
      .then(() => {
        const newProductList = products.filter(product => product.id !== id)
        setProduct(newProductList)
        toast.warning('Produto deletado!')
      })
      .catch(e => {
        throw new Error(e)
      })
  }

  return (
    <>
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
              color="error"
              onClick={() => onDelete(data.id)}
            >
              <DeleteIcon />
            </Button>
            <Button variant="contained" color="primary" onClick={onEdit}>
              <EditIcon />
            </Button>
          </div>
        </TableCell>
      </TableRow>
      {!collapse && (
        <TableRow>
          <TableCell size="small" colSpan={6}>
            <EditForm product={data} />
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default ItemStock
