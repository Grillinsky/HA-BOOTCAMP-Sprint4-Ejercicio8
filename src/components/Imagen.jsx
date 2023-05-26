const Imagen = ({ movie }) => {
  return (
    <div className="image-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`Poster de la pelicula ${movie.title}`}
      />
    </div>
  );
};
export default Imagen;
