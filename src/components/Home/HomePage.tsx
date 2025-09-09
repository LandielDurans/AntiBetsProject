import { Button } from "../ui/button";

export function HomePage() {
    return (
        <main className="h-[90vh] 2xl:h-[94vh] bg-[url(public/img/betimg.png)] bg-no-repeat bg-cover flex">
            <section className="w-[50%] flex flex-col justify-center p-15 space-x-1 gap-7 text-white">
                <h1 className="text-5xl font-bold">
                    A aposta parece inofensiva.
                    As consequências não são.
                </h1>
                <p className="text-2xl font-medium">
                    O vicio em apostas online é um problema real no Brasil. Nós estamos aqui para ajudar você a virar o jogo.
                </p>
                <Button className="w-60 h-15 text-[13pt] text-black font-bold bg-[#18a710] hover:bg-[#24580f] cursor-pointer">
                    ENTENDA O PROBLEMA
                </Button>
            </section>
        </main>
    )
}