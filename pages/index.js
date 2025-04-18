export default function YieldexLandingPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFC] text-gray-900 flex flex-col items-center px-6 py-12">
      {/* Logo */}
      <header className="w-full max-w-6xl mb-12 flex justify-center">
        <img src="/logo-yieldex.png" alt="Yieldex Logo" className="h-56 md:h-64" />
      </header>

      {/* Hero Section */}
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E2A3A]">Descubra os melhores investimentos para o seu objetivo</h1>
        <p className="text-lg md:text-xl mb-6 text-[#3A4D63]">
          Com base nas suas metas e perfil, a IA da <span className="font-semibold text-[#2ECC71]">Yieldex</span> encontra ativos que fazem sentido pra você — fundos, ações e tesouro direto, em minutos.
        </p>
        <a
          href="https://tally.so/r/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2ECC71] text-white px-6 py-3 rounded-2xl shadow-md hover:bg-[#2ECC71] transition"
        >
          Começar agora
        </a>
      </section>

      {/* How It Works */}
      <section className="mt-20 max-w-4xl w-full grid gap-10 md:grid-cols-3 text-center">
        <div>
          <span className="text-3xl">📝</span>
          <h3 className="text-xl font-semibold mt-4 text-[#1E2A3A]">Responda um formulário</h3>
          <p className="text-[#4B5C6B] mt-2">Informações simples sobre seu objetivo, perfil e valor disponível.</p>
        </div>
        <div>
          <span className="text-3xl">🤖</span>
          <h3 className="text-xl font-semibold mt-4 text-[#1E2A3A]">IA analisa seus dados</h3>
          <p className="text-[#4B5C6B] mt-2">Nosso sistema entende seu perfil e busca os melhores ativos.</p>
        </div>
        <div>
          <span className="text-3xl">📈</span>
          <h3 className="text-xl font-semibold mt-4 text-[#1E2A3A]">Receba sugestões</h3>
          <p className="text-[#4B5C6B] mt-2">Receba recomendações por e-mail com explicações claras.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2A3A]">Por que usar o Yieldex?</h2>
        <ul className="text-[#3A4D63] space-y-2">
          <li>✅ Rápido e gratuito</li>
          <li>✅ Linguagem simples e direta</li>
          <li>✅ Sugestões compatíveis com seu perfil</li>
          <li>✅ Feito para quem está começando ou já investe</li>
        </ul>
      </section>

      {/* Example Output */}
      <section className="mt-20 max-w-xl bg-white p-6 rounded-2xl shadow border border-[#E3E8F0]">
        <h3 className="text-xl font-semibold mb-4 text-[#1E2A3A]">Exemplo de sugestão</h3>
        <div className="text-left text-[#3A4D63]">
          <p><strong>💰 Tesouro IPCA+ 2035</strong><br/>Ideal para quem busca segurança e proteção contra inflação no longo prazo.<br/><em>Risco: Baixo | Indicado para objetivos como aposentadoria.</em></p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1E2A3A]">Pronto para investir com mais clareza?</h2>
        <a
          href="https://tally.so/r/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2ECC71] text-white px-6 py-3 rounded-2xl shadow-md hover:bg-[#465cd0] transition"
        >
          Quero receber minhas sugestões
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-sm text-[#7D8A9A] text-center">
        <p>© {new Date().getFullYear()} Yieldex. Todos os direitos reservados.</p>
        <p className="mt-2">*As sugestões são automatizadas. Invista com consciência.*</p>
      </footer>
    </main>
  );
}


