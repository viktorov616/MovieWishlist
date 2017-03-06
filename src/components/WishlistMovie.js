import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Btn from './Btn';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function WishlistMovie(props) {
  const { imdbID: id, watched } = props.movie;
  const handleRemoveFromWishlist = props.removeFromWishlist.bind(null, id);
  const handleToggleMovie = props.toggleMovie.bind(null, id);
  const movieClass = classNames('wishlist-movie', { 'wishlist-movie--watched': watched });
  const markBtnText = (watched) ? 'Mark as unwatched' : 'Mark as watched';

  return (
    <li className={movieClass}>
      <MovieExtendedInfo {...props.movie}>
        <Btn
          onClick={handleToggleMovie}
          text={markBtnText}
        />
        <Btn
          onClick={handleRemoveFromWishlist}
          text={'Remove'}
        />
      </MovieExtendedInfo>
    </li>
  );
}

WishlistMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  toggleMovie: PropTypes.func.isRequired,
};
