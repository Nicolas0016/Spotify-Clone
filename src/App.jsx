import { BrowserRouter as Router } from 'react-router-dom';
import { MenuAside } from './components/MenuAside';
import './App.css';
import {SectionSong} from './components/SectionSongs'; // Importa SectionSong desde el archivo correcto

function App() {
  return (
    <Router>
      <main className='text-white p-2 fill-white grid gap-2 w-screen h-screen bg-black' style={{
        gridTemplateAreas:
          '" aside  section section"' +
          '" aside  section section"' +
          '" aside  section section"' +
          '" aside  section section"' +
          '" aside  section section"' +
          '" aside  section section"' +
          '" aside  section section"' +
          '" footer footer footer"'
      }}>
        <aside className='rounded-xl flex flex-col gap-2 w-[23vw] max-h-[750px]' style={{ gridArea: 'aside' }}>
          <MenuAside></MenuAside>
        </aside>
        <section className='max-h-[750px] w-[76vw]' style={{ gridArea: 'section' }}>
          <SectionSong></SectionSong>
        </section>
        <footer style={{ gridArea: 'footer' }}>
          <h1>FOOTER</h1>
        </footer>
      </main>
    </Router>
  );
}

export default App;
