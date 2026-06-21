import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'

import Page1 from './pages/part1/Page1'
import Page2 from './pages/part1/Page2'
import Page3 from './pages/part1/Page3'
import Page4 from './pages/part1/Page4'

import Page5 from './pages/part2/Page5'
import Page6 from './pages/part2/Page6'
import Page7 from './pages/part2/Page7'
import Page8 from './pages/part2/Page8'

import Page9 from './pages/part3/Page9'
import Page10 from './pages/part3/Page10'
import Page11 from './pages/part3/Page11'
import Page12 from './pages/part3/Page12'

import Part4Admin from './pages/part4/Part4Admin'
import Part4Colab from './pages/part4/Part4Colab'
import Part4Brasil from './pages/part4/Part4Brasil'
import Part4FormPreenchido from './pages/part4/Part4FormPreenchido'

function App() {
  return (
    <div className="app">
      <Menu />

      <div className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/exercicio-1" element={<Page1 />} />
          <Route path="/exercicio-2" element={<Page2 />} />
          <Route path="/exercicio-3" element={<Page3 />} />
          <Route path="/exercicio-4" element={<Page4 />} />

          <Route path="/exercicio-5" element={<Page5 />} />
          <Route path="/exercicio-6" element={<Page6 />} />
          <Route path="/exercicio-7" element={<Page7 />} />
          <Route path="/exercicio-8" element={<Page8 />} />

          <Route path="/exercicio-9" element={<Page9 />} />
          <Route path="/exercicio-10" element={<Page10 />} />
          <Route path="/exercicio-11" element={<Page11 />} />
          <Route path="/exercicio-12" element={<Page12 />} />

          <Route path="/administrador-selecionado" element={<Part4Admin />} />
          <Route path="/colaborador-selecionado" element={<Part4Colab />} />
          <Route path="/pais-brasil" element={<Part4Brasil />} />
          <Route path="/formulario-preenchido" element={<Part4FormPreenchido />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
