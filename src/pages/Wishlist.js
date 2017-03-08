import React, { PropTypes } from 'react';

import MovieList from '../components/MovieList';
import WishlistControls from '../components/WishlistControls';

export default function Wishlist(props) {
  function computeTitleText(movies) {
    const unwatchedMovies = movies.filter(movie => !movie.watched).length;
    let text;

    if (movies.length === 0) {
      text = 'You don\'t have any movies to watch';
    } else if (unwatchedMovies === 0) {
      text = 'You don\'t have unwatched movies';
    } else if (unwatchedMovies === 1) {
      text = 'You have one unwatched movie';
    } else {
      text = `You have ${unwatchedMovies} unwatched movies`;
    }

    return text;
  }
  const { movies, showWatched } = props.wishlist;
  const titleText = computeTitleText(movies);
  const wishlistControls = (movies.length !== 0)
    ? (<WishlistControls
      removeWatched={props.removeWatched}
      showWatched={showWatched}
      toggleShowWatched={props.toggleShowWatched}
    />) : null;

  return (
    <div className="wishlist">
      <h1 className="wishlist__title">{ titleText }</h1>
      { wishlistControls }
      <MovieList
        removeFromWishlist={props.removeFromWishlist}
        movies={movies}
        showWatched={showWatched}
        toggleMovie={props.toggleMovie}
      />
    </div>
  );
}

Wishlist.propTypes = {
  removeFromWishlist: PropTypes.func,
  removeWatched: PropTypes.func,
  toggleMovie: PropTypes.func,
  toggleShowWatched: PropTypes.func,
  wishlist: PropTypes.shape({
    movies: PropTypes.array,
    showWatched: PropTypes.bool,
  }),
};

Wishlist.defaultProps = {
  removeFromWishlist: () => {},
  removeWatched: () => {},
  toggleMovie: () => {},
  toggleShowWatched: () => {},
  wishlist: {
    movies: [],
    showWatched: true,
  },
};
