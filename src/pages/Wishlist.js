import React, { PropTypes } from 'react';

import MovieList from '../components/MovieList';

export default function Wishlist(props) {
  return (
    <div className="wishlist">
      <MovieList
        removeFromWishlist={props.removeFromWishlist}
        movies={props.wishlist.movies}
        toggleMovie={props.toggleMovie}
      />
    </div>
  );
}

Wishlist.propTypes = {
  removeFromWishlist: PropTypes.func,
  toggleMovie: PropTypes.func,
  wishlist: PropTypes.shape({
    movies: PropTypes.array,
  }),
};

Wishlist.defaultProps = {
  removeFromWishlist: () => {},
  toggleMovie: () => {},
  wishlist: {
    movies: [],
  },
};
