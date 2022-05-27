import { Container, TextField, Button } from '@mui/material'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ContextProduct } from '../../context/product-context'
import api from '../../services/api'
import Product from '../../types/product.t'

interface Props {
  product: Product
}

function EditForm({ product }: Props) {
  const { register, handleSubmit } = useForm()
  const { setProduct, products } = useContext(ContextProduct)

  const updateProduct = handleSubmit(data => {
    if (!setProduct) return
    api
      .put('/product', { ...data, id: product.id })
      .then(() => {
        setProduct(prevState => {
          const indexById = products.findIndex(item => item.id === product.id)
          if (indexById === undefined) return prevState
          prevState[indexById] = { ...prevState[indexById], ...data }
          return prevState
        })
        toast.success(`${product.name} alterado com sucesso!`)
      })
      .catch(e => console.log(e))
  })

  return (
    <Container
      component="form"
      sx={{ padding: 5, backgroundColor: '#F1F1F1' }}
      onSubmit={updateProduct}
    >
      <TextField
        variant="standard"
        {...register('name')}
        label="Nome"
        fullWidth
        defaultValue={product.name}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextField
          variant="standard"
          {...register('count')}
          label="Quantidade"
          type="number"
          defaultValue={product.count}
        />
        <TextField
          variant="standard"
          {...register('price')}
          label="Preço"
          defaultValue={product.price}
        />
        <TextField
          variant="standard"
          {...register('measure')}
          label="Medida"
          defaultValue={product.measure}
        />
      </div>
      <TextField
        variant="standard"
        {...register('type')}
        label="Classificação"
        defaultValue={product.type}
      />
      <Button type="submit" variant="contained" color="success">
        Alterar
      </Button>
    </Container>
  )
}

export default EditForm
