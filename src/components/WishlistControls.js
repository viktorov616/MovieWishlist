import React, { PropTypes } from 'react';

import Btn from './Btn';

export default function WishlistControls(props) {
  const toggleWatchedBtnText = (props.showWatched) ? 'Hide Watched' : 'Show Watched';

  return (
    <div className="wishlist-controls">
      <Btn
        text={toggleWatchedBtnText}
        onClick={props.toggleShowWatched}
      />
      <Btn
        text={'Remove watched'}
        onClick={props.removeWatched}
      />
    </div>
  );
}

WishlistControls.propTypes = {
  removeWatched: PropTypes.func.isRequired,
  showWatched: PropTypes.bool.isRequired,
  toggleShowWatched: PropTypes.func.isRequired,
};
