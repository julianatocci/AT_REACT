import { useState } from 'react'

function Page2() {
  const [cor, setCor] = useState('lightblue')

  return (
    <div className="pagina">
      <h1>Exercício 2 - Inline Event</h1>
      <p>O evento de clique está escrito diretamente dentro do JSX (inline).</p>

      <div className="caixa" style={{ backgroundColor: cor }}>
        Caixa colorida
      </div>

      <button
        className="botao"
        onClick={() => setCor(cor === 'lightblue' ? 'lightgreen' : 'lightblue')}
      >
        Trocar cor (inline event)
      </button>
    </div>
  )
}

export default Page2
