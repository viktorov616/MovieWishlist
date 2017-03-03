import React, { PropTypes } from 'react';

export default function MovieInfo(props) {
  const poster = (props.Poster === 'N/A') ? require('../img/no-poster.jpg') : props.Poster;

  return (
    <div className="movie-info">
      <img src={poster} alt="Movie poster" className="movie-info__img" />
      <div className="movie-info__container">
        <div className="movie-info__desc">
          <p className="movie-info__title">{props.Title}</p>
          <p className="movie-info__type">{props.Type}</p>
          <p className="movie-info__year">
            <span className="movie-info__prop-name">Released: </span>
            {props.Year}
          </p>
        </div>
        <div className="movie-info__controls">
          { props.children }
        </div>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  Title: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  children: PropTypes.node,
};

MovieInfo.defaultProps = {
  children: null,
};