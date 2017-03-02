const defaultState = {
  currentPage: 1,
  displayMoviePopup: false,
  isFetching: false,
  lastQuery: '',
  movies: [],
  movie: {},
  searchInput: '',
  totalResults: 0,
};

export default function search(state = defaultState, action) {
  switch (action.type) {
    case 'CLOSE_MOVIE_POPUP':
      return Object.assign({}, state, { displayMoviePopup: false });
    case 'OPEN_MOVIE_POPUP':
      return Object.assign({}, state, { displayMoviePopup: true });
    case 'REQUEST_DATA':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_RESPONSE':
      return Object.assign({}, state, {
        isFetching: false,
      });
    case 'RECEIVE_MOVIES': {
      const { movies, page, query, totalResults } = action;
      let newMovies = movies || [];

      if (page !== 1) {
        newMovies = state.movies.concat(movies);
      }

      return Object.assign({}, state, {
        currentPage: page,
        isFetching: false,
        lastQuery: query,
        movies: newMovies,
        totalResults: +totalResults,
      });
    }
    case 'RECEIVE_MOVIE':
      return Object.assign({}, state, { movie: action.movie });
    case 'SET_INPUT_VALUE': {
      const { inputName, value } = action;
      if (!(inputName in state)) return state;
      return Object.assign({}, state, { [inputName]: value });
    }
    default:
      return state;
  }
}
