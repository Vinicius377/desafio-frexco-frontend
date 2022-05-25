function formatReal(value: string | number) {
  return Number(value).toFixed(2).replace('.', ',')
}

export default formatReal
