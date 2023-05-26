const Puntaje = ({ movie }) => {
  let puntaje = "";
  if (movie.vote_average > 8) {
    puntaje = "Excelente";
  } else if (movie.vote_average > 6) {
    puntaje = "Bueno";
  } else if (movie.vote_average > 4) {
    puntaje = "Regular";
  } else if (movie.vote_average > 2) {
    puntaje = "Malo";
  } else {
    puntaje = "Un desastre";
  }

  return (
    <div className="puntaje">
      <small>Review: {puntaje}</small>
    </div>
  );
};
export default Puntaje;
