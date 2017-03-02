import React, { PropTypes } from 'react';

import Btn from './Btn';

export default function Movie(props) {
  function handleMoviePopup() {
    const id = props.imdbID;

    props.fetchMovie(id);
    props.openMoviePopup();
  }

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
        <div className="movie__controls">
          <Btn
            handleClick={handleMoviePopup}
            text={'More info'}
          />
        </div>
      </div>
    </li>
  );
}

Movie.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  imdbID: PropTypes.string.isRequired,
  openMoviePopup: PropTypes.func.isRequired,
};
