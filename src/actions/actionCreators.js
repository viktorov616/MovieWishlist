import fetch from 'isomorphic-fetch';

function addToWishlist(movie) {
  return {
    type: 'ADD_TO_WISHLIST',
    movie,
  };
}

export function closePopup(name) {
  return {
    type: 'CLOSE_POPUP',
    name,
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

              if (json.Response === 'False') {
                dispatch(setErrorMessage(json.Error));
                dispatch(openPopup('displayErrorPopup'));
                return;
              }

              dispatch(receiveMovies(json, query, page));
            });
        } else {
          dispatch(receiveResponse());
          dispatch(setErrorMessage('Cannot load data from server.'));
          dispatch(openPopup('displayErrorPopup'));
        }
      });
  };
}

function fetchMovie(id, ...functions) {
  return (dispatch) => {
    dispatch(requestData());

    return fetch(`http://www.omdbapi.com/?i=${id}`)
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((json) => {
              dispatch(receiveResponse());
              functions.map(f => dispatch(f(json)));
            });
        } else {
          dispatch(receiveResponse());
          dispatch(setErrorMessage('Cannot load data from server.'));
          dispatch(openPopup('displayErrorPopup'));
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
    const openMoviePopup = openPopup.bind(null, 'displayMoviePopup');
    dispatch(fetchMovie(id, receiveMovie, openMoviePopup));
  };
}

export function openPopup(name) {
  return {
    type: 'OPEN_POPUP',
    name,
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

export function removeFromWishlist(id) {
  return {
    type: 'REMOVE_FROM_WISHLIST',
    id,
  };
}

function requestData() {
  return {
    type: 'REQUEST_DATA',
  };
}

function setErrorMessage(message) {
  return {
    type: 'SET_ERROR_MESSAGE',
    message,
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
