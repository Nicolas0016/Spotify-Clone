import { useParams } from 'react-router-dom';

function SectionSong() {
  const { id } = useParams(); // Obtenemos el parámetro "id" de la URL

  // Lógica para usar el ID de la canción, por ejemplo:
  return (
    <div>
      <h1>Canción con ID: {id}</h1>
      {/* Aquí puedes mostrar los detalles de la canción */}
    </div>
  );
}

export default SectionSong;