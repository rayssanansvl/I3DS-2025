import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <div className={styles.movie}>
      <img src={props.Poster} alt={props.Title} />
      <div className={styles.info}>
        <p>{props.Year}</p>
        <h3>{props.Title}</h3>
        <h4>{props.Type}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
