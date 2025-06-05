export default function Home() {
  return (
    <div>
      <nav className="bg-black py-4 px-15 flex items-center justify-between border-b-1 border-gray-800">
        <div className="flex items-center text-4xl font-bold">
          <p>Inova</p>
          <p className="text-green-300">Dev</p>
        </div>

        <div className="flex items-center pr-10 gap-6 text-lg text-zinc-400 cursor-pointer">
          <a href="#modelos" className="hover:text-green-300 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">
            Modelos
          </a>
          <a href="#planos" className="hover:text-green-300 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">
            Planos
          </a>
          <a href="#sobre" className="hover:text-green-300 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">
            Sobre
          </a>
          <a href="#contato" className="hover:text-green-300 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">
            Contato
          </a>
        </div>

        <div className="flex items-center">
          <button className="p-3 cursor-pointer text-black bg-green-300 text-xl font-semibold rounded-lg transition-all duration-300 hover:text-green-300 hover:bg-black border-1 border-green-300">
            Começar
          </button>
        </div>
      </nav>

      <main className="min-h-screen bg-white">
        <section className="flex flex-col py-35 gap-4 items-center bg-gradient-to-tl from-black via-zinc-900 to-black">
          <div className="text-5xl font-bold flex gap-3 text-center">
            <h1>Seu site pronto em</h1>
            <h1 className="text-green-300">24 horas</h1>
          </div>

          <p className="text-zinc-400 text-center">
            Design moderno, responsivo e com performance. Escolha, personalize e publique.
          </p>

          <button className="p-2 cursor-pointer text-black bg-green-300 text-lg font-semibold rounded-lg transition-all duration-300 hover:text-green-300 hover:bg-black border-1 border-green-300">
            Ver modelos
          </button>
        </section>

        <section id="sobre" className="bg-black py-20">
          <div className="text-4xl font-bold text-center text-white mb-16">
            Por que escolher a InovaDev?
          </div>

          <div className="flex gap-6 justify-center px-10 text-center w-full flex-wrap">
            <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 px-5 py-14 w-64 shadow-md shadow-zinc-800 hover:shadow-lg transition">
              <p className="text-3xl">⚡</p>
              <p className="text-lg">Entrega em 24h</p>
              <p className="text-zinc-400 text-sm">Seu site publicado em até um dia útil.</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 px-5 py-14 w-64 shadow-md shadow-zinc-800 hover:shadow-lg transition">
              <p className="text-3xl">💻</p>
              <p className="text-lg">Design Atualizado</p>
              <p className="text-zinc-400 text-sm">Layout limpo, moderno e otimizado.</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 px-5 py-14 w-64 shadow-md shadow-zinc-800 hover:shadow-lg transition">
              <p className="text-3xl">📱</p>
              <p className="text-lg">100% Responsivo</p>
              <p className="text-zinc-400 text-sm">Funciona perfeitamente em qualquer dispositivo.</p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 px-5 py-14 w-64 shadow-md shadow-zinc-800 hover:shadow-lg transition">
              <p className="text-3xl">🛠</p>
              <p className="text-lg">Suporte Personalizado</p>
              <p className="text-zinc-400 text-sm">Atendimento humano e ágil sempre que você precisar.</p>
            </div>
          </div>
        </section>

        <section id="modelos" className="bg-zinc-900 py-20">
          <h1 className="text-3xl text-center font-bold text-white mb-14">Modelos em destaque</h1>

          <div className="flex gap-10 justify-center flex-wrap">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center bg-zinc-800 w-72 h-80 p-6 rounded-lg">
                <div className="bg-zinc-700 rounded-lg flex items-center justify-center w-full h-full mb-4">
                  <span className="text-zinc-400">Preview</span>
                </div>
                <p className="text-lg font-semibold text-white">Modelo {i}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="planos" className="bg-zinc-400 py-20 text-center">
          <h2 className="text-3xl font-bold mb-10 text-black">Planos e Preços</h2>
          <div className="flex justify-center gap-10 flex-wrap">
            <div className="bg-zinc-100 p-10 rounded-lg w-64 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-black">Básico</h3>
              <p className="text-green-600 font-bold text-2xl mb-4">R$ 199</p>
              <ul className="text-sm text-zinc-600">
                <li>✔ Site de 1 página</li>
                <li>✔ Responsivo</li>
                <li>✔ Publicação inclusa</li>
              </ul>
            </div>
            <div className="bg-zinc-100 p-10 rounded-lg w-64 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-black">Profissional</h3>
              <p className="text-green-600 font-bold text-2xl mb-4">R$ 349</p>
              <ul className="text-sm text-zinc-600">
                <li>✔ Até 4 páginas</li>
                <li>✔ Design personalizado</li>
                <li>✔ Formulário de contato</li>
              </ul>
            </div>
            <div className="bg-zinc-100 p-10 rounded-lg w-64 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-black">Empresarial</h3>
              <p className="text-green-600 font-bold text-2xl mb-4">R$ 599</p>
              <ul className="text-sm text-zinc-600">
                <li>✔ Site completo</li>
                <li>✔ Blog, serviços e contato</li>
                <li>✔ Suporte premium</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contato" className="bg-black py-20 text-white px-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Fale com a gente</h2>
            <p className="text-zinc-400">
              Entre em contato para dúvidas, orçamentos ou parcerias.
            </p>

            <form className="flex flex-col gap-4 text-black">
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-lg p-3 bg-zinc-400 outline-none"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="rounded-lg p-3 bg-zinc-400 outline-none"
              />
              <textarea
                placeholder="Sua mensagem"
                className="rounded-lg p-3 bg-zinc-400 outline-none"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="p-3 bg-green-300 font-semibold rounded-lg hover:bg-black hover:text-green-300 border border-green-300 transition-all"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-zinc-400 py-10 mt-5">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-1 text-2xl font-bold">
            <span>Inova</span>
            <span className="text-green-300">Dev</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} InovaDev. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-green-300 transition">
              Termos de uso
            </a>
            <a href="#" className="hover:text-green-300 transition">
              Política de privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
