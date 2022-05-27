import {
  Container,
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useState } from 'react'

import InputPassword from '../../components/input-password'
import api from '../../services/api'

function Signin() {
  window.document.title = 'Criar conta'
  const { register, handleSubmit, reset } = useForm()
  const [err, setErr] = useState(false)

  const createProduct = handleSubmit(data => {
    if (data.password !== data.passwordComf) {
      setErr(true)
      return
    }
    setErr(false)
    const sendData = {
      email: data.email,
      password: data.password,
      name: data.name,
      isAdm: data.isAdm,
    }

    api
      .post('/signin', sendData)
      .then(() => {
        toast.success(`Usuário ${data.name} criado!`)
        reset()
      })
      .catch(e => {
        toast.error(e.response.data.message)
        console.log(e)
      })
  })
  return (
    <Container
      component="form"
      sx={{ padding: 5, backgroundColor: '#F1F1F1' }}
      onSubmit={createProduct}
    >
      <h1>Criar conta</h1>
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

        <InputPassword
          err={err}
          label="Senha"
          errLabel={err ? 'As senhas não são iguais!' : ''}
          register={register('password')}
        />
        <InputPassword
          err={err}
          label="Confirmar senha"
          errLabel={err ? 'As senhas não são iguais!' : ''}
          register={register('passwordComf')}
        />

        <TextField
          variant="standard"
          {...register('email')}
          label="Email"
          type="email"
          required
        />
        <FormControlLabel
          control={<Switch />}
          label="É administrador?"
          {...register('isAdm')}
        />
        <Button type="submit" variant="contained" color="success">
          Criar
        </Button>
      </section>
    </Container>
  )
}

export default Signin
