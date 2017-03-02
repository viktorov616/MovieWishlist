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

  const { displayMoviePopup, isFetching, movies, movie, totalResults } = props.search;
  const movieAmount = movies.length;
  const loadMoreBtn = (movieAmount !== 0 && totalResults - movieAmount > 0)
    ? (<Btn
      handleClick={handleLoadMore}
      text={'Load more'}
    />) : null;
  const moviePopup = (displayMoviePopup && !isFetching)
    ? (<MoviePopup
      closeMoviePopup={props.closeMoviePopup}
      {...movie}
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
        fetchMovie={props.fetchMovie}
        movies={props.search.movies}
        openMoviePopup={props.openMoviePopup}
      />
      { loadMoreBtn }
      { moviePopup }
    </div>
  );
}

Search.propTypes = {
  closeMoviePopup: PropTypes.func,
  fetchMovies: PropTypes.func,
  fetchMovie: PropTypes.func,
  isFetching: PropTypes.bool,
  openMoviePopup: PropTypes.func,
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
  isFetching: false,
  openMoviePopup: () => {},
  search: {
    currentPage: 1,
    lastQuery: '',
    movies: [],
    searchInput: '',
    totalResults: 0,
  },
  setInputValue: () => {},
};
