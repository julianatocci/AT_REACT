import { useState } from 'react'

function Page5({ initialChecked = false }) {
  const [admin, setAdmin] = useState(initialChecked)

  return (
    <div className="pagina">
      <h1>Exercício 5 - Checkbox Administrador</h1>

      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={admin}
          onChange={(e) => setAdmin(e.target.checked)}
        />
        Administrador
      </label>

      <p>
        {admin
          ? 'O usuário atual é Administrador'
          : 'O usuário atual é Colaborador'}
      </p>
    </div>
  )
}

export default Page5
