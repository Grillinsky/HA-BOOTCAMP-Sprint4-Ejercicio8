import Header from "./Header";
import Imagen from "./Imagen";
import Puntaje from "./Puntaje";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <Header movie={movie} />
      <Puntaje movie={movie} />
      <Imagen movie={movie} />
    </div>
  );
};

export default Card;
