function formatReal(value: string | number) {
  return `R$ ${Number(value).toFixed(2).replace('.', ',')}`
}

export default formatReal
