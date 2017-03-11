import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';

import Btn from './Btn';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function WishlistMovie(props) {
  const { id, watched } = props.movie;
  const handleRemoveFromWishlist = props.removeFromWishlist.bind(null, id);
  const handleToggleMovie = props.toggleMovie.bind(null, id);
  const movieClass = classNames('wishlist-movie', { 'wishlist-movie--watched': watched });
  const markBtnText = (watched) ? 'Mark as unwatched' : 'Mark as watched';
  const watchedInfo = (watched) ? <p className="wishlist-movie__watched-info">Watched</p> : null;

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
      <ReactCSSTransitionGroup
        transitionName="wishlist-movie__watched-info-wrapper--fade"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        { watchedInfo }
      </ReactCSSTransitionGroup>
    </li>
  );
}

WishlistMovie.propTypes = {
  movie: PropTypes.object.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  toggleMovie: PropTypes.func.isRequired,
};
