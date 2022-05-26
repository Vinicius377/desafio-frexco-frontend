import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import DeleteIcon from '@mui/icons-material/Delete'

import { ContextProduct } from '../../context/product-context'
import api from '../../services/api'

interface Props {
  id: string
  name: string
}

export default function DeleteButton({ id, name }: Props) {
  const [open, setOpen] = useState(false)
  const { products, setProduct } = useContext(ContextProduct)

  const onDelete = () => {
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

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (response?: boolean) => {
    if (response) {
      onDelete()
    }
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja mesmo apagar este produto?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)}>Sim</Button>
          <Button onClick={() => handleClose(false)} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
