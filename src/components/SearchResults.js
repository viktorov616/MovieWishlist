import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Movie from './Movie';

export default function SearchResults(props) {
  return (
    <ul className="search-results">
      <ReactCSSTransitionGroup
        className="search-results__inner"
        transitionName="search-results__item--fade"
        transitionEnterTimeout={600}
        transitionLeave={false}
      >
        { props.movies.map(movie => (<Movie
          key={movie.imdbID}
          addToWishlist={props.addToWishlist}
          movie={movie}
          openMoviePopup={props.openMoviePopup}
          removeFromWishlist={props.removeFromWishlist}
          wishlistMovies={props.wishlistMovies}
        />)) }
      </ReactCSSTransitionGroup>
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
