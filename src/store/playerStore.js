import { create } from "zustand";
export const usePlayerStore = create((set)=>({
    isPlaying: false,
    index: undefined,
    currentMusic: {
        playlist: null,
        song: null,
        songs:[]
    },
    playlist: {
        id: null
    },
    
    setIsPlaying:(isPlaying) => set({isPlaying}),
    setIndex: (index) => set({index}),
    setCurrentMusic: (currentMusic) => set({currentMusic}),
    setPlaylist: (playlist) => set({playlist})
}))