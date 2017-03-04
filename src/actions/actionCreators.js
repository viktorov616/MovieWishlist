import fetch from 'isomorphic-fetch';

function addToWishlist(movie) {
  return {
    type: 'ADD_TO_WISHLIST',
    movie,
  };
}

export function closeMoviePopup() {
  return {
    type: 'CLOSE_MOVIE_POPUP',
  };
}

export function deleteFromWishlist(id) {
  return {
    type: 'DELETE_FROM_WISHLIST',
    id,
  };
}

export function fetchMovies(query, page = 1) {
  return (dispatch) => {
    dispatch(requestData());

    return fetch(`http://www.omdbapi.com/?s=${query}&page=${page}`)
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((json) => {
              dispatch(receiveResponse());
              dispatch(receiveMovies(json, query, page));
            });
        } else {
          dispatch(receiveResponse());
          // add error handler later
        }
      });
  };
}

function fetchMovie(id, ...functions) {
  return (dispatch) => {
    dispatch(requestData());

    return fetch(`http://www.omdbapi.com/?i=${id}&plot=full`)
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((json) => {
              dispatch(receiveResponse());
              functions.map(f => dispatch(f(json)));
            });
        } else {
          dispatch(receiveResponse());
          // add error handler later
        }
      });
  };
}

export function handleAddToWishlist(id) {
  return (dispatch) => {
    dispatch(fetchMovie(id, addToWishlist));
  };
}

export function handleOpenMoviePopup(id) {
  return (dispatch) => {
    dispatch(fetchMovie(id, receiveMovie, openMoviePopup));
  };
}

function openMoviePopup() {
  return {
    type: 'OPEN_MOVIE_POPUP',
  };
}

function receiveMovies(json, query, page) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: json.Search,
    query,
    page,
    totalResults: json.totalResults,
  };
}

function receiveMovie(json) {
  return {
    type: 'RECEIVE_MOVIE',
    movie: json,
  };
}

function receiveResponse() {
  return {
    type: 'RECEIVE_RESPONSE',
  };
}

function requestData() {
  return {
    type: 'REQUEST_DATA',
  };
}

export function setInputValue(inputName, value) {
  return {
    type: 'SET_INPUT_VALUE',
    inputName,
    value,
  };
}

export function toggleMovie(i) {
  return {
    type: 'TOGGLE_MOVIE',
    i,
  };
}
