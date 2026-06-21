import { useState } from 'react'

function Page3() {
  const [contador, setContador] = useState(0)

  function handleClick() {
    setContador(contador + 1)
  }

  return (
    <div className="pagina">
      <h1>Exercício 3 - Função de Tratamento de Eventos</h1>
      <p>O clique no botão chama a função handleClick, declarada separadamente.</p>
      <p>Contador: {contador}</p>

      <button className="botao" onClick={handleClick}>
        Clique aqui
      </button>
    </div>
  )
}

export default Page3
