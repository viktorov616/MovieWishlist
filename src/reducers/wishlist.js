const movies = JSON.parse(localStorage.getItem('movies')) || [];
const defaultState = {
  movies,
};

export default function wishlist(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const newMovies = state.movies.concat(action.movie);
      localStorage.setItem('movies', JSON.stringify(newMovies));
      return Object.assign({}, state, { movies: newMovies });
    }
    case 'DELETE_FROM_WISHLIST': {
      const newMovies = state.movies.filter(movie => movie.imdbID !== action.id);
      localStorage.setItem('movies', JSON.stringify(newMovies));
      return Object.assign({}, state, {
        movies: newMovies,
      });
    }
    default:
      return state;
  }
}
