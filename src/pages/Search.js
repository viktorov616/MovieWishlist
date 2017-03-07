import React, { PropTypes } from 'react';
import shortid from 'shortid';

import ErrorPopup from '../components/ErrorPopup';
import Btn from '../components/Btn';
import MoviePopup from '../components/MoviePopup';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SpinLoader from '../components/SpinLoader';

export default function Search(props) {
  function handleLoadMore() {
    const query = props.search.lastQuery;
    const page = props.search.currentPage + 1;

    props.fetchMovies(query, page);
  }

  function addToWishlist(imdbID) {
    const id = shortid.generate();

    props.handleAddToWishlist(imdbID, id);
  }

  const {
    displayErrorPopup, displayMoviePopup, errorMessage, isFetching, movies, movie, totalResults,
  } = props.search;
  const movieAmount = movies.length;
  const loadMoreBtn = (movieAmount !== 0 && totalResults - movieAmount > 0)
    ? (<Btn
      onClick={handleLoadMore}
      text={'Load more'}
    />) : null;
  const moviePopup = (displayMoviePopup)
    ? (<MoviePopup
      addToWishlist={addToWishlist}
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
        addToWishlist={addToWishlist}
        movies={props.search.movies}
        openMoviePopup={props.handleOpenMoviePopup}
        removeFromWishlist={props.removeFromWishlist}
        wishlistMovies={props.wishlist.movies}
      />
      { loadMoreBtn }
      { moviePopup }
      { spinLoader }
      { errorPopup }
    </div>
  );
}

Search.propTypes = {
  closePopup: PropTypes.func,
  fetchMovies: PropTypes.func,
  handleAddToWishlist: PropTypes.func,
  handleOpenMoviePopup: PropTypes.func,
  removeFromWishlist: PropTypes.func,
  search: PropTypes.shape({
    currentPage: PropTypes.number,
    lastQuery: PropTypes.string,
    movies: PropTypes.array,
    searchInput: PropTypes.string,
    totalResults: PropTypes.number,
  }),
  setInputValue: PropTypes.func,
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
  removeFromWishlist: () => {},
  search: {
    currentPage: 1,
    lastQuery: '',
    movies: [],
    searchInput: '',
    totalResults: 0,
  },
  setInputValue: () => {},
  wishlist: {
    movies: [],
  },
};
