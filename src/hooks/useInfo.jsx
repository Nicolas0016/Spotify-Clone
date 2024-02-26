
import { API_SPOTIFY } from "../api/data";
export const useGetInfo = async (id) => {
    const artist = API_SPOTIFY.find(artist => artist.id === id);
    return artist;
};