const data = JSON.parse(localStorage.getItem('movies')) || [];
const defaultState = {
  movies: data,
};

export default function wishlist(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const newMovie = Object.assign({}, action.movie, { watched: false });
      const newMovies = state.movies.concat(newMovie);
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
    case 'TOGGLE_MOVIE': {
      const { i } = action;
      const { movies } = state;
      const newMovies = [
        ...movies.slice(0, i),
        Object.assign({}, movies[i], { watched: !movies[i].watched }),
        ...movies.slice(i + 1),
      ];
      const newState = Object.assign({}, state, { movies: newMovies });
      localStorage.setItem('movies', JSON.stringify(newMovies));

      return newState;
    }
    default:
      return state;
  }
}
