import React, { PropTypes } from 'react';

import MovieList from '../components/MovieList';
import WishlistControls from '../components/WishlistControls';

export default function Wishlist(props) {
  const { movies, showWatched } = props.wishlist;
  const wishlistControls = (movies.length !== 0)
    ? (<WishlistControls
      removeWatched={props.removeWatched}
      showWatched={showWatched}
      toggleShowWatched={props.toggleShowWatched}
    />) : null;

  return (
    <div className="wishlist">
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
