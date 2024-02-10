import { bibliotecaJSON } from "../mocks/bibioteca"
export function Biblioteca(){
    const bibioteca = bibliotecaJSON()
    return(
        <ul className="flex flex-col gap-4">
            {
                bibioteca.map(item=>(
                    <li key={item.id} className="flex gap-3">
                        <picture>
                            <img className=" h-[45px] rounded-md" src={item.poster} alt="" />
                        </picture>
                        <div className="flex flex-col">
                            <strong className={"font-semibold" +( !item.active ? "" : " text-green-500")}>{item.title}</strong>
                            <small className=" text-sm opacity-60">Lista . Spotify</small>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}