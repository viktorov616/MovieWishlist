import React, { PropTypes } from 'react';

import WishlistMovie from './WishlistMovie';

export default function MovieList(props) {
  function handleToggleMovie(id) {
    const i = props.movies.map(movie => movie.imdbID).indexOf(id);
    props.toggleMovie(i);
  }

  return (
    <ul className="movie-list">
      { props.movies.map(movie => (<WishlistMovie
        key={movie.imdbID}
        deleteFromWishlist={props.deleteFromWishlist}
        movie={movie}
        toggleMovie={handleToggleMovie}
      />)) }
    </ul>
  );
}

MovieList.propTypes = {
  deleteFromWishlist: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  toggleMovie: PropTypes.func.isRequired,
};
