import Relato1 from "/img/relato1.png";
import { Card } from "../ui/card";
import PieChartGraph from "../ui/charts/pieChart";

export function SectionProblem() {
    return (
        // biome-ignore lint/correctness/useUniqueElementIds: <explanation> Igonre Biome
        <div className="h-screen text-amber-50 px-6" id="problema">
            <h1 className="text-4xl font-bold text-center text-white py-5">
                O Problema
            </h1>
            <section className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
                <div>
                    <h1 className="text-2xl text-center font-black mb-5">
                        O que é o vicio?
                    </h1>
                    <p className="text-center">
                        A ludopatia é um vício em apostas, um transtorno mental que leva a
                        um comportamento compulsivo. Ele gera problemas financeiros e
                        sociais, altera a química do cérebro com a liberação de dopamina e
                        requer tratamento com psicoterapia e, por vezes, medicação.
                    </p>
                </div>
                <Card className="w-full h-full">
                    <img
                        src={Relato1}
                        alt="Relato sobre vício"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </Card>
            </section>

            <section className="flex flex-col mt-10 md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
                <Card className="w-full md:w-1/2 h-60 flex items-center justify-center p-4">
                    <PieChartGraph />
                </Card>

                <div>
                    <h1 className="text-2xl text-center font-black mb-5">
                        Publico apostador
                    </h1>
                    <p className="text-center">
                        O público é majoritariamente masculino (62%) e jovem, com 56% dos
                        apostadores tendo entre 16 e 39 anos, segundo o DataSenado.
                    </p>
                </div>
            </section>
        </div>
    );
}
