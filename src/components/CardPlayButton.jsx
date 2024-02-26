import { useEffect, useState } from "react";
import { usePlayerStore } from "../store/playerStore";
import { Reproductor, Pause } from "./Icos";
import { API_SPOTIFY } from "../api/data";

export function CardPlayButton({ id }) {
    const { currentMusic, setIndex, isPlaying, setIsPlaying, setCurrentMusic, playlist, setPlaylist } = usePlayerStore();
    useEffect(() => {
        if (currentMusic && currentMusic.id !== id) {
            setIsPlaying(false);
        }
    }, [currentMusic, id, setIsPlaying]);

    const handleClick = async () => {

        try {
            if (isPlaying && playlist.id === id) {
                setIsPlaying(false); // Pausar la reproducción si ya está reproduciendo
            } else {
                const artist = await getInfo(id);
                setIsPlaying(true);
                setPlaylist(artist);
                setIndex(0);
                setCurrentMusic(artist.canciones);
            }
        } catch (error) {
            console.error("Error al obtener la información del artista:", error);
        } 
    };

    const getInfo = async (id) => {
        const artist = API_SPOTIFY.find((artist) => artist.id === id);
        return artist;
    };

    return (
        <button
            onClick={handleClick}
            className="absolute z-50 bottom-5 right-4 bg-green-500 rounded-full p-3 opacity-0 translate-y-2 transition-all duration-200 ease group-hover:opacity-100 group-hover:translate-y-0"
        >
            {isPlaying && playlist.id === id ? (
                <Pause fill="#000" height="24" /> // Cambiar el icono si está reproduciendo
            ) : (
                <Reproductor fill="#000" height="24" />
            )}
        </button>
    );
}
