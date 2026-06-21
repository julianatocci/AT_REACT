import { useState } from 'react'

function Page9({ initialData = { nome: '', email: '', telefone: '' } }) {
  const [dados, setDados] = useState(initialData)
  const [enviado, setEnviado] = useState(null)

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(dados)
  }

  return (
    <div className="pagina">
      <h1>Exercício 9 - Formulário Simples</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Nome
          <input name="nome" value={dados.nome} onChange={handleChange} />
        </label>

        <label>
          Email
          <input name="email" value={dados.email} onChange={handleChange} />
        </label>

        <label>
          Telefone
          <input name="telefone" value={dados.telefone} onChange={handleChange} />
        </label>

        <button className="botao" type="submit">
          Enviar
        </button>
      </form>

      {enviado && <pre className="json-box">{JSON.stringify(enviado, null, 2)}</pre>}
    </div>
  )
}

export default Page9
