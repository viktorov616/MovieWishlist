import React, { PropTypes } from 'react';

import Btn from './Btn';
import Form from './Form';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function MoviePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const { movie, wishlistMovies } = props;
  const id = movie.imdbID;
  const isInWishlist = wishlistMovies.some(wishlistMovie => wishlistMovie.imdbID === id);
  const handleAddToWishlist = props.addToWishlist.bind(null, id);
  const handleRemoveFromWishlist = props.removeFromWishlist.bind(null, id);
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
      closeForm={props.closeMoviePopup}
      handleSubmit={handleSubmit}
    >
      <MovieExtendedInfo {...props.movie}>
        { addOrRemoveBtn }
      </MovieExtendedInfo>
    </Form>
  );
}

MoviePopup.propTypes = {
  addToWishlist: PropTypes.func.isRequired,
  closeMoviePopup: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  removeFromWishlist: PropTypes.func.isRequired,
  wishlistMovies: PropTypes.array.isRequired,
};
