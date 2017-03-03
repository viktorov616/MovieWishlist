import React, { PropTypes } from 'react';

import Btn from './Btn';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function WishlistMovie(props) {
  const id = props.movie.imdbID;
  const handleDeleteFromWishlist = props.deleteFromWishlist.bind(null, id);

  return (
    <li className="wishlist-movie">
      <MovieExtendedInfo {...props.movie}>
        <Btn
          onClick={() => {}}
          text={'Mark as watched'}
        />
        <Btn
          onClick={handleDeleteFromWishlist}
          text={'Delete'}
        />
      </MovieExtendedInfo>
    </li>
  );
}

WishlistMovie.propTypes = {
  deleteFromWishlist: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};
