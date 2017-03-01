import React, { PropTypes } from 'react';

import Movie from './Movie';

export default function SearchResults(props) {
  return (
    <ul className="search-results">
      { props.movies.map(movie => (<Movie
        key={movie.imdbID}
        {...movie}
      />)) }
    </ul>
  );
}

SearchResults.propTypes = {
  movies: PropTypes.array.isRequired,
};
