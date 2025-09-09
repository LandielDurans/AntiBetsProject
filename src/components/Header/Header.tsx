import { Brain } from "lucide-react";

export function HeaderPage() {
    return (
        <header className="h-[10vh] 2xl:h-[6vh] bg-[#090a09] flex items-center justify-between px-6">
            <h1 className="text-xl font-bold text-white gap-1 flex items-center">
                <Brain />
                CLEARMIND
            </h1>
            <nav className="font-medium">
                <ul className="flex items-center gap-26 text-white">
                    <li>
                        <a href="#problema" className="hover:underline">
                            O problema
                        </a>
                    </li>
                    <li>
                        <a href="#causas" className="hover:underline">
                            Causas
                        </a>
                    </li>
                    <li>
                        <a href="#consequencia" className="hover:underline">
                            Consequencias
                        </a>
                    </li>
                    <li>
                        <a href="#solucao" className="hover:underline">
                            Soluções
                        </a>
                    </li>
                    <a
                        href="https://jogadoresanonimos.com.br"
                        target="_blank"
                        className="hover:underline"
                        rel="noopener"
                    >
                        <li className="bg-green-800 hover:bg-green-900 cursor-pointer rounded h-10 w-40 flex justify-center items-center">

                            Precisa de ajuda?
                        </li>
                    </a>

                </ul>
            </nav>
        </header>
    );
}
