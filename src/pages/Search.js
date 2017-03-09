import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';

import debouce from '../utility/debouce';

import ErrorPopup from '../components/ErrorPopup';
import BtnUp from '../components/BtnUp';
import Btn from '../components/Btn';
import MoviePopup from '../components/MoviePopup';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SpinLoader from '../components/SpinLoader';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.addToWishlist = this.addToWishlist.bind(this);
    this.checkScrollPosition = debouce(this.checkScrollPosition.bind(this), 10);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition);
  }

  checkScrollPosition() {
    const id = this.props.search.id;

    if (window.pageYOffset > 150 && !this.props.search.displayBtnUp) {
      this.props.showBtnUp(id);
    } else if (window.pageYOffset < 150 && this.props.search.displayBtnUp) {
      this.props.hideBtnUp(id);
    }
  }

  handleLoadMore() {
    const { props } = this;
    const query = props.search.lastQuery;
    const page = props.search.currentPage + 1;

    props.fetchMovies(query, page);
  }

  addToWishlist(imdbID) {
    const id = shortid.generate();

    this.props.handleAddToWishlist(imdbID, id);
  }

  render() {
    const { props } = this;
    const {
      displayBtnUp, displayErrorPopup, displayMoviePopup, errorMessage, isFetching,
      movies, movie, totalResults,
    } = props.search;
    const movieAmount = movies.length;
    const loadMoreBtn = (movieAmount !== 0 && totalResults - movieAmount > 0)
      ? (<Btn
        onClick={this.handleLoadMore}
        text={'Load more'}
      />) : null;
    const btnUp = (displayBtnUp) ? <BtnUp hideBtnUp={props.hideBtnUp} /> : null;
    const moviePopup = (displayMoviePopup)
      ? (<MoviePopup
        addToWishlist={props.addToWishlist}
        closePopup={props.closePopup}
        movie={movie}
        removeFromWishlist={props.removeFromWishlist}
        wishlistMovies={props.wishlist.movies}
      />) : null;
    const spinLoader = (isFetching)
      ? <div className="search__spin-loader-container"><SpinLoader /></div> : null;
    const errorPopup = (displayErrorPopup)
      ? (<ErrorPopup
        closePopup={props.closePopup}
        errorMessage={errorMessage}
      />) : null;

    return (
      <div className="search">
        <SearchBar
          inputName={'searchInput'}
          inputValue={props.search.searchInput}
          onChange={props.setInputValue}
          search={props.fetchMovies}
        />
        <SearchResults
          addToWishlist={this.addToWishlist}
          movies={props.search.movies}
          openMoviePopup={props.handleOpenMoviePopup}
          removeFromWishlist={props.removeFromWishlist}
          wishlistMovies={props.wishlist.movies}
        />
        { btnUp }
        { loadMoreBtn }
        { moviePopup }
        { spinLoader }
        { errorPopup }
      </div>
    );
  }
}

Search.propTypes = {
  closePopup: PropTypes.func,
  fetchMovies: PropTypes.func,
  handleAddToWishlist: PropTypes.func,
  handleOpenMoviePopup: PropTypes.func,
  hideBtnUp: PropTypes.func,
  removeFromWishlist: PropTypes.func,
  search: PropTypes.shape({
    currentPage: PropTypes.number,
    displayBtnUp: PropTypes.bool,
    displayErrorPopup: PropTypes.bool,
    displayMoviePopup: PropTypes.bool,
    errorMessage: PropTypes.string,
    id: PropTypes.string,
    isFetching: PropTypes.bool,
    lastQuery: PropTypes.string,
    movies: PropTypes.array,
    movie: PropTypes.object,
    searchInput: PropTypes.string,
    totalResults: PropTypes.number,
  }),
  setInputValue: PropTypes.func,
  showBtnUp: PropTypes.func,
  wishlist: PropTypes.shape({
    movies: PropTypes.array,
  }),
};

Search.defaultProps = {
  closePopup: () => {},
  fetchMovies: () => {},
  fetchMovie: () => {},
  handleAddToWishlist: () => {},
  handleOpenMoviePopup: () => {},
  hideBtnUp: () => {},
  removeFromWishlist: () => {},
  search: {
    currentPage: 1,
    displayBtnUp: false,
    displayErrorPopup: false,
    displayMoviePopup: false,
    errorMessage: '',
    id: '',
    isFetching: false,
    lastQuery: '',
    movies: [],
    movie: {},
    searchInput: '',
    totalResults: 0,
  },
  setInputValue: () => {},
  showBtnUp: () => {},
  wishlist: {
    movies: [],
  },
};
