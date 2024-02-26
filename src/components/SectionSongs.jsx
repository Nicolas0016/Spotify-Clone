import { Artists } from "./Artists";
import { Footer } from "./Footer";
import { Route, Routes } from "react-router-dom"; // Importa Routes también si deseas usar anidación de rutas.
import { Playlist } from "./Playlist";
import { Header } from "./HeaderSection";
export function SectionSong() {
  return (
    <main className="bg-gradient-to-t from-white/5 from-70% to-white/15 h-full max-w-[80vw] rounded-xl overflow-y-scroll Scroll">
      
      <section className="ps-5 pe-4 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist/:songId" element={<Playlist />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

function Home() {
  return (
    <>
    <Header></Header>
      <h1 className="font-bold text-2xl">Emisoras Populares</h1>
      <Artists tipoFiltrado="Emisora" />
      <h3 className="font-bold text-2xl">Artistas Populares</h3>
      <Artists tipoFiltrado="Artista" />
    </>
  );
}
