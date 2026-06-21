import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav className="menu">
      <h2>Menu</h2>

      <p className="menu-secao">Parte 1</p>
      <Link to="/exercicio-1">Exercício 1</Link>
      <Link to="/exercicio-2">Exercício 2</Link>
      <Link to="/exercicio-3">Exercício 3</Link>
      <Link to="/exercicio-4">Exercício 4</Link>

      <p className="menu-secao">Parte 2</p>
      <Link to="/exercicio-5">Exercício 5</Link>
      <Link to="/exercicio-6">Exercício 6</Link>
      <Link to="/exercicio-7">Exercício 7</Link>
      <Link to="/exercicio-8">Exercício 8</Link>

      <p className="menu-secao">Parte 3</p>
      <Link to="/exercicio-9">Exercício 9</Link>
      <Link to="/exercicio-10">Exercício 10</Link>
      <Link to="/exercicio-11">Exercício 11</Link>
      <Link to="/exercicio-12">Exercício 12</Link>

      <p className="menu-secao">Parte 4</p>
      <Link to="/administrador-selecionado">Administrador Selecionado</Link>
      <Link to="/colaborador-selecionado">Colaborador Selecionado</Link>
      <Link to="/pais-brasil">País Brasil Selecionado</Link>
      <Link to="/formulario-preenchido">Formulário Preenchido</Link>
    </nav>
  )
}

export default Menu
