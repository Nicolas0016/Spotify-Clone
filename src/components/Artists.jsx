import { API_ARTISTS } from "../mocks/artis";
import { Reproductor } from "./Icos";
import { Link } from "react-router-dom";
import "./Artists.css";

export function Artists({ tipoFiltrado }) {
  const artists = API_ARTISTS();

  const filteredArtists = tipoFiltrado
    ? artists.filter((artist) => artist.tipo === tipoFiltrado)
    : artists;

  

  return (
    <ul className="flex flex-wrap gap-6 py-6">
      {filteredArtists.map((artist) => (
        <li
          className={`group cursor-pointer bg-white/5 hover:bg-white/15 relative rounded-lg ${artist.tipo === 'Emisora' ? 'pt-1 pb-2 px-2' : 'pt-3 pb-7 px-3'}`}
          key={artist.id}
        >
          <Link to={`/playlist/${artist.id}`} className="w-full h-full">
            <header className={`pt-2 relative ${artist.tipo === 'Emisora' ? 'pb-3' : 'pb-1'}`}>
              <img
                className={`rounded-full h-44 w-44 bg-no-repeat bg-cover ${artist.tipo === 'Emisora' ? 'rounded-xl' : 'rounded-full'}`}
                src={artist.fotoPerfil}
                alt={artist.nombre}
              />
              <button className="absolute bottom-5 right-4 bg-green-500 rounded-full p-3 opacity-0 translate-y-2 transition-all duration-200 ease  group-hover:opacity-100 group-hover:translate-y-0">
                <Reproductor fill="#000" height="24" />
              </button>
            </header>
            <strong>{artist.nombre}</strong>
            <p className="opacity-70">{artist.tipo}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
