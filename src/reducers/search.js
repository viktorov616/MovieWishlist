const defaultState = {
  currentPage: 1,
  isFetching: false,
  lastQuery: '',
  movies: [],
  searchInput: '',
  totalResults: 0,
};

export default function search(state = defaultState, action) {
  switch (action.type) {
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
    case 'SET_INPUT_VALUE': {
      const { inputName, value } = action;
      if (!(inputName in state)) return state;
      return Object.assign({}, state, { [inputName]: value });
    }
    default:
      return state;
  }
}
