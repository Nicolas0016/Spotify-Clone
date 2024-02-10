import { ArrowLeftSimple, ArrowRightSimple, Campaign } from "./Icos";
import "../scroll.css";

export function Header() {
    // Función para retroceder en el historial del navegador
    const handlePrevious = () => {
        window.history.back(); // Retrocede en el historial del navegador
    };

    // Función para avanzar en el historial del navegador
    const handleNext = () => {
        window.history.forward(); // Avanza en el historial del navegador
    };

    // Verifica si hay más páginas disponibles para retroceder
    const canGoBack = () => {
        return window.history.length > 1;
    };

    // Verifica si hay más páginas disponibles para avanzar
    const canGoForward = () => {
        return window.history.state !== null;
    };

    return (
        <header className="flex ps-5 pe-4 HEADER justify-between py-4">
            <div className="flex gap-2 ">
                <button
                    className="h-8 w-8 rounded-full bg-black/50 flex justify-center items-center"
                    onClick={handlePrevious} // Asigna la función de retroceso al botón de la izquierda
                    disabled={!canGoBack()} // Bloquea el botón si no hay más páginas para retroceder
                    style={{ pointerEvents: !canGoBack() ? 'none' : 'auto' }} // Desactiva los eventos de puntero si no hay más páginas para retroceder
                >
                    <ArrowLeftSimple />
                </button>
                <button
                    className="h-8 w-8 rounded-full bg-black/50 flex justify-center items-center"
                    onClick={handleNext} // Asigna la función de avance al botón de la derecha
                    disabled={!canGoForward()} // Bloquea el botón si no hay más páginas para avanzar
                    style={{ pointerEvents: !canGoForward() ? 'none' : 'auto' }} // Desactiva los eventos de puntero si no hay más páginas para avanzar
                >
                    <ArrowRightSimple />
                </button>
            </div>

            <ul className="flex items-center gap">
                <li className="py-1 px-4 bg-white text-black font-semibold rounded-3xl scale-[0.95] hover:scale-100">
                    <a href="">Descubrir Premium</a>
                </li>
                <li className="py-1 px-4 bg-black/80 text-white font-semibold rounded-3xl scale-[0.95] hover:scale-100">
                    <a href="">Descargar App</a>
                </li>
                <li className="p-2 rounded-full bg-black/80 scale-[0.95] hover:scale-100">
                    <a href="">
                        <Campaign />
                    </a>
                </li>
                <li className="ms-1">
                    <button className="text-sm h-[30px] w-[30px] text-black bg-green-500 rounded-full scale-[0.95] hover:scale-100 font-bold">
                        <span>N</span>
                    </button>
                </li>
            </ul>
        </header>
    )
}
