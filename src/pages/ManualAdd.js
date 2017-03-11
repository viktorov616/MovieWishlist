import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import shortid from 'shortid';

import MessagePopup from '../components/MessagePopup';
import MovieForm from '../components/MovieForm';

import movieTemplate from '../data/movieTemplate';

export default function ManualAdd(props) {
  function handleSubmit(values) {
    const id = shortid.generate();
    const movie = Object.assign({}, movieTemplate, values);

    props.addToWishlist(id, movie);
    props.openPopup('displaySucceedPopup');
  }

  const { displaySucceedPopup } = props.manualAdd;
  const submitSucceedPopup = (displaySucceedPopup)
    ? (<MessagePopup
      closePopup={props.closePopup}
      header={'Succeed!'}
      message={'The movie was added to the wishlist'}
      mods={['succeed']}
      popupName={'displaySucceedPopup'}
    />) : null;

  return (
    <div className="manual-add">
      <MovieForm onSubmit={handleSubmit} />
      <ReactCSSTransitionGroup
        transitionName="manual-add__succeed-popup--fade"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        { submitSucceedPopup }
      </ReactCSSTransitionGroup>
    </div>
  );
}

ManualAdd.propTypes = {
  addToWishlist: PropTypes.func,
  closePopup: PropTypes.func,
  manualAdd: PropTypes.shape({
    displaySucceedPopup: PropTypes.bool,
  }),
  openPopup: PropTypes.func,
};

ManualAdd.defaultProps = {
  addToWishlist: () => {},
  closePopup: () => {},
  manualAdd: {
    displaySucceedPopup: false,
  },
  openPopup: () => {},
};
