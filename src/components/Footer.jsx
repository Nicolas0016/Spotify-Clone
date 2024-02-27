import { GitHubIcon, InstagramIcon, TwitterIcon } from "./Icos";

export function Footer() {
  return (
    <footer className="mt-[70px] ps-8 pe-8 ">
      <div className="flex">
      <ul className="flex w-2/4 justify-between">
        <li>
          <strong>Empresa</strong>
          <ul className="">
            <li className="my-3">
              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Acerca de
              </a>
            </li>
            <li className="my-3">
              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Misión
              </a>
            </li>
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Equipo
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Comunidades</strong>
          <ul className="">
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Para artistas
              </a>
            </li>
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Para diseñadores
              </a>
            </li>
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Para escritores
              </a>
            </li>
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Para desarrolladores
              </a>
            </li>
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Para músicos
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong>Enlaces útiles</strong>
          <ul className="">
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Asistencia
              </a>
            </li>
            <li className="my-3">

              <a href="" className=" opacity-70 hover:opacity-100 hover:underline">
                Aplicación móvil gratuita
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="flex w-2/4 h-fit justify-end gap-5">
        <li className="p-[8px] bg-white/10 hover:bg-white/20 rounded-full">
          <a href="" className="">
            <InstagramIcon></InstagramIcon>
          </a>
        </li>
        <li className=" p-[8px] bg-white/10 hover:bg-white/20 rounded-full">
          <a href="">
            <TwitterIcon></TwitterIcon>
          </a>
        </li>
        <li className="p-[8px] bg-white/10 hover:bg-white/20 rounded-full">
          <a href="https://github.com/Nicolas0016/Spotify-Clone">
            <GitHubIcon></GitHubIcon>
          </a>
        </li>
      </ul>
      </div>
      <div className="h-[1px] my-5 w-full bg-white/25"></div>
      <div className="flex justify-between mt-7 mb-[70px] py-5 px-3 ">
        <ul className="flex gap-7 text-sm">
          <li>
            <a className=" opacity-60 hover:opacity-100" href="">
            Legal
            </a>
          </li>
          <li>
            <a className="opacity-60 hover:opacity-100 " href="">
            Centro de Privacidad
            </a>
          </li>
          <li>
            <a className="opacity-60 hover:opacity-100 " href="">
            Política de Privacidad
            </a>
          </li>
          <li>
            <a className="opacity-60 hover:opacity-100 " href="">
            Cookies
            </a>
          </li>
          <li>
            <a className="opacity-60 hover:opacity-100 " href="">
            Información sobre anuncios
            </a>
          </li>
          <li>
            <a className="opacity-60 hover:opacity-100 " href="">
            Accesibilidad
            </a>
          </li>
        </ul>
        <div>
        <small>© 2024 Spotify AB</small>
        </div>
      </div>
    </footer>
  )
}