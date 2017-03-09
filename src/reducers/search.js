const defaultState = {
  currentPage: 1,
  displayBtnUp: false,
  displayErrorPopup: false,
  displayMoviePopup: false,
  errorMessage: '',
  id: 'search',
  isFetching: false,
  lastQuery: '',
  movies: [],
  movie: {},
  searchInput: '',
  totalResults: 0,
};

export default function search(state = defaultState, action) {
  switch (action.type) {
    case 'CLOSE_POPUP':
      if (!(action.name in state)) {
        return state;
      }

      return Object.assign({}, state, { [action.name]: false });
    case 'HIDE_BTN_UP':
      if (action.id !== state.id) {
        return state;
      }

      return Object.assign({}, state, { displayBtnUp: false });
    case 'OPEN_POPUP':
      if (!(action.name in state)) {
        return state;
      }

      return Object.assign({}, state, { [action.name]: true });
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
    case 'SET_ERROR_MESSAGE':
      return Object.assign({}, state, { errorMessage: action.message });
    case 'SET_INPUT_VALUE': {
      const { inputName, value } = action;

      if (!(inputName in state)) {
        return state;
      }

      return Object.assign({}, state, { [inputName]: value });
    }
    case 'SHOW_BTN_UP':
      if (action.id !== state.id) {
        return state;
      }

      return Object.assign({}, state, { displayBtnUp: true });
    default:
      return state;
  }
}
