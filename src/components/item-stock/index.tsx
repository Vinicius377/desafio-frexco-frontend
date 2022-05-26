import { TableRow, TableCell, Button, Collapse } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'

import EditForm from '../edit-form'
import DeleteButton from '../delete-button'

import Product from '../../types/product.t'
import formatReal from '../../utils/formatReal'

interface Props {
  data: Product
}
function ItemStock({ data }: Props) {
  const [collapsed, setCollapsed] = useState(true)

  const onEdit = () => {
    setCollapsed(!collapsed)
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
            <DeleteButton id={data.id} name={data.name} />

            <Button variant="contained" color="primary" onClick={onEdit}>
              <EditIcon />
            </Button>
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell size="small" colSpan={6}>
          <Collapse in={!collapsed}>
            <EditForm product={data} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default ItemStock
