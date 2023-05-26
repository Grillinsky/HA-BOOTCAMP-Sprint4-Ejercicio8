const Puntaje = ({ movie }) => {
  return (
    <div className="puntaje">
      <small>{movie.overview.slice(0, 140)}...</small>
    </div>
  );
};
export default Puntaje;
