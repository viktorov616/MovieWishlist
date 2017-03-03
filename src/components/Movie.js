import React, { PropTypes } from 'react';

import Btn from './Btn';
import MovieInfo from './MovieInfo';

export default function Movie(props) {
  const { movie } = props;
  const id = movie.imdbID;
  const handleAddToWishlist = props.addToWishlist.bind(null, id);
  const handleOpenMoviePopup = props.openMoviePopup.bind(null, id);

  return (
    <li className="movie">
      <MovieInfo {...movie}>
        <Btn
          onClick={handleOpenMoviePopup}
          text={'More info'}
          mods={['small']}
        />
        <Btn
          onClick={handleAddToWishlist}
          text={'Add to wishlist'}
          mods={['small']}
        />
      </MovieInfo>
    </li>
  );
}

Movie.propTypes = {
  addToWishlist: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
  }).isRequired,
  openMoviePopup: PropTypes.func.isRequired,
};
