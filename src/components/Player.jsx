import { useEffect, useRef, useState } from "react";
import { CancionAleatoria, Pause, RepetirCancion, Reproductor, SkipCancion, Volume, VolverCancion } from "./Icos";
import { usePlayerStore } from "../store/playerStore";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Range.css"
export function Player() {
    const { currentMusic, isPlaying, index, setIndex, setIsPlaying, playlist } = usePlayerStore(state => state);
    const audioRef = useRef();
    const volumeRef = useRef(1)
    useEffect(() => {
        if (currentMusic && currentMusic[index]) {
            audioRef.current.src = currentMusic[index].songUrl;
            audioRef.current.volume = volumeRef.current
            audioRef.current.play();
        }
    }, [currentMusic, index]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
        console.log(currentMusic)
    };

   const previusSong = () => {
    if (index > 0) {
        const newIndex = index - 1;
        setIndex(newIndex);
    }
    
};

const skipSong = () => {
    if (index < currentMusic.length - 1) {
        const newIndex = index + 1;
        setIndex(newIndex);
    }
    
};
const reproducirCancionAleatoria = () => {
    if (currentMusic && currentMusic.length > 0) {
        const randomIndex = Math.floor(Math.random() * currentMusic.length);
        setIndex(randomIndex);
        setIsPlaying(true); // Puedes establecer esto en true si deseas que la canción se reproduzca automáticamente al seleccionarla.
    }
};
const SongControl = ({ audio }) =>{
    const [currentTime, setCurrentTime] = useState(0)
    useEffect(()=>{
        audio.current.addEventListener('timeupdate', handleTimeUpdate)
        return ()=>{
            audio.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])
    const handleTimeUpdate = () =>{
        setCurrentTime(audio.current.currentTime)
    }
    const fortmatTime = time =>{
        if(time == null) return '0:00'
        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)
        return `${minutes}:${seconds.toString().padStart(2,"0")}`
    }
    const duration = audio?.current?.duration ?? 0
    SongControl.propTypes = {
        audio: PropTypes.shape({
            current: PropTypes.object.isRequired
        }).isRequired
    };
    return(
        <div className="flex gap-3 items-center">
            <span>{ fortmatTime(currentTime)}</span>
            <input
                defaultValue={0}
                value={currentTime}
                max={duration}
                min={0}
                className="w-[600px] h-[8px]"
                type="range"
                onChange={(event) => {
                    const currentTime = event.target.value;
                    audioRef.current.currentTime = currentTime;
                    setCurrentTime(currentTime); // Actualizar el estado del tiempo actual
                }}
            />
            <span>{ fortmatTime(duration)}</span>
        </div>
    )
}
    return (
        <div className="flex flex-row justify-between items-center w-full px-4 py-[10px] z-50">
            <div className="flex items-center gap-5 min-w-[330px]">
                <picture>
                    <img className="rounded" src={currentMusic[index]?.photoSong} width={63} alt="" />
                </picture>
                <div className="flex flex-col gap-2">
                <Link to={`/playlist/${playlist.id}`} className="flex flex-col">
                    <strong>{currentMusic[index]?.titleSong}</strong>
                    <small className="text-base opacity-70">{currentMusic[index]?.playlist}</small>
                </Link>

                </div>
            </div>
            <div className="flex flex-col items-center gap-2 translate-x-[-15%]">
                <div className="flex gap-7">
                    <button onClick={reproducirCancionAleatoria} className="opacity-70 scale-95 hover:scale-100 hover:opacity-100">
                        <CancionAleatoria height={23}></CancionAleatoria>
                    </button>
                    <button onClick={previusSong} className={`opacity-70 scale-95 hover:scale-100 hover:opacity-100 ${index === 0 ? 'cursor-not-allowed' : ''}`} disabled={index === 0}>
                        <VolverCancion height={20}></VolverCancion>
                    </button>
                    <button onClick={handleClick} className="p-2 bg-white rounded-full scale-95 hover:scale-100">
                        {isPlaying ? <Pause height={25} fill={"black"} /> : <Reproductor height={25} fill={"black"} />}
                    </button>
                    <button onClick={skipSong} className={`opacity-70 scale-95 hover:scale-100 hover:opacity-100 ${index === currentMusic.length - 1 ? 'cursor-not-allowed' : ''}`} disabled={index === currentMusic.length - 1}>
                        <SkipCancion height={20}></SkipCancion>
                    </button>
                    <button className="opacity-70 scale-95 hover:scale-100 hover:opacity-100">
                        <RepetirCancion height={23}></RepetirCancion>
                    </button>
                </div>
                <div>
                    <SongControl audio={audioRef}></SongControl>
                </div>
            </div>
            <div className=" flex gap-2 items-center">
                <Volume height={22} fill="#ffffff88"></Volume>
                <input type="range" defaultValue={[100]} min={0} max={100} className="w-[95px] h-[7px] cursor-pointer"
                onChange={(event) => {
                    const newVolume = event.target.value;
                    const volumeValue = newVolume / 100
                    volumeRef.current = volumeValue
                    audioRef.current.volume = volumeValue;
                }}
            
                />
            </div>
            <audio   id="audioPlayer" ref={audioRef}></audio>

        </div>
    );
}
