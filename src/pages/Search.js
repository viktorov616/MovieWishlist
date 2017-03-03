import React, { PropTypes } from 'react';

import Btn from '../components/Btn';
import MoviePopup from '../components/MoviePopup';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default function Search(props) {
  function handleLoadMore() {
    const query = props.search.lastQuery;
    const page = props.search.currentPage + 1;

    props.fetchMovies(query, page);
  }

  const { displayMoviePopup, movies, movie, totalResults } = props.search;
  const movieAmount = movies.length;
  const loadMoreBtn = (movieAmount !== 0 && totalResults - movieAmount > 0)
    ? (<Btn
      onClick={handleLoadMore}
      text={'Load more'}
    />) : null;
  const moviePopup = (displayMoviePopup)
    ? (<MoviePopup
      addToWishlist={props.handleAddToWishlist}
      closeMoviePopup={props.closeMoviePopup}
      movie={movie}
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
        addToWishlist={props.handleAddToWishlist}
        openMoviePopup={props.handleOpenMoviePopup}
        movies={props.search.movies}
      />
      { loadMoreBtn }
      { moviePopup }
    </div>
  );
}

Search.propTypes = {
  closeMoviePopup: PropTypes.func,
  fetchMovies: PropTypes.func,
  handleAddToWishlist: PropTypes.func,
  handleOpenMoviePopup: PropTypes.func,
  search: PropTypes.shape({
    currentPage: PropTypes.number,
    lastQuery: PropTypes.string,
    movies: PropTypes.array,
    searchInput: PropTypes.string,
    totalResults: PropTypes.number,
  }),
  setInputValue: PropTypes.func,
};

Search.defaultProps = {
  closeMoviePopup: () => {},
  fetchMovies: () => {},
  fetchMovie: () => {},
  handleAddToWishlist: () => {},
  handleOpenMoviePopup: () => {},
  search: {
    currentPage: 1,
    lastQuery: '',
    movies: [],
    searchInput: '',
    totalResults: 0,
  },
  setInputValue: () => {},
};
