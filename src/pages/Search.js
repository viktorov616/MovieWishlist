import React, { PropTypes } from 'react';

import Btn from '../components/Btn';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default function Search(props) {
  function handleLoadMore() {
    const query = props.search.lastQuery;
    const page = props.search.currentPage + 1;

    props.fetchMovies(query, page);
  }

  const movieAmount = props.search.movies.length;
  const loadMoreBtn = (movieAmount !== 0 && props.search.totalResults - movieAmount > 0)
    ? (<Btn
      handleClick={handleLoadMore}
      text={'Load more'}
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
        movies={props.search.movies}
      />
      { loadMoreBtn }
    </div>
  );
}

Search.propTypes = {
  fetchMovies: PropTypes.func,

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
  fetchMovies: () => {},
  search: {
    currentPage: 1,
    lastQuery: '',
    movies: [],
    searchInput: '',
    totalResults: 0,
  },
  setInputValue: () => {},
};
