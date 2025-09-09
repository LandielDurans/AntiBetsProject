import { BrainCircuit, CircleDollarSign, CircleUser } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function SectionCausas() {
    return (
        // biome-ignore lint/correctness/useUniqueElementIds: <explanation> FAZ O L
        <div className="min-h-screen w-full text-white bg-[url('/img/bg-causas.png')] bg-cover bg-center" id="causas">
            <h1 className="text-center text-4xl font-bold py-5">As causas</h1>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-15 max-w-6xl mx-auto px-6 pt-10 h-100 cursor-pointer">
                <Card className="flex-1 h-auto transition-transform duration-300 ease-in-out hover:scale-[1.05]">
                    <CardHeader className="text-center">
                        <CircleUser className="mx-auto text-green-500 w-8 h-8" />
                        <CardTitle className="text-lg">Fatores Sociais</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-center">
                        <p>
                            A pressão social e a cultura de "ganho fácil" podem influenciar o comportamento, além da glamourização do tema por figuras públicas.
                        </p>
                    </CardContent>
                </Card>

                <Card className="flex-1 h-auto transition-transform duration-300 ease-in-out hover:scale-[1.05]">
                    <CardHeader className="text-center">
                        <BrainCircuit className="mx-auto text-green-500 w-8 h-8" />
                        <CardTitle className="text-lg">Fatores Psicológicos</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-center">
                        <p>
                            Indivíduos com transtornos de humor (como depressão), ansiedade ou baixa autoestima são mais vulneráveis a desenvolver o vício. O ato de apostar pode ser usado como uma fuga da realidade ou uma forma de lidar com sentimentos negativos.
                        </p>
                    </CardContent>
                </Card>

                <Card className="flex-1 h-auto transition-transform duration-300 ease-in-out hover:scale-[1.05]">
                    <CardHeader className="text-center">
                        <CircleDollarSign className="mx-auto text-green-500 w-8 h-8" />
                        <CardTitle className="text-lg">Acessibilidade e Marketing</CardTitle>
                    </CardHeader>
                    <CardContent className="text-base text-center">
                        <p>
                            A proliferação de sites de apostas e a intensa publicidade, muitas vezes com o patrocínio de times de futebol e influenciadores digitais, normalizam a prática e a tornam acessível a um público vasto, incluindo adolescentes.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
