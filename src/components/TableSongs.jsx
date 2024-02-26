import { useState } from 'react'; 
import { Like, Reproductor } from './Icos';

export function TableSongs({ song }) {
    const [hoveredSongId, setHoveredSongId] = useState(null);

    const handleMouseEnter = (id) => {
        setHoveredSongId(id);
    };

    const handleMouseLeave = () => {
        setHoveredSongId(null);
    };

    return (
        <tbody>
            {song.canciones.map(cancion => (
                <tr
                    key={cancion.idSong}
                    className="text-gray-300 group text-sm font-light hover:cursor-pointer hover:bg-white/10"
                    onMouseEnter={() => handleMouseEnter(cancion.idSong)}
                    onMouseLeave={handleMouseLeave}
                >
                    <td 
                        className="px-4 py-2 opacity-75 group-hover:text-white group-hover:opacity-100"
                        style={{ minWidth: "60px" }} // Establecer un ancho mínimo para la columna del índice
                    >
                        {cancion.idSong === hoveredSongId ? <Reproductor stroke="#fff" fill="#fff" height={15} /> : cancion.idSong}
                    </td>
                    <td className="px-4 py-2 text-lg text-white">
                        <div className="flex gap-5 items-center">
                            <picture>
                                <img className="w-[50px] rounded-lg" src={cancion.photoSong} alt="" />
                            </picture>
                            <strong>{cancion.titleSong}</strong>
                        </div>
                    </td>
                    <td className="px-4 py-2 opacity-95">{cancion.views}</td>
                    <td>
                        <div>
                            {cancion.like ? <Like fill="#22c55e" stroke="#22c55e" /> : null}
                        </div>
                    </td>
                    <td className="px-4 py-2  opacity-95">{cancion.time}</td>
                </tr>
            ))}
        </tbody>
    );
}
