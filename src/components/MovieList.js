import React, { PropTypes } from 'react';

import WishlistMovie from './WishlistMovie';

export default function MovieList(props) {
  return (
    <ul className="movie-list">
      { props.movies.map(movie => (<WishlistMovie
        key={movie.imdbID}
        deleteFromWishlist={props.deleteFromWishlist}
        movie={movie}
      />)) }
    </ul>
  );
}

MovieList.propTypes = {
  deleteFromWishlist: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};
