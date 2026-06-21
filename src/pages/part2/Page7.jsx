import { useMemo, useState } from 'react'
import { faker } from '@faker-js/faker'

function Page7() {
  const produtos = useMemo(() => {
    const lista = []
    for (let i = 0; i < 100; i++) {
      lista.push(faker.commerce.productName())
    }
    return lista
  }, [])

  const [texto, setTexto] = useState('')

  const filtrados = produtos.filter((produto) =>
    produto.toLowerCase().startsWith(texto.toLowerCase())
  )

  return (
    <div className="pagina">
      <h1>Exercício 7 - Filtro de Produtos</h1>

      <input
        className="input"
        type="text"
        placeholder="Digite para filtrar..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <ul className="lista">
        {filtrados.map((produto, indice) => (
          <li key={indice}>{produto}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page7
