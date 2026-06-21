import { useEffect, useState } from 'react'

function Page8() {
  const [categorias, setCategorias] = useState([])
  const [selecionada, setSelecionada] = useState(null)

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => res.json())
      .then((data) => setCategorias(data.categories))
  }, [])

  function handleChange(e) {
    const categoria = categorias.find((c) => c.strCategory === e.target.value)
    setSelecionada(categoria)
  }

  return (
    <div className="pagina">
      <h1>Exercício 8 - Categorias de Pratos</h1>

      <select className="select" defaultValue="" onChange={handleChange}>
        <option value="" disabled>
          Selecione uma categoria
        </option>
        {categorias.map((categoria) => (
          <option key={categoria.idCategory} value={categoria.strCategory}>
            {categoria.strCategory}
          </option>
        ))}
      </select>

      {selecionada && (
        <div className="card">
          <h2>{selecionada.strCategory}</h2>
          <img
            className="imagem-categoria"
            src={selecionada.strCategoryThumb}
            alt={selecionada.strCategory}
          />
          <p>{selecionada.strCategoryDescription}</p>
        </div>
      )}
    </div>
  )
}

export default Page8
