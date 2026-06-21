import Accordion from '../../components/Accordion'

function Page4() {
  const resposta =
    'Resumo: (1) Performance - uma nova função é criada a cada renderização, ' +
    'o que pode gerar re-renderizações desnecessárias em componentes filhos; ' +
    '(2) Legibilidade - misturar lógica com a marcação (JSX) deixa o código mais ' +
    'poluído e difícil de entender quando o evento é complexo; ' +
    '(3) Reutilização - a mesma lógica não pode ser facilmente reaproveitada em ' +
    'outros lugares, sendo necessário duplicar código; ' +
    '(4) Manutenção e testes - funções anônimas inline são mais difíceis de testar ' +
    'isoladamente e de depurar, pois não aparecem nomeadas na stack trace.'

  return (
    <div className="pagina">
      <h1>Exercício 4 - Desvantagens do Inline Event</h1>
      <Accordion
        pergunta="Quais são as desvantagens de implementar um inline event?"
        resposta={resposta}
      />
    </div>
  )
}

export default Page4
