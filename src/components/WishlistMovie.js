import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Btn from './Btn';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function WishlistMovie(props) {
  const { imdbID: id, watched } = props.movie;
  const handleDeleteFromWishlist = props.deleteFromWishlist.bind(null, id);
  const handleToggleMovie = props.toggleMovie.bind(null, id);
  const movieClass = classNames('wishlist-movie', { 'wishlist-movie--watched': watched });

  return (
    <li className={movieClass}>
      <MovieExtendedInfo {...props.movie}>
        <Btn
          onClick={handleToggleMovie}
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
  toggleMovie: PropTypes.func.isRequired,
};
