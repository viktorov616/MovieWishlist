import fetch from 'isomorphic-fetch';

export function fetchMovies(query, page = 1) {
  return function (dispatch) {
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

function receiveMovies(json, query, page) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: json.Search,
    query,
    page,
    totalResults: json.totalResults,
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
