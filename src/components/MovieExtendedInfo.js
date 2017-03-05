import React, { PropTypes } from 'react';

export default function MovieExtendedInfo(props) {
  const poster = (props.Poster === 'N/A') ? require('../img/no-poster.jpg') : props.Poster;
  const additionalInfo = (props.additionalInfo !== null)
    ? (<p className="movie-extended-info__additional">
      {props.additionalInfo}
    </p>)
    : null;

  return (
    <div className="movie-extended-info">
      <img src={poster} alt="Movie poster" className="movie-extended-info__poster" />
      <div className="movie-extended-info__desc">
        <h3 className="movie-extended-info__title">{props.Title}</h3>
        <p className="movie-extended-info__genre">{props.Genre}</p>
        <p className="movie-extended-info__duration">Duration: {props.Runtime}</p>
        <p className="movie-extended-info__release">Released: {props.Released}</p>
        <div className="movie-extended-info__rating">
          <p className="movie-extended-info__metascore">Metascore: {props.Metascore}</p>
          <p className="movie-extended-info__imdb-rating">imdbRating: {props.imdbRating}</p>
        </div>
        <p className="movie-extended-info__director">Director: {props.Director}</p>
        <p className="movie-extended-info__actors">Actors: {props.Actors}</p>
        <p className="movie-extended-info__plot">{props.Plot}</p>
        { additionalInfo }
        <div className="movie-extended-info__controls">
          { props.children }
        </div>
      </div>
    </div>
  );
}

MovieExtendedInfo.propTypes = {
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Released: PropTypes.string.isRequired,
  Metascore: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  children: PropTypes.node,
  imdbID: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
};

MovieExtendedInfo.defaultProps = {
  additionalInfo: '',
  children: null,
};
