import React, { PropTypes } from 'react';

import Movie from './Movie';

export default function SearchResults(props) {
  return (
    <ul className="search-results">
      { props.movies.map(movie => (<Movie
        key={movie.imdbID}
        addToWishlist={props.addToWishlist}
        movie={movie}
        openMoviePopup={props.openMoviePopup}
        removeFromWishlist={props.removeFromWishlist}
        wishlistMovies={props.wishlistMovies}
      />)) }
    </ul>
  );
}

SearchResults.propTypes = {
  addToWishlist: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  openMoviePopup: PropTypes.func.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  wishlistMovies: PropTypes.array.isRequired,
};
