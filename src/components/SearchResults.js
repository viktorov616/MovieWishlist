import React, { PropTypes } from 'react';

import Movie from './Movie';

export default function SearchResults(props) {
  return (
    <ul className="search-results">
      { props.movies.map(movie => (<Movie
        key={movie.imdbID}
        fetchMovie={props.fetchMovie}
        openMoviePopup={props.openMoviePopup}
        {...movie}
      />)) }
    </ul>
  );
}

SearchResults.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  openMoviePopup: PropTypes.func.isRequired,
};
