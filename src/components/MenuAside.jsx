import { ArrowRight, HomeIcon, LibraryIcon, PlusIcon, SearchIcon } from "./Icos";
import { Biblioteca } from "./Biblioteca";
import { Link } from "react-router-dom";
export function MenuAside() {
    return (
        <>
            <nav className="bg-white/5 rounded-xl py-5 px-6">
                <ul className=" font-semibold flex flex-col gap-6">
                    <li>
                        <Link to="/" className="flex items-center gap-5 opacity-60 hover:opacity-100 transition-all ease-linear">
                            <HomeIcon style={{ fill: 'white' }} />Inicio
                        </Link>
                    </li>
                    <li><a href="" className="flex items-center gap-5 opacity-60 hover:opacity-100"><SearchIcon style={{ fill: 'white' }} />Buscar</a></li>
                </ul>
            </nav>
            <nav className="grow h-full pt-1  bg-white/5 rounded-xl">
                <header className="flex items-center py-4 px-6 opacity-75 gap-4 mb-5">
                    <LibraryIcon style={{ fill: 'white' }} />
                    <span className="grow">Tu biblioteca</span>
                    <button title="Crear una lista o carpeta" className="flex items-center justify-center hover:bg-white/5 h-7 w-7 rounded-full">
                        <PlusIcon style={{ fill: 'white' }} />
                    </button>
                    <button className="flex items-center justify-center hover:bg-white/5 h-7 w-7 rounded-full">
                        <ArrowRight style={{ fill: 'white' }} />
                    </button>
                </header>
                <main className="px-4">
                    <Biblioteca></Biblioteca>
                </main>
            </nav>
        </>
    )
}
