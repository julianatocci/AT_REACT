import Page9 from '../part3/Page9'

function Part4FormPreenchido() {
  const dadosIniciais = {
    nome: 'Maria Silva',
    email: 'maria.silva@email.com',
    telefone: '11999998888',
  }

  return <Page9 initialData={dadosIniciais} />
}

export default Part4FormPreenchido
