import React, { PropTypes } from 'react';

import Btn from './Btn';
import Form from './Form';

export default function MoviePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form
      className={'movie-popup'}
      closeForm={props.closeMoviePopup}
      handleSumbit={handleSubmit}
    >
      <img src={props.Poster} alt="Movie poster" className="movie-popup__poster" />
      <div className="movie-popup__desc">
        <h3 className="movie-popup__title">{props.Title}</h3>
        <p className="movie-popup__genre">{props.Genre}</p>
        <p className="movie-popup__duration">Duration: {props.Runtime}</p>
        <p className="movie-popup__release">Released: {props.Released}</p>
        <div className="movie-popup__rating">
          <p className="movie-popup__metascore">Metascore: {props.Metascore}</p>
          <p className="movie-popup__imdb-rating">imdbRating: {props.imdbRating}</p>
        </div>
        <p className="movie-popup__director">Director: {props.Director}</p>
        <p className="movie-popup__actors">Actors: {props.Actors}</p>
        <p className="movie-popup__plot">{props.Plot}</p>
        <Btn
          onClick={() => {}}
          text={'Add to wishlist'}
        />
      </div>
    </Form>
  );
}

MoviePopup.propTypes = {
  Title: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Released: PropTypes.string.isRequired,
  Metascore: PropTypes.string.isRequired,
  imdbRating: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Actors: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  closeMoviePopup: PropTypes.func.isRequired,
  deleteFromWishes: PropTypes.func.isRequired,
  fetchWishfulMovie: PropTypes.func.isRequired,
  myWishes: PropTypes.object.isRequired,
};
