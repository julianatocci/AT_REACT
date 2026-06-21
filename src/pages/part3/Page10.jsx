import { useState } from 'react'

function Page10() {
  const [dados, setDados] = useState({ nome: '', email: '', telefone: '' })
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(null)

  function handleChange(e) {
    setDados({ ...dados, [e.target.name]: e.target.value })
  }

  function validar() {
    const novosErros = {}
    if (!dados.nome) novosErros.nome = 'Nome é obrigatório'
    if (!dados.email) novosErros.email = 'Email é obrigatório'
    if (dados.telefone && !/^[0-9]+$/.test(dados.telefone)) {
      novosErros.telefone = 'Telefone deve conter somente números'
    }
    return novosErros
  }

  function handleSubmit(e) {
    e.preventDefault()
    const novosErros = validar()
    setErros(novosErros)

    if (Object.keys(novosErros).length === 0) {
      setEnviado(dados)
    } else {
      setEnviado(null)
    }
  }

  return (
    <div className="pagina">
      <h1>Exercício 10 - Formulário com Validações</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <label>
          Nome
          <input name="nome" value={dados.nome} onChange={handleChange} />
        </label>
        {erros.nome && <span className="erro">{erros.nome}</span>}

        <label>
          Email
          <input name="email" value={dados.email} onChange={handleChange} />
        </label>
        {erros.email && <span className="erro">{erros.email}</span>}

        <label>
          Telefone
          <input name="telefone" value={dados.telefone} onChange={handleChange} />
        </label>
        {erros.telefone && <span className="erro">{erros.telefone}</span>}

        <button className="botao" type="submit">
          Enviar
        </button>
      </form>

      {enviado && <pre className="json-box">{JSON.stringify(enviado, null, 2)}</pre>}
    </div>
  )
}

export default Page10
