import React from 'react'

const products = [
  {
    name: 'Cachepô de garrafa PET',
    price: 'R$ 18,00',
    tag: 'Decoração',
    description: 'Peça pintada à mão para plantas pequenas, produzida com garrafas reaproveitadas.',
    emoji: '🪴',
  },
  {
    name: 'Caderno EcoFlow',
    price: 'R$ 24,00',
    tag: 'Papel reciclado',
    description: 'Caderno artesanal com capa de papelão reaproveitado e folhas selecionadas.',
    emoji: '📒',
  },
  {
    name: 'Luminária de vidro',
    price: 'R$ 35,00',
    tag: 'Iluminação',
    description: 'Luminária decorativa feita com potes de vidro, barbante e lâmpada LED.',
    emoji: '💡',
  },
]

const processSteps = [
  'Coleta seletiva com alunos, famílias e parceiros do bairro.',
  'Triagem dos materiais por tipo, condição e potencial de reutilização.',
  'Criação de artesanatos em oficinas colaborativas e sustentáveis.',
  'Venda solidária para financiar novas oficinas e ações ambientais.',
]

const impactMetrics = [
  { value: '180 kg', label: 'resíduos desviados do descarte comum' },
  { value: '42', label: 'peças artesanais produzidas no semestre' },
  { value: '13 h/a', label: 'semanais para evolução técnica do TCC' },
]

const workshops = [
  'Introdução à reciclagem criativa',
  'Artesanato com PET, vidro e papelão',
  'Precificação e catálogo digital',
  'Apresentação final e impacto social',
]

function App() {
  return (
    <main>
      <header className="hero" id="inicio">
        <nav className="nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="EcoFlow início">
            <span>♻️</span>
            EcoFlow
          </a>
          <div className="nav__links">
            <a href="#produtos">Produtos</a>
            <a href="#processo">Processo</a>
            <a href="#oficinas">Oficinas</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <section className="hero__grid" aria-labelledby="hero-title">
          <div className="hero__content">
            <p className="eyebrow">Cooperativa escolar de reciclagem</p>
            <h1 id="hero-title">Transformamos resíduos em artesanato com propósito.</h1>
            <p className="hero__lead">
              A EcoFlow conecta educação ambiental, tecnologia e geração de renda por meio de
              peças artesanais feitas com materiais recicláveis coletados na comunidade.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#produtos">Conhecer catálogo</a>
              <a className="button button--secondary" href="#contato">Agendar coleta</a>
            </div>
          </div>

          <aside className="hero__card" aria-label="Resumo de impacto EcoFlow">
            <span className="hero__icon">🌿</span>
            <h2>Impacto local</h2>
            <p>
              Cada peça evita descarte, incentiva consumo consciente e fortalece o TCC técnico
              desenvolvido pelos estudantes.
            </p>
            <div className="hero__badge">Projeto pronto para GitHub e Vercel</div>
          </aside>
        </section>
      </header>

      <section className="section metrics" aria-label="Indicadores de impacto">
        {impactMetrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="section" id="produtos" aria-labelledby="products-title">
        <div className="section__heading">
          <p className="section__tag">Catálogo sustentável</p>
          <h2 id="products-title">Artesanatos reciclados em destaque</h2>
          <p>
            Produtos pensados para decoração, estudo e presentes conscientes. Os valores são
            sugestões para simulação do TCC e podem ser ajustados pelo grupo.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-card__media">{product.emoji}</div>
              <span>{product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="processo" aria-labelledby="process-title">
        <div className="section__heading">
          <p className="section__tag">Como funciona</p>
          <h2 id="process-title">Da coleta ao produto final</h2>
          <p>
            A operação foi organizada em etapas simples para caber na rotina escolar, nos horários
            de aula técnica e também no acompanhamento por celular.
          </p>
        </div>
        <ol className="steps">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section split" id="oficinas" aria-labelledby="workshops-title">
        <div>
          <p className="section__tag">Educação ambiental</p>
          <h2 id="workshops-title">Oficinas para aprender produzindo</h2>
          <p>
            As oficinas orientam a turma desde a sensibilização ambiental até a criação do catálogo
            digital, unindo empreendedorismo, design e desenvolvimento de sistemas.
          </p>
        </div>
        <div className="workshop-card">
          <h3>Trilha de oficinas</h3>
          <ul>
            {workshops.map((workshop) => <li key={workshop}>{workshop}</li>)}
          </ul>
        </div>
      </section>

      <section className="section contact" id="contato" aria-labelledby="contact-title">
        <div className="contact__content">
          <p className="section__tag">Participe</p>
          <h2 id="contact-title">Doe materiais ou encomende uma peça EcoFlow</h2>
          <p>
            Separe garrafas PET, potes de vidro, papelão e papéis limpos. A equipe EcoFlow pode
            registrar sua coleta, orientar o descarte correto e apresentar opções de artesanato.
          </p>
        </div>
        <form className="contact__form" aria-label="Formulário demonstrativo de contato EcoFlow">
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" />
          </label>
          <label>
            Interesse
            <select name="interest" defaultValue="coleta">
              <option value="coleta">Agendar coleta</option>
              <option value="produto">Comprar produto</option>
              <option value="oficina">Participar de oficina</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea name="message" rows="4" placeholder="Conte como deseja colaborar" />
          </label>
          <button className="button button--primary" type="button">Enviar demonstração</button>
        </form>
      </section>
    </main>
  )
}

export default App
