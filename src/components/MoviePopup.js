import React, { PropTypes } from 'react';

import Btn from './Btn';
import Form from './Form';
import MovieExtendedInfo from './MovieExtendedInfo';

export default function MoviePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const id = props.movie.imdbID;
  const handleAddToWishlist = props.addToWishlist.bind(null, id);

  return (
    <Form
      className={'movie-popup'}
      closeForm={props.closeMoviePopup}
      handleSubmit={handleSubmit}
    >
      <MovieExtendedInfo {...props.movie}>
        <Btn
          onClick={handleAddToWishlist}
          text={'Add to wishlist'}
        />
      </MovieExtendedInfo>
    </Form>
  );
}

MoviePopup.propTypes = {
  addToWishlist: PropTypes.func.isRequired,
  closeMoviePopup: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};
