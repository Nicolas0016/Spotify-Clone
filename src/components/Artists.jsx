import { API_ARTISTS } from "../mocks/artis";
import { Link } from "react-router-dom";
import "./Artists.css";
import { CardPlayButton } from "./CardPlayButton";
export function Artists({ tipoFiltrado }) {
  const artists = API_ARTISTS();

  const filteredArtists = tipoFiltrado
    ? artists.filter((artist) => artist.tipo === tipoFiltrado)
    : artists;
  
 return (
    <ul className="flex justify-around flex-wrap gap-6 py-6">
      {filteredArtists.map((artist) => (
        <li
          className={`group cursor-pointer bg-white/5 hover:bg-white/15 relative rounded-lg ${artist.tipo === 'Emisora' ? 'pt-1 pb-2 px-2' : 'pt-3 pb-7 px-3'}`}
          key={artist.id}
        >
            <header className={`pt-2 relative ${artist.tipo === 'Emisora' ? 'pb-3' : 'pb-1'}`}>
              <img
                className={`rounded-full h-44 w-44 bg-no-repeat bg-cover ${artist.tipo === 'Emisora' ? 'rounded-xl' : 'rounded-full'}`}
                src={artist.fotoPerfil}
                alt={artist.nombre}
              />
              <CardPlayButton id={artist.id}></CardPlayButton>
            </header>
            
          <Link to={`/playlist/${artist.id}`} className="w-full h-full">
            <strong>{artist.nombre}</strong>
            <p className="opacity-70">{artist.tipo}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
