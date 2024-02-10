import { API_ARTISTS } from "../mocks/artis";
import { Reproductor } from "./Icos";
export function Statios(){
    const stations = API_ARTISTS()
    return(
        <ul className="flex flex-wrap gap-6 py-6">
          
      {stations.map((station) => (
        <li 
          className="group cursor-pointer pt-3 pb-4 px-3 max-w-[200px] bg-white/5 hover:bg-white/15 rounded-xl relative" 
          key={station.id}
        >
          <header className=" pb-3 relative">
            <img src={station.fotoPerfil} className="rounded-xl h-44 w-44 bg-no-repeat bg-cover"  alt={station.title} />
              <button className='absolute bottom-5 right-4 bg-green-500 rounded-full p-3 opacity-0 translate-y-2 transition-all duration-200 ease  group-hover:opacity-100 group-hover:translate-y-0'>
                <Reproductor></Reproductor>
              </button>
          </header>
          <strong className="block">{station.title}</strong>
          <small className="opacity-70">{station.artist}</small>
        </li>
      ))}
    </ul>
    )
}