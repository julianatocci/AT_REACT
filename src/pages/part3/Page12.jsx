import { useState } from 'react'
import { useForm } from 'react-hook-form'

function Page12() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [enviado, setEnviado] = useState(null)

  function aoSubmeter(dados) {
    setEnviado(dados)
  }

  return (
    <div className="pagina">
      <h1>Exercício 12 - react-hook-form com Validações</h1>

      <form className="formulario" onSubmit={handleSubmit(aoSubmeter)}>
        <label>
          Nome
          <input {...register('nome', { required: 'Nome é obrigatório' })} />
        </label>
        {errors.nome && <span className="erro">{errors.nome.message}</span>}

        <label>
          Email
          <input {...register('email', { required: 'Email é obrigatório' })} />
        </label>
        {errors.email && <span className="erro">{errors.email.message}</span>}

        <label>
          Telefone
          <input
            {...register('telefone', {
              pattern: {
                value: /^[0-9]+$/,
                message: 'Telefone deve conter somente números',
              },
            })}
          />
        </label>
        {errors.telefone && <span className="erro">{errors.telefone.message}</span>}

        <button className="botao" type="submit">
          Enviar
        </button>
      </form>

      {enviado && <pre className="json-box">{JSON.stringify(enviado, null, 2)}</pre>}
    </div>
  )
}

export default Page12
