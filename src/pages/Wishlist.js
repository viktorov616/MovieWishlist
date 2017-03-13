import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import debouce from '../utility/debouce';

import BtnUp from '../components/BtnUp';
import MovieList from '../components/MovieList';
import WishlistControls from '../components/WishlistControls';

export default class Wishlist extends Component {
  static computeTitleText(movies) {
    const unwatchedMovies = movies.filter(movie => !movie.watched).length;
    let text;

    if (movies.length === 0) {
      text = 'You don\'t have any movies to watch';
    } else if (unwatchedMovies === 0) {
      text = 'You don\'t have unwatched movies';
    } else if (unwatchedMovies === 1) {
      text = 'You have one unwatched movie';
    } else {
      text = `You have ${unwatchedMovies} unwatched movies`;
    }

    return text;
  }

  constructor(props) {
    super(props);

    this.checkScrollPosition = debouce(this.checkScrollPosition.bind(this), 10);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition);
  }

  checkScrollPosition() {
    const id = this.props.wishlist.id;

    if (window.pageYOffset > 150 && !this.props.wishlist.displayBtnUp) {
      this.props.showBtnUp(id);
    } else if (window.pageYOffset < 150 && this.props.wishlist.displayBtnUp) {
      this.props.hideBtnUp(id);
    }
  }

  render() {
    const { props } = this;
    const { displayBtnUp, movies, showWatched } = props.wishlist;
    const titleText = this.constructor.computeTitleText(movies);
    const btnUp = (displayBtnUp) ? <BtnUp hideBtnUp={props.hideBtnUp} /> : null;
    const wishlistControls = (movies.length !== 0)
      ? (<WishlistControls
        removeWatched={props.removeWatched}
        showWatched={showWatched}
        toggleShowWatched={props.toggleShowWatched}
      />) : null;

    return (
      <div className="wishlist">
        <h1 className="wishlist__title">{ titleText }</h1>
        <ReactCSSTransitionGroup
          transitionName="wishlist__controls--fade"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          { wishlistControls }
        </ReactCSSTransitionGroup>
        <MovieList
          removeFromWishlist={props.removeFromWishlist}
          movies={movies}
          showWatched={showWatched}
          toggleMovie={props.toggleMovie}
        />
        <ReactCSSTransitionGroup
          transitionName="wishlist__btn-up--fade"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
        >
          { btnUp }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Wishlist.propTypes = {
  hideBtnUp: PropTypes.func,
  removeFromWishlist: PropTypes.func,
  removeWatched: PropTypes.func,
  showBtnUp: PropTypes.func,
  toggleMovie: PropTypes.func,
  toggleShowWatched: PropTypes.func,
  wishlist: PropTypes.shape({
    displayBtnUp: PropTypes.bool,
    id: PropTypes.string,
    movies: PropTypes.array,
    showWatched: PropTypes.bool,
  }),
};

Wishlist.defaultProps = {
  hideBtnUp: () => {},
  removeFromWishlist: () => {},
  removeWatched: () => {},
  showBtnUp: () => {},
  toggleMovie: () => {},
  toggleShowWatched: () => {},
  wishlist: {
    displayBtnUp: false,
    id: '',
    movies: [],
    showWatched: true,
  },
};
