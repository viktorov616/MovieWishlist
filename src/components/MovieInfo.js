import React, { PropTypes } from 'react';

export default function MovieInfo(props) {
  const poster = (props.Poster === 'N/A') ? require('../img/no-poster.jpg') : props.Poster;
  const additionalInfo = (props.additionalInfo !== null)
    ? (<p className="movie-info__additional">
      {props.additionalInfo}
    </p>)
    : null;

  return (
    <div className="movie-info">
      <div className="movie-info__img-wrapper">
        <img src={poster} alt="Movie poster" className="movie-info__img" />
      </div>
      <div className="movie-info__container">
        <div className="movie-info__desc">
          <p className="movie-info__title">{ props.Title }</p>
          <p className="movie-info__type">{ props.Type }</p>
          <p className="movie-info__year">
            <span className="movie-info__prop-name">Released: </span>
            { props.Year }
          </p>
          { additionalInfo }
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
  additionalInfo: PropTypes.string,
  children: PropTypes.node,
};

MovieInfo.defaultProps = {
  additionalInfo: '',
  children: null,
};
