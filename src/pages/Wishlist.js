import React, { PropTypes } from 'react';

import MovieList from '../components/MovieList';

export default function Wishlist(props) {
  return (
    <div className="wishlist">
      <MovieList
        deleteFromWishlist={props.deleteFromWishlist}
        movies={props.wishlist.movies}
        toggleMovie={props.toggleMovie}
      />
    </div>
  );
}

Wishlist.propTypes = {
  deleteFromWishlist: PropTypes.func,
  toggleMovie: PropTypes.func,
  wishlist: PropTypes.shape({
    movies: PropTypes.array,
  }),
};

Wishlist.defaultProps = {
  deleteFromWishlist: () => {},
  toggleMovie: () => {},
  wishlist: {
    movies: [],
  },
};
