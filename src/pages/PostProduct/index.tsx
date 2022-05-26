import { Container, TextField, Button } from '@mui/material'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { ContextProduct } from '../../context/product-context'
import { ContextUser } from '../../context/user-context'
import api from '../../services/api'

function PostProduct() {
  window.document.title = 'Criar produto'

  const { register, handleSubmit, reset } = useForm()
  const { setProduct, products } = useContext(ContextProduct)
  const { user } = useContext(ContextUser)
  const navigate = useNavigate()

  if (!user || !user.isAdm) {
    navigate('/')
  }

  const createProduct = handleSubmit(data => {
    if (!setProduct) return
    api
      .post('/product', data)
      .then(result => {
        setProduct([...products, result.data])
        toast.success('Produto adicionado!')
        reset()
      })
      .catch(e => console.log(e))
  })

  return (
    <Container
      component="form"
      sx={{ padding: 5, backgroundColor: '#F1F1F1' }}
      onSubmit={createProduct}
    >
      <h1>Cadastrar produto</h1>
      <section
        style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <TextField
          variant="standard"
          {...register('name')}
          label="Nome"
          required
          fullWidth
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            variant="standard"
            {...register('count')}
            label="Quantidade"
            required
          />
          <TextField
            variant="standard"
            {...register('price')}
            label="Preço"
            required
          />
          <TextField
            variant="standard"
            {...register('measure')}
            label="Medida"
            required
          />
        </div>
        <TextField
          variant="standard"
          {...register('type')}
          label="Classificação"
          required
        />
        <Button type="submit" variant="contained" color="success">
          Criar
        </Button>
      </section>
    </Container>
  )
}

export default PostProduct
