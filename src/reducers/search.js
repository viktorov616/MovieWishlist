const defaultState = {
  isFetching: false,
  movies: [],
  searchInput: '',
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
      const movies = action.movies || [];

      return Object.assign({}, state, {
        isFetching: false,
        movies,
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
