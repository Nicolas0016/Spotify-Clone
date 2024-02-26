import { API_SPOTIFY } from "./data.js";

export function getInfo(id) {
    const artists = API_SPOTIFY.find(artist => artist.id === id);
    const songs = artists.canciones
    return {artists, songs};
}
