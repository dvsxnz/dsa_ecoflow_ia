import React from 'react'

const promptTechniques = [
  'Persona: gerente de projeto, professor orientador e arquiteto de software.',
  'Contexto completo: curso técnico, tecnologias, prazo de outubro e limitações reais.',
  'Few-shot: usar EcoFlow como exemplo de cooperativa de reciclagem e artesanato.',
  'Formato de saída: backlog, sprints, critérios de aceite, evidências e deploy.',
  'Restrições: mobile-first, tarefas pequenas, 13 aulas semanais de 45 minutos.',
]

const sprintPlan = [
  {
    week: 'Sprint 0',
    title: 'Prompt, escopo e organização',
    period: 'Semana 1',
    goal: 'Sair da ideia inicial para um plano viável de TCC.',
    tasks: [
      'Refinar o prompt em duas rodadas: IA de preferência, ChatGPT e Codex no VSCode.',
      'Definir problema, público-alvo, proposta de valor e nome do produto EcoFlow.',
      'Criar GitHub público, README, Kanban, cronograma e regras de commits do grupo.',
    ],
    evidence: 'Prompt versionado, ata de escopo, quadro Kanban e link do repositório.',
  },
  {
    week: 'Sprint 1',
    title: 'Pesquisa e requisitos',
    period: 'Semanas 2 e 3',
    goal: 'Entender usuários, regras de negócio e funcionalidades mínimas.',
    tasks: [
      'Entrevistar possíveis clientes, cooperados, professores e colegas da escola.',
      'Escrever histórias de usuário, requisitos funcionais e não funcionais.',
      'Priorizar MVP com catálogo, pontos de coleta, oficinas e formulário de contato.',
    ],
    evidence: 'Formulários, mapa de empatia, backlog priorizado e critérios de aceite.',
  },
  {
    week: 'Sprint 2',
    title: 'Protótipo e frontend',
    period: 'Semanas 4 a 6',
    goal: 'Construir um site ReactJS com Vite responsivo e publicável.',
    tasks: [
      'Criar identidade visual sustentável, wireframes mobile-first e componentes React.',
      'Implementar landing page, catálogo de artesanatos, impacto ambiental e contato.',
      'Publicar primeira versão no Vercel e validar acessibilidade básica.',
    ],
    evidence: 'Prints do protótipo, commits, link do Vercel e checklist de responsividade.',
  },
  {
    week: 'Sprint 3',
    title: 'API, banco e integração',
    period: 'Semanas 7 a 10',
    goal: 'Conectar o produto a dados estruturados e regras de negócio.',
    tasks: [
      'Modelar SQL Server para produtos, coletas, oficinas, pedidos e usuários.',
      'Criar API Spring Boot com endpoints documentados, validações e dados de teste.',
      'Integrar frontend com API ou mocks quando o laboratório/rede estiver indisponível.',
    ],
    evidence: 'DER, scripts SQL, documentação da API, vídeos curtos e testes de endpoints.',
  },
  {
    week: 'Sprint 4',
    title: 'Mobile e experiência do usuário',
    period: 'Semanas 11 e 12',
    goal: 'Ampliar acesso para estudantes e usuários que dependem do celular.',
    tasks: [
      'Criar app React Native Expo para consulta do catálogo e pontos de coleta.',
      'Ajustar textos, navegação e formulários com foco em usabilidade no celular.',
      'Preparar dados offline ou simulados para demonstrações sem internet estável.',
    ],
    evidence: 'QR Code do Expo, prints em celulares, roteiro de teste e feedback de usuários.',
  },
  {
    week: 'Sprint 5',
    title: 'Testes, documentação e apresentação',
    period: 'Semanas 13 e 14',
    goal: 'Concluir entrega, ensaiar apresentação e organizar evidências.',
    tasks: [
      'Executar testes manuais, corrigir bugs críticos e revisar requisitos atendidos.',
      'Finalizar README, slides, pitch, roteiro da demo e divisão de fala da equipe.',
      'Entregar links públicos: GitHub, Vercel, vídeos e anexos para avaliação.',
    ],
    evidence: 'Checklist final, release no GitHub, deploy estável e apresentação ensaiada.',
  },
]

const deliverables = [
  {
    title: 'Prompt refinado',
    description: 'Documento com persona, contexto, tarefa, restrições, saída esperada e critérios de qualidade.',
  },
  {
    title: 'Site Vite + React',
    description: 'Página pública, responsiva e com conteúdo do TCC EcoFlow para deploy no Vercel.',
  },
  {
    title: 'Pipeline do TCC',
    description: 'Sprints, backlog, papéis, evidências, riscos e plano de entrega até outubro.',
  },
  {
    title: 'Link do GitHub',
    description: 'Repositório público com código, README, commits e instruções para avaliação.',
  },
]

const roles = [
  'Product Owner: prioriza requisitos e mantém contato com orientador.',
  'Scrum Master: organiza Kanban, prazos, atas e impedimentos.',
  'Frontend: cria páginas ReactJS, responsividade e deploy no Vercel.',
  'Backend/Banco: desenvolve API Spring Boot e scripts SQL Server.',
  'QA/Documentação: testa, registra evidências e prepara apresentação.',
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__content">
          <p className="eyebrow">ReactJS + Vite • IA generativa • Deploy Vercel</p>
          <h1 id="page-title">Prompt refinado para o TCC EcoFlow</h1>
          <p className="hero__lead">
            Site criado para demonstrar uma pipeline de desenvolvimento em sprints, usando
            técnicas de prompt engineering para transformar uma ideia de reciclagem e artesanato
            em um projeto técnico pronto para apresentação.
          </p>
          <div className="hero__actions">
            <a href="#prompt" className="button button--primary">Ler prompt mestre</a>
            <a href="#sprints" className="button button--secondary">Ver sprints</a>
          </div>
        </div>
        <aside className="hero__card" aria-label="Resumo do projeto">
          <span className="hero__icon">♻️</span>
          <h2>EcoFlow</h2>
          <p>Cooperativa escolar que reaproveita resíduos e transforma materiais recicláveis em artesanato.</p>
          <dl>
            <div><dt>Entrega final</dt><dd>Outubro</dd></div>
            <div><dt>Tempo semanal</dt><dd>9h45</dd></div>
            <div><dt>Stack</dt><dd>React + Vite</dd></div>
          </dl>
        </aside>
      </section>

      <section className="section" id="prompt" aria-labelledby="prompt-title">
        <p className="section__tag">Prompt mestre</p>
        <h2 id="prompt-title">Comando final para usar no ChatGPT e no Codex</h2>
        <div className="prompt-shell">
          <p>
            <strong>Tarefa:</strong> Desenvolva um plano completo para o TCC “EcoFlow”, uma
            cooperativa de reciclagem que produz artesanato sustentável. O projeto deve incluir um
            site ReactJS com Vite publicável no Vercel, app mobile em React Native Expo, API Spring
            Boot Java e banco SQL Server.
          </p>
          <p>
            <strong>Contexto:</strong> A equipe é formada por alunos do ensino médio técnico em
            Informática. O TCC será apresentado em outubro e precisa mostrar problema, solução,
            produto funcional, documentação e evidências de evolução.
          </p>
          <p>
            <strong>Restrições:</strong> Muitos integrantes possuem apenas celular para parte do
            desenvolvimento. A turma tem 13 horas/aula semanais de 45 minutos, então as tarefas
            devem ser pequenas, colaborativas, mobile-first e possíveis durante as aulas técnicas.
          </p>
          <p>
            <strong>Saída esperada:</strong> Gere backlog priorizado, sprints, papéis da equipe,
            critérios de aceite, riscos, evidências, plano de deploy no Vercel/GitHub e roteiro de
            apresentação final.
          </p>
        </div>
        <div className="techniques" aria-label="Técnicas de inteligência artificial usadas no prompt">
          {promptTechniques.map((technique) => <span key={technique}>{technique}</span>)}
        </div>
      </section>

      <section className="section section--alt" id="sprints" aria-labelledby="sprints-title">
        <p className="section__tag">Pipeline do projeto</p>
        <h2 id="sprints-title">Sprints de desenvolvimento em equipe</h2>
        <div className="timeline">
          {sprintPlan.map((sprint) => (
            <article className="sprint-card" key={sprint.week}>
              <div className="sprint-card__header">
                <span>{sprint.week}</span>
                <small>{sprint.period}</small>
              </div>
              <h3>{sprint.title}</h3>
              <p className="sprint-card__goal">{sprint.goal}</p>
              <ul>
                {sprint.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
              <p className="sprint-card__evidence"><strong>Evidência:</strong> {sprint.evidence}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section grid" aria-labelledby="delivery-title">
        <div>
          <p className="section__tag">Entregáveis</p>
          <h2 id="delivery-title">O que precisa estar pronto para obter a nota</h2>
          <p>
            A entrega deve comprovar processo e produto: prompt refinado, site publicado,
            repositório público e evidências de que a equipe evoluiu em cada sprint.
          </p>
        </div>
        <div className="deliverable-grid">
          {deliverables.map((deliverable) => (
            <article className="mini-card" key={deliverable.title}>
              <h3>{deliverable.title}</h3>
              <p>{deliverable.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section roles" aria-labelledby="roles-title">
        <p className="section__tag">Equipe e evidências</p>
        <h2 id="roles-title">Divisão de papéis e checklist final</h2>
        <div className="roles__content">
          <ul className="role-list">
            {roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
          <div className="checklist">
            <h3>Checklist para publicação</h3>
            <ul>
              <li>Executar build local sem erros.</li>
              <li>Subir o código para um repositório público no GitHub.</li>
              <li>Importar o projeto no Vercel com preset Vite.</li>
              <li>Enviar o link público do GitHub na tarefa.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
