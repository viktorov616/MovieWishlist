import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import WishlistMovie from './WishlistMovie';

export default function MovieList(props) {
  function handleToggleMovie(id) {
    const i = props.movies.map(movie => movie.id).indexOf(id);
    props.toggleMovie(i);
  }

  return (
    <ul className="movie-list">
      <ReactCSSTransitionGroup
        transitionName="movie-list__list-item--fade"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={400}
      >
        { props.movies.map((movie) => {
          if (!props.showWatched && movie.watched) return null;
          return (<WishlistMovie
            key={movie.id}
            removeFromWishlist={props.removeFromWishlist}
            movie={movie}
            toggleMovie={handleToggleMovie}
          />);
        }) }
      </ReactCSSTransitionGroup>
    </ul>
  );
}

MovieList.propTypes = {
  removeFromWishlist: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  toggleMovie: PropTypes.func.isRequired,
};
