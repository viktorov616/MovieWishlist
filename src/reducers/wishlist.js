const defaultState = {
  movies: [],
};

export default function wishlist(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return Object.assign({}, state, { movies: state.movies.concat(action.movie) });
    case 'DELETE_FROM_WISHLIST':
      return Object.assign({}, state, {
        movies: state.movies.filter(movie => movie.imdbID !== action.id),
      });
    default:
      return state;
  }
}
