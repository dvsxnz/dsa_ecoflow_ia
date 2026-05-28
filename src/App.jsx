import React from 'react'

const sprintPlan = [
  {
    week: 'Sprint 0',
    title: 'Alinhamento e prompt mestre',
    period: 'Semana 1',
    tasks: [
      'Definir escopo do TCC, público-alvo e proposta de valor da cooperativa EcoFlow.',
      'Refinar o prompt em duas etapas: IA inicial e validação final no ChatGPT/Codex.',
      'Criar repositório GitHub, quadro Kanban e padrão de documentação do grupo.',
    ],
  },
  {
    week: 'Sprint 1',
    title: 'Pesquisa, requisitos e protótipo',
    period: 'Semanas 2 e 3',
    tasks: [
      'Entrevistar usuários, registrar dores e mapear fluxos da cooperativa de reciclagem.',
      'Escrever requisitos funcionais e não funcionais com critérios de aceite.',
      'Construir wireframes mobile-first para alunos que desenvolvem pelo celular.',
    ],
  },
  {
    week: 'Sprint 2',
    title: 'Frontend ReactJS com Vite',
    period: 'Semanas 4 a 6',
    tasks: [
      'Implementar landing page, catálogo de artesanatos reciclados e formulário de contato.',
      'Criar componentes reutilizáveis, rotas e identidade visual sustentável.',
      'Preparar build para deploy no Vercel e revisar acessibilidade básica.',
    ],
  },
  {
    week: 'Sprint 3',
    title: 'API, banco e integração',
    period: 'Semanas 7 a 10',
    tasks: [
      'Modelar SQL Server para produtos, pedidos, oficinas, usuários e coletas.',
      'Desenvolver endpoints em Spring Boot Java com validações e documentação.',
      'Integrar frontend com API usando dados mockados quando a infraestrutura faltar.',
    ],
  },
  {
    week: 'Sprint 4',
    title: 'Mobile, testes e apresentação',
    period: 'Semanas 11 a 14',
    tasks: [
      'Criar versão mobile em React Native Expo para consulta rápida do catálogo.',
      'Executar testes, corrigir bugs, gravar evidências e montar roteiro de apresentação.',
      'Publicar GitHub, Vercel e materiais finais para entrega de outubro.',
    ],
  },
]

const promptBlocks = [
  {
    label: 'Papel da IA',
    text: 'Atue como gerente de projeto, arquiteto de software e professor orientador de TCC para uma turma de ensino médio técnico em Informática.',
  },
  {
    label: 'Objetivo',
    text: 'Gerar uma pipeline completa para o projeto EcoFlow: cooperativa de reciclagem que transforma resíduos em artesanato, com site em ReactJS + Vite, aplicativo Expo, API Spring Boot e banco SQL Server.',
  },
  {
    label: 'Restrições',
    text: 'Considere que muitos estudantes usam apenas celular e que a turma possui cerca de 13 horas/aula semanais de 45 minutos, priorizando atividades possíveis em aula, documentação simples e tarefas pequenas por integrante.',
  },
  {
    label: 'Saída esperada',
    text: 'Entregue backlog, sprints, papéis da equipe, critérios de aceite, riscos, evidências e plano de deploy no Vercel, GitHub e apresentação final em outubro.',
  },
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__content">
          <p className="eyebrow">ReactJS + Vite • TCC • Inteligência Artificial</p>
          <h1 id="page-title">Prompt refinado para criar o TCC EcoFlow</h1>
          <p className="hero__lead">
            Um guia visual para transformar uma ideia sustentável em uma pipeline de
            desenvolvimento colaborativa, organizada por sprints e pronta para deploy no Vercel.
          </p>
          <div className="hero__actions">
            <a href="#prompt" className="button button--primary">Ver prompt</a>
            <a href="#sprints" className="button button--secondary">Planejar sprints</a>
          </div>
        </div>
        <aside className="hero__card" aria-label="Resumo do projeto">
          <span className="hero__icon">♻️</span>
          <h2>EcoFlow</h2>
          <p>Cooperativa escolar de reciclagem, artesanato, impacto social e tecnologia.</p>
          <dl>
            <div><dt>Entrega</dt><dd>Outubro</dd></div>
            <div><dt>Carga semanal</dt><dd>9h45</dd></div>
            <div><dt>Deploy</dt><dd>Vercel</dd></div>
          </dl>
        </aside>
      </section>

      <section className="section" id="prompt" aria-labelledby="prompt-title">
        <p className="section__tag">Prompt mestre</p>
        <h2 id="prompt-title">Comando final para usar no ChatGPT e Codex</h2>
        <div className="prompt-card">
          {promptBlocks.map((block) => (
            <article key={block.label}>
              <h3>{block.label}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
        <blockquote>
          “Crie um plano de TCC para o EcoFlow com backlog priorizado, sprints, entregáveis,
          divisão de papéis, tecnologias, critérios de aceite, riscos e evidências. O plano deve
          ser simples, mobile-first, viável para alunos com pouco computador e pronto para gerar
          um projeto ReactJS com Vite publicável no Vercel.”
        </blockquote>
      </section>

      <section className="section section--alt" id="sprints" aria-labelledby="sprints-title">
        <p className="section__tag">Pipeline do projeto</p>
        <h2 id="sprints-title">Sprints de desenvolvimento em equipe</h2>
        <div className="timeline">
          {sprintPlan.map((sprint) => (
            <article className="sprint-card" key={sprint.week}>
              <div>
                <span>{sprint.week}</span>
                <small>{sprint.period}</small>
              </div>
              <h3>{sprint.title}</h3>
              <ul>
                {sprint.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section grid" aria-labelledby="evidence-title">
        <div>
          <p className="section__tag">Evidências</p>
          <h2 id="evidence-title">O que entregar para comprovar evolução</h2>
          <p>
            Cada sprint deve gerar evidências simples: prints do Kanban, commits no GitHub,
            links do Vercel, fotos das aulas, protótipos, testes e atas rápidas de decisão.
          </p>
        </div>
        <div className="checklist">
          <h3>Checklist final</h3>
          <ul>
            <li>Repositório público no GitHub com README.</li>
            <li>Site ReactJS + Vite publicado no Vercel.</li>
            <li>Backlog e sprints documentados.</li>
            <li>Apresentação com problema, solução, demo e próximos passos.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default App
