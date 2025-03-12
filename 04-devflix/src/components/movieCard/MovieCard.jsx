import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <div className={styles.movie}>
      <p className={styles.year}>{props.Year}</p>
      <img src={props.Poster} alt={props.Title} />
      <div className={styles.info}>
        <h4 className={styles.type}>{props.Type}</h4>
        <h3 className={styles.title}>{props.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
