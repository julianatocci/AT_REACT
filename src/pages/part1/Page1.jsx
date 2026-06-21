import Accordion from '../../components/Accordion'

function Page1() {
  return (
    <div className="pagina">
      <h1>Exercício 1 - Pergunta e Resposta</h1>
      <Accordion
        pergunta="O que é o React?"
        resposta="React é uma biblioteca JavaScript usada para criar interfaces de usuário a partir de componentes reutilizáveis."
      />
    </div>
  )
}

export default Page1
