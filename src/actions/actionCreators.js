import fetch from 'isomorphic-fetch';

export function addToWishlist(id, movie) {
  return {
    type: 'ADD_TO_WISHLIST',
    id,
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

function fetchMovie(imdbID, ...functions) {
  return (dispatch) => {
    dispatch(requestData());

    return fetch(`http://www.omdbapi.com/?i=${imdbID}`)
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

export function handleAddToWishlist(imdbID, id) {
  const handleAddToWishList = addToWishlist.bind(null, id);

  return (dispatch) => {
    dispatch(fetchMovie(imdbID, handleAddToWishList));
  };
}

export function handleOpenMoviePopup(imdbID) {
  return (dispatch) => {
    const openMoviePopup = openPopup.bind(null, 'displayMoviePopup');
    dispatch(fetchMovie(imdbID, receiveMovie, openMoviePopup));
  };
}

export function hideBtnUp(id) {
  return {
    type: 'HIDE_BTN_UP',
    id,
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

export function removeWatched() {
  return {
    type: 'REMOVE_WATCHED',
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

export function showBtnUp(id) {
  return {
    type: 'SHOW_BTN_UP',
    id,
  };
}

export function toggleMovie(i) {
  return {
    type: 'TOGGLE_MOVIE',
    i,
  };
}

export function toggleShowWatched() {
  return {
    type: 'TOGGLE_SHOW_WATCHED',
  };
}
