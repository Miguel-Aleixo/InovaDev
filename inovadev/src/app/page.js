
export default function Home() {
  return (
    <div>
      <nav className="bg-black py-4 px-15 flex items-center justify-between border-b-1 border-gray-800">
        <div className="flex items-center text-4xl font-bold">
          <p>Inova</p>
          <p className="text-green-300">Dev</p>
        </div>

        <div className="flex items-center pr-10 gap-6 text-lg text-zinc-400 cursor-pointer">
          <p className="hover:opacity-80 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">Modelos</p>
          <p className="hover:opacity-80 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">Planos</p>
          <p className="hover:opacity-80 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">Sobre</p>
          <p className="hover:opacity-80 transition-all duration-300 relative after:transition-all after:duration-300 hover:after:w-full after:bg-green-300 after:w-0 after:h-[1px] after:absolute after:left-0 after:bottom-0">Contato</p>
        </div>

        <div className="flex items-center">
          <button className="p-3 cursor-pointer text-black bg-green-300 text-xl font-semibold rounded-lg transition-all duration-300 hover:text-green-300 hover:bg-black border-1 border-green-300">Começar</button>
        </div>

      </nav>

      <main className="min-h-screen bg-white">

        <section className="flex flex-col py-35 gap-4 items-center bg-gradient-to-tl from-black via-zinc-900 to-black"> 

          <article className="flex flex-col items-center gap-4">
            <div className="text-5xl font-bold flex gap-3">
              <h1>Seu site pronto em</h1>
              <h1 className="text-green-300">24 horas</h1>
            </div>

            <div>
              <p className="text-zinc-400">Design moderno, responsivo e com performance. Escolha, personalize e publique.</p>
            </div>

            <div>
              <button className="p-2 cursor-pointer text-black bg-green-300 text-lg font-semibold rounded-lg transition-all duration-300 hover:text-green-300 hover:bg-black border-1 border-green-300">Ver modelos</button>
            </div>
          </article>
        </section>

        <section className="bg-black ">

          <article className="flex flex-col items-center p-10">
            <div className="text-4xl p-10 font-bold text-center">
              <p>Por que escolher a InovaDev?</p>
            </div>

            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-10 shadow-md shadow-zinc-800">
                <p className="text-3xl">⚡</p>
                <p className="text-lg">Entrega em 24h</p>
                <p className="text-zinc-400 text-sm">Seu site publicado em até um dia útil.</p>
              </div>

               <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-10 shadow-md shadow-zinc-800">
                <p className="text-3xl"> 💻 </p>
                <p className="text-lg">Design Atualizado</p>
                <p className="text-zinc-400 text-sm">Layout limpo, moderno e otimizado.</p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-10 shadow-md shadow-zinc-800">
                <p className="text-3xl"> 📱 </p>
                <p className="text-lg">100% Responsivo</p>
                <p className="text-zinc-400 text-sm">Funciona perfeitamente em qualquer dispositivo.</p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg bg-zinc-900 p-10 shadow-md shadow-zinc-800">
                <p className="text-3xl"> 🛠 </p>
                <p className="text-lg">Suporte Personalizado</p>
                <p className="text-zinc-400 text-sm">Atendimento humano e ágil sempre que você precisar.</p>
              </div>
            </div>
          </article>
        </section>
        
      </main>
    </div>
  );
}
