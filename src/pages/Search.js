import React, { PropTypes } from 'react';

import SearchBar from '../components/SearchBar';

export default function Search(props) {
  return (
    <div className="search">
      <SearchBar
        inputName={'searchInput'}
        inputValue={props.search.searchInput}
        onChange={props.setInputValue}
        search={props.fetchMovies}
      />
    </div>
  );
}

Search.propTypes = {
  fetchMovies: PropTypes.func,
  search: PropTypes.shape({
    searchInput: PropTypes.string,
  }),
  setInputValue: PropTypes.func,
};

Search.defaultProps = {
  fetchMovies: () => {},
  search: {
    searchInput: '',
  },
  setInputValue: () => {},
};
