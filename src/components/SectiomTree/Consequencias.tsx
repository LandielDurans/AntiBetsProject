/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> sda*/
/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> sds*/

export default function ConsequenciasESolucoes() {
    return (
        <main className="min-h-screen bg-black text-white antialiased">
            <section id="consequencias" className="container mx-auto px-6 py-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Consequências</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/3 rounded-lg border border-white/6  hover:bg-white/6">
                        <h4 className="font-semibold mb-2">Saúde Mental</h4>
                        <p className="text-sm text-white/80">Alta comorbidade com depressão, ansiedade e risco suicida.</p>
                    </div>

                    <div className="p-6 bg-white/3 rounded-lg border border-white/6  hover:bg-white/6">
                        <h4 className="font-semibold mb-2">Financeiro</h4>
                        <p className="text-sm text-white/80">Endividamento extremo, perda de bens e impacto no emprego.</p>
                    </div>
                </div>
            </section>

            <section id="recursos" className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">Recursos & Ajuda</h3>
                    <p className="text-white/80 mb-6">
                        Se você ou alguém que conhece está em risco, procure serviços de saúde mental locais, linhas
                        de apoio e grupos de apoio. Encoraje diálogo aberto e elimine o estigma.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        <a className="p-4 rounded-lg bg-white/5 border border-white/6 hover:bg-white/6">
                            <h5 className="font-semibold">Linha de Apoio</h5>
                            <p className="text-xs text-white/70">0800 — procure serviços locais</p>
                        </a>

                        <a className="p-4 rounded-lg bg-white/5 border border-white/6 hover:bg-white/6">
                            <h5 className="font-semibold">Centros de Tratamento</h5>
                            <p className="text-xs text-white/70">Procure CAPS e clínicas especializadas</p>
                        </a>

                        <a className="p-4 rounded-lg bg-white/5 border border-white/6 hover:bg-white/6">
                            <h5 className="font-semibold">Material Educativo</h5>
                            <p className="text-xs text-white/70">Artigos, vídeos e cursos para prevenção</p>
                        </a>
                    </div>

                </div>
            </section>
        </main>
    );
}
