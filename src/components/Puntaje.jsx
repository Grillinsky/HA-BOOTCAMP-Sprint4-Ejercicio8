const Puntaje = ({ movie }) => {
  return (
    <div className="puntaje">
      <small>Puntaje: {movie.vote_average}</small>
    </div>
  );
};
export default Puntaje;
