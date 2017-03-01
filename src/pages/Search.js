import React, { PropTypes } from 'react';

import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default function Search(props) {
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
    </div>
  );
}

Search.propTypes = {
  fetchMovies: PropTypes.func,
  search: PropTypes.shape({
    movies: PropTypes.array,
    searchInput: PropTypes.string,
  }),
  setInputValue: PropTypes.func,
};

Search.defaultProps = {
  fetchMovies: () => {},
  search: {
    movies: [],
    searchInput: '',
  },
  setInputValue: () => {},
};
