import React, { PropTypes } from 'react';

import Btn from './Btn';
import Form from './Form';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function MoviePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const { closePopup, movie, wishlistMovies } = props;
  const { imdbID } = movie;
  const isInWishlist = wishlistMovies.some(wishlistMovie => wishlistMovie.imdbID === imdbID);
  const additionalInfo = (isInWishlist) ? 'This movie is in the wishlist' : null;
  const handleAddToWishlist = props.addToWishlist.bind(null, imdbID);
  const handleRemoveFromWishlist = props.removeFromWishlist.bind(null, imdbID);
  const closeMoviePopup = closePopup.bind(null, 'displayMoviePopup');
  const addOrRemoveBtn = (isInWishlist)
    ? (<Btn
      onClick={handleRemoveFromWishlist}
      text={'Remove from wishlist'}
    />)
    : (<Btn
      onClick={handleAddToWishlist}
      text={'Add to wishlist'}
    />);

  return (
    <Form
      className={'movie-popup'}
      closeForm={closeMoviePopup}
      handleSubmit={handleSubmit}
    >
      <MovieExtendedInfo
        additionalInfo={additionalInfo}
        {...props.movie}
      >
        { addOrRemoveBtn }
      </MovieExtendedInfo>
    </Form>
  );
}

MoviePopup.propTypes = {
  addToWishlist: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  wishlistMovies: PropTypes.array.isRequired,
};
