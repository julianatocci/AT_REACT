import { useState } from 'react'

function Accordion({ pergunta, resposta }) {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="card">
      <div className="pergunta">{pergunta}</div>

      <button className="botao" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar resposta' : 'Ver resposta'}
      </button>

      <div className={mostrar ? 'resposta' : 'resposta oculta'}>
        {resposta}
      </div>
    </div>
  )
}

export default Accordion
