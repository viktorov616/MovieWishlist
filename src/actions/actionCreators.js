import fetch from 'isomorphic-fetch';

export function fetchMovies(query) {
  return function (dispatch) {
    dispatch(requestData());

    return fetch(`http://www.omdbapi.com/?s=${query}`)
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((json) => {
              dispatch(receiveResponse());
              dispatch(receiveMovies(json));
            });
        } else {
          dispatch(receiveResponse());
          // add error handler later
        }
      });
  };
}

function receiveMovies(json) {
  return {
    type: 'RECEIVE_MOVIES',
    movies: json.Search,
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
