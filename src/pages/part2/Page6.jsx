import { useEffect, useState } from 'react'

const API_KEY = 'rc_live_2f8e2e1b476c4e0c8e15b864c15171cd'

function Page6({ initialCountry = '' }) {
  const [paises, setPaises] = useState([])
  const [selecionado, setSelecionado] = useState(initialCountry)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function buscarPaises() {
      try {
        const offsets = [0, 100, 200]
        let todos = []

        for (const offset of offsets) {
          const resposta = await fetch(
            `https://api.restcountries.com/countries/v5?limit=100&offset=${offset}`,
            { headers: { Authorization: `Bearer ${API_KEY}` } }
          )
          const json = await resposta.json()

          if (!resposta.ok) {
            setErro(json.errors?.[0]?.message || 'Erro ao buscar países')
            return
          }

          const nomes = json.data.objects.map((pais) => pais.names.common)
          todos = [...todos, ...nomes]
        }

        todos.sort()
        setPaises(todos)
      } catch (e) {
        setErro('Não foi possível conectar à API')
      }
    }

    buscarPaises()
  }, [])

  return (
    <div className="pagina">
      <h1>Exercício 6 - Lista de Países</h1>

      {erro && <p className="erro">{erro}</p>}

      <select
        className="select"
        value={selecionado}
        onChange={(e) => setSelecionado(e.target.value)}
      >
        <option value="">Selecione um país</option>
        {paises.map((nome) => (
          <option key={nome} value={nome}>
            {nome}
          </option>
        ))}
      </select>

      {selecionado && <p>País selecionado: {selecionado}</p>}
    </div>
  )
}

export default Page6