export function SectionProblem() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-10 py-20" id="problema">
            <section className="max-w-4xl mx-auto text-center space-y-10">
                <h1 className="text-5xl font-bold">
                    Aposta hoje, dívida amanhã. O risco é real.
                </h1>
                <p className="text-xl text-gray-300">
                    Mais de <span className="font-bold text-green-500">10 milhões </span>
                    de brasileiros já enfrentam problemas com apostas online.
                    A promessa de dinheiro fácil esconde um caminho de dívidas,
                    ansiedade e destruição emocional.
                </p>
            </section>

            {/* Relatos */}
            <section className="grid md:grid-cols-3 gap-8 mt-20">
                <div className="bg-[#121212] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                    <p className="italic">
                        "Eu achava que era só diversão, até perder meu salário inteiro em um fim de semana."
                    </p>
                    <span className="block text-sm text-gray-400 mt-3">– João, 24 anos</span>
                </div>
                <div className="bg-[#121212] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                    <p className="italic">
                        "Prometi que ia parar, mas cada vez que perdia, queria recuperar. Foi um ciclo sem fim."
                    </p>
                    <span className="block text-sm text-gray-400 mt-3">– Maria, 32 anos</span>
                </div>
                <div className="bg-[#121212] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
                    <p className="italic">
                        "Só percebi quando já estava devendo mais do que podia pagar."
                    </p>
                    <span className="block text-sm text-gray-400 mt-3">– Carlos, 28 anos</span>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center mt-20 space-y-5">
                <h2 className="text-3xl font-bold text-green-500">
                    Você pode mudar sua história.
                </h2>
                <p className="text-lg text-gray-300">
                    O primeiro passo é reconhecer o problema. O próximo é buscar ajuda.
                </p>
                <a
                    href="/solucao"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition"
                >
                    Quero mudar minha vida
                </a>
            </section>
        </main>
    )
}
