import React, { PropTypes } from 'react';

export default function Movie(props) {
  const poster = (props.Poster === 'N/A') ? require('../img/no-poster.jpg') : props.Poster;

  return (
    <li className="movie">
      <img src={poster} alt="Movie poster" className="movie__img" />
      <div className="movie__container">
        <div className="movie__desc">
          <p className="movie__title">{props.Title}</p>
          <p className="movie__type">{props.Type}</p>
          <p className="movie__year">
            <span className="movie__prop-name">Released: </span>
            {props.Year}
          </p>
        </div>
      </div>
    </li>
  );
}

Movie.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};
