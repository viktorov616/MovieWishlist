import React, { PropTypes } from 'react';

import MovieList from '../components/MovieList';

export default function Wishlist(props) {
  return (
    <div className="wishlist">
      <MovieList
        deleteFromWishlist={props.deleteFromWishlist}
        movies={props.wishlist.movies}
      />
    </div>
  );
}

Wishlist.propTypes = {
  deleteFromWishlist: PropTypes.func,
  wishlist: PropTypes.shape({
    movies: PropTypes.array,
  }),
};

Wishlist.defaultProps = {
  deleteFromWishlist: () => {},
  wishlist: {
    movies: [],
  },
};
