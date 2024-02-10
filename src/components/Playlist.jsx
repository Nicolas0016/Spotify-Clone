import { useParams } from "react-router-dom";
import { API_ARTISTS } from "../mocks/artis";
import { Header } from "./HeaderSection";
import { Reproductor, Verify, Elipsis } from "./Icos";
import { TableSongs } from "./TableSongs";
export function Playlist() {
  const { songId } = useParams();

  const artist = API_ARTISTS();
  const song = artist.find((song) => song.id === songId);

  if (!song) {
    return <div>No se encontró la canción con la ID: {songId}</div>;
  }
  return (
    <>
    <Header></Header>
    <header className="h-[170px]">
        <span className="flex items-center gap-2"><Verify></Verify>Artista Verificado</span>
        <h1 className="font-bold text-8xl z-[110] absolute">{song.nombre}</h1>
    </header>
    <main>
        <div className="my-5 flex items-center gap-8">
            <button className="scale-[0.95] hover:scale-100 p-4 bg-green-500 rounded-full"><Reproductor fill="#000" height={24}></Reproductor></button>
            <button className="flex justify-center items-center border rounded-3xl py-1 px-3 font-semibold"><span className=" text-base">Seguir</span></button>
            <button><Elipsis></Elipsis></button>
        </div>
        <h3 className="text-2xl font-semibold">Populares</h3>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Titulo</th>
                    <th>Vistas</th>
                    <th></th>
                    <th>Tiempo</th>
                </tr>
            </thead>
            <TableSongs song={song}/>
        </table>
    </main>
    </>
  );
}
