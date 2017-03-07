const data = JSON.parse(localStorage.getItem('movies')) || [];
const defaultState = {
  movies: data,
  showWatched: true,
};

export default function wishlist(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const newMovie = Object.assign({}, action.movie, { id: action.id, watched: false });
      const newMovies = state.movies.concat(newMovie);
      localStorage.setItem('movies', JSON.stringify(newMovies));

      return Object.assign({}, state, { movies: newMovies });
    }
    case 'REMOVE_FROM_WISHLIST': {
      const newMovies = state.movies.filter(movie => movie.id !== action.id);
      localStorage.setItem('movies', JSON.stringify(newMovies));

      return Object.assign({}, state, {
        movies: newMovies,
      });
    }
    case 'REMOVE_WATCHED': {
      const newMovies = state.movies.filter(movie => !movie.watched);
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
    case 'TOGGLE_SHOW_WATCHED':
      return Object.assign({}, state, { showWatched: !state.showWatched });
    default:
      return state;
  }
}
