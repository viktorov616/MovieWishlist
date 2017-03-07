import React, { PropTypes } from 'react';
import shortid from 'shortid';

import MovieForm from '../components/MovieForm';

import movieTemplate from '../data/movieTemplate';

export default function ManualAdd(props) {
  function handleSubmit(values) {
    const id = shortid.generate();
    const movie = Object.assign({}, movieTemplate, values);

    props.addToWishlist(id, movie);
  }

  return (
    <div className="manual-add">
      <MovieForm onSubmit={handleSubmit} />
    </div>
  );
}

ManualAdd.propTypes = {
  addToWishlist: PropTypes.func,
};

ManualAdd.defaultProps = {
  addToWishlist: () => {},
};
