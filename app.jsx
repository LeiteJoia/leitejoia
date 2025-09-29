
const products = [
  { name: "Queijo Branco", img: "https://images.unsplash.com/photo-1619611544105-10101bc8975e", cat: "Queijos de Vaca", desc: "Rico em cálcio, sabor suave." },
  { name: "Mussarela", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55", cat: "Queijos de Vaca", desc: "Textura macia e sabor delicado." },
  { name: "Nozinho", img: "https://images.unsplash.com/photo-1545218553-45f8b6b5ba21", cat: "Queijos de Vaca", desc: "Prático para petiscar." },
  { name: "Palito de Mussarela", img: "https://images.unsplash.com/photo-1559563362-c667ba5f5486", cat: "Queijos de Vaca", desc: "Proteína para lanches rápidos." },
  { name: "Requeijão de Corte", img: "https://images.unsplash.com/photo-1526312426976-593c319f0d8f", cat: "Queijos de Vaca", desc: "Cremoso e saboroso." },
  { name: "Requeijão Cremoso", img: "https://images.unsplash.com/photo-1505575967455-40e256f73376", cat: "Queijos de Vaca", desc: "Perfeito no pão ou café da manhã." },
  { name: "Provolone", img: "https://images.unsplash.com/photo-1604908554007-7d9c9dd3b1d1", cat: "Queijos de Vaca", desc: "Ótimo para tábuas e receitas." },
  { name: "Parmesão", img: "https://images.unsplash.com/photo-1613478223719-3d9fb0f8eca9", cat: "Queijos de Vaca", desc: "Envelhecido, intenso em sabor." },
  { name: "Meia Cura", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb", cat: "Queijos de Vaca", desc: "Equilíbrio entre maciez e sabor." },
  { name: "Queijo Coalho", img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305", cat: "Queijos de Vaca", desc: "Excelente para grelhar." },
  { name: "Manteiga Artesanal", img: "https://images.unsplash.com/photo-1589985270826-4b7a6f1b29c8", cat: "Lácteos & Outros", desc: "Natural, sem conservantes." },
  { name: "Doce de Leite", img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2b1a9", cat: "Lácteos & Outros", desc: "Clássico, perfeito para sobremesas." },
  { name: "Manta (queijo de esticar)", img: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7", cat: "Queijos de Vaca", desc: "Leve e cremosa para recheios." },
  { name: "Mussarela de Búfala", img: "https://images.unsplash.com/photo-1561177404-bb0bffb4b3d0", cat: "Linha Búfala", desc: "Alta qualidade, menos lactose." },
  { name: "Nozinho de Búfala", img: "https://images.unsplash.com/photo-1590080876200-3391069b57b2", cat: "Linha Búfala", desc: "Fresco, ideal para saladas." },
  { name: "Burrata", img: "https://images.unsplash.com/photo-1604908554313-0f7d5bce4c76", cat: "Linha Búfala", desc: "Recheada, cremosa e irresistível." },
  { name: "Manta de Búfala", img: "https://images.unsplash.com/photo-1543353071-087092ec393d", cat: "Linha Búfala", desc: "Aberta em folha, versátil." },
];

const depoimentos = [
  { nome: "Carolina P.", texto: "Queijos maravilhosos e atendimento acolhedor. Saber que apoio a agricultura familiar faz toda a diferença!" },
  { nome: "Rafael M.", texto: "A mussarela de búfala é incrível: leve, saborosa e perfeita para minhas saladas." },
  { nome: "Dona Lúcia", texto: "O doce de leite lembra o da minha infância. Produto honesto, sem conservantes!" },
];

const navItems = [
  { id: "home", label: "Início" },
  { id: "sobre", label: "Sobre nós" },
  { id: "produtos", label: "Produtos" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

function useGroupedProducts(list) {
  const [grouped, setGrouped] = React.useState({});
  React.useEffect(() => {
    const g = {};
    list.forEach(p => { g[p.cat] = g[p.cat] || []; g[p.cat].push(p); });
    setGrouped(g);
  }, []);
  return grouped;
}

function HeroCarousel() {
  const slides = [
    { src: "https://images.unsplash.com/photo-1600250395178-cf3b98ea1d1c", alt: "Família feliz reunida com queijos à mesa" },
    { src: "./assets/catalogo-leite-joia.png", alt: "Catálogo Leite Jóia — produtos artesanais" },
    { src: "https://images.unsplash.com/photo-1604908554313-0f7d5bce4c76", alt: "Tábuas de queijos artesanais" },
  ];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-[56vh] w-full overflow-hidden">
      {slides.map((s, idx) => (
        <img key={idx} src={s.src} alt={s.alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i===idx? 'opacity-100':'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10"></div>
      <div className="absolute inset-x-0 bottom-0 pb-12">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">A marca do nosso leite</h1>
          <p className="mt-3 max-w-2xl text-white/90 text-sm md:text-base">Produtos artesanais feitos por famílias produtoras. Comércio justo, bem‑estar animal e sabor de verdade. Aprecie com calma e com alma.</p>
          <div className="mt-5 flex gap-3">
            <a href="#produtos" className="rounded-2xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md">Ver produtos</a>
            <a href="#sobre" className="rounded-2xl bg-white/10 text-white border border-white/50 px-4 py-2 text-sm font-semibold hover:bg-white/20">Conheça a história</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const grouped = useGroupedProducts(products);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-neutral-900 bg-white">
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#1e40af] text-white font-bold grid place-items-center">LJ</div>
            <span className="font-semibold tracking-tight">Leite Jóia</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(n => (
              <button key={n.id} onClick={() => scrollToId(n.id)} className="hover:text-[#1e40af] transition-colors">{n.label}</button>
            ))}
          </nav>
          <a href="#contato" onClick={(e)=>{e.preventDefault();scrollToId('contato')}} className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-[#1e40af] text-white shadow hover:shadow-md transition">Comprar</a>
        </div>
      </header>

      <section id="home" className="pt-24 md:pt-28">
        <HeroCarousel />
      </section>

      <section id="sobre" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Sobre nós</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">Somos mais que uma marca de leite e derivados. Nascemos para regenerar vínculos entre consumidores e produtores, garantindo segurança e qualidade desde 2003. Trabalhamos com famílias produtoras, unindo processos modernos a técnicas artesanais para criar alimentos íntegros e saborosos.</p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li><span className="font-semibold">Produto honesto:</span> sem aditivos, corantes ou conservantes.</li>
              <li><span className="font-semibold">Como fazemos importa:</span> práticas que valorizam pessoas e o meio ambiente.</li>
              <li><span className="font-semibold">Ganho compartilhado:</span> oportunidades para produtores, colaboradores e comunidade.</li>
            </ul>
            <a href="./assets/nossa-historia.pdf" className="mt-6 inline-block text-sm underline decoration-2 underline-offset-4">Baixar “Nossa história” (PDF)</a>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1511910849309-0dffb6f57bb3" alt="Produtores de leite em ambiente rural" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="py-16 md:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Nossa linha de produtos</h2>
            <a href="./assets/catalogo-leite-joia.png" className="text-sm underline decoration-2 underline-offset-4" download>Baixar catálogo</a>
          </div>
          <p className="mt-3 text-neutral-700 max-w-2xl">Queijos artesanais de vaca e de búfala, além de manteiga e doce de leite. Tudo feito manualmente com leite selecionado.</p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <img src="./assets/catalogo-leite-joia.png" alt="Catálogo Leite Jóia" className="w-full object-cover"/>
          </div>

          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mt-10">
              <h3 className="text-lg font-semibold text-neutral-800">{cat}</h3>
              <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((p) => (
                  <div key={p.name} className="group rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={p.img || "./assets/catalogo-leite-joia.png"} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition"/>
                    </div>
                    <div className="p-4">
                      <div className="font-semibold">{p.name}</div>
                      <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">O que dizem nossos clientes</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <figure key={i} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <blockquote className="text-neutral-700">“{d.texto}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-neutral-900">{d.nome}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#1e40af] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Visite nossa loja e empório</h3>
            <p className="mt-1 text-white/90">Queijos, manteiga, doce de leite e produtos regionais selecionados.</p>
          </div>
          <a href="https://wa.me/551835222289" target="_blank" rel="noreferrer" className="rounded-2xl bg-white text-[#1e40af] px-5 py-2 font-semibold shadow hover:shadow-md">Fale no WhatsApp</a>
        </div>
      </section>

      <section id="contato" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Fale com a gente</h2>
            <p className="mt-3 text-neutral-700">ASSOCIAÇÃO DOS PRODUTORES DE LEITE DO MUNICÍPIO DE ADAMANTINA E REGIÃO</p>
            <div className="mt-6 space-y-2 text-neutral-800">
              <p><span className="font-semibold">Endereço:</span> Rua Quintino Bocaiúva, s/nº – Bairro Itamarati – CEP 17805-306 – Adamantina/SP</p>
              <p><span className="font-semibold">Telefone:</span> (18) 3522-2289 • <span className="font-semibold">Instagram:</span> @leitejoia</p>
              <p><span className="font-semibold">E‑mail:</span> leite.joia@terra.com.br</p>
              <p className="text-sm text-neutral-600">CNPJ 06.277.373/0001-90</p>\n            </div>\n          </div>\n          <form className="bg-neutral-50 rounded-3xl p-6 border border-neutral-200 shadow-sm">\n            <div className="grid grid-cols-1 gap-4">\n              <input className="rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e40af]" placeholder="Seu nome" />\n              <input type="email" className="rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e40af]" placeholder="Seu e‑mail" />\n              <textarea rows="4" className="rounded-xl border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e40af]" placeholder="Sua mensagem" />\n              <button type="button" className="rounded-2xl bg-[#1e40af] text-white px-5 py-2 font-semibold shadow hover:shadow-md">Enviar</button>\n              <p className="text-xs text-neutral-500">*Formulário ilustrativo. Conecte a um serviço (Formspree, Getform, etc.) para receber as mensagens.</p>\n            </div>\n          </form>\n        </div>\n      </section>\n\n      <footer className="py-8 border-t border-neutral-200">\n        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">\n          <p>© {new Date().getFullYear()} Leite Jóia — A marca do nosso leite.</p>\n          <div className="flex gap-4">\n            <a href="#sobre" className="hover:text-neutral-900">Sobre</a>\n            <a href="#produtos" className="hover:text-neutral-900">Produtos</a>\n            <a href="#depoimentos" className="hover:text-neutral-900">Depoimentos</a>\n          </div>\n        </div>\n      </footer>\n    </div>\n  );\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);\n