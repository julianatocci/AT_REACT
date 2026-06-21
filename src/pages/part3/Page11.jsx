import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Page11() {
  const { register, handleSubmit } = useForm()
  const [enviado, setEnviado] = useState(null)

  function aoSubmeter(dados) {
    setEnviado(dados)
  }

  return (
    <div className="pagina">
      <h1>Exercício 11 - Formulário com react-hook-form</h1>

      <form className="formulario" onSubmit={handleSubmit(aoSubmeter)}>
        <label>
          Nome
          <input {...register('nome')} />
        </label>

        <label>
          Email
          <input {...register('email')} />
        </label>

        <label>
          Telefone
          <input {...register('telefone')} />
        </label>

        <button className="botao" type="submit">
          Enviar
        </button>
      </form>

      {enviado && <pre className="json-box">{JSON.stringify(enviado, null, 2)}</pre>}
    </div>
  )
}

export default Page11
