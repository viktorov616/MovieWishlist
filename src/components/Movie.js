import React, { PropTypes } from 'react';

import Btn from './Btn';
import MovieInfo from './MovieInfo';

export default function Movie(props) {
  function handleAddToWishlist() {
    props.addToWishlist(id);
  }

  const { movie, wishlistMovies } = props;
  const id = movie.imdbID;
  const isInWishlist = wishlistMovies.some(wishlistMovie => wishlistMovie.imdbID === id);
  const additionalInfo = (isInWishlist) ? 'In wishlist' : null;
  const handleOpenMoviePopup = props.openMoviePopup.bind(null, id);
  const handleRemoveFromWishlist = props.removeFromWishlist.bind(null, id);
  const addOrRemoveBtn = (isInWishlist)
    ? (<Btn
      onClick={handleRemoveFromWishlist}
      text={'Remove from wishlist'}
      mods={['small']}
    />)
    : (<Btn
      onClick={handleAddToWishlist}
      text={'Add to wishlist'}
      mods={['small']}
    />);

  return (
    <li className="movie">
      <MovieInfo
        additionalInfo={additionalInfo}
        {...movie}
      >
        <Btn
          onClick={handleOpenMoviePopup}
          text={'More info'}
          mods={['small']}
        />
        { addOrRemoveBtn }
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
  removeFromWishlist: PropTypes.func.isRequired,
  wishlistMovies: PropTypes.array.isRequired,
};
