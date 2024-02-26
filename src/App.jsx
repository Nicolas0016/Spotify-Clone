import { BrowserRouter as Router } from 'react-router-dom';
import { MenuAside } from './components/MenuAside';
import './App.css';
import {SectionSong} from './components/SectionSongs'; // Importa SectionSong desde el archivo correcto
import { Player } from './components/Player';
function App() {
  return (
    <Router>
      <main className='text-white px-2 pt-2 pb-[5px] fill-white grid gap-2 max-w-100vh bg-black' style={{
        gridTemplateAreas:
          '" aside  section section"' +
          '" aside  section section"' +
          '" footer footer footer"'
      }}>
        <aside className='rounded-xl w-full flex flex-col gap-2  ' style={{ gridArea: 'aside' }}>
          <MenuAside></MenuAside>
        </aside>
        <section className='h-[82vh] w-full' style={{ gridArea: 'section' }}>
          <SectionSong></SectionSong>
        </section>
        <footer style={{ gridArea: 'footer' }}>
          <Player></Player>
        </footer>
      </main>
    </Router>
  );
}

export default App;
