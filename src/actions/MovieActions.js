import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  LOG_SEARCH,
  UPDATE_TITLE,
} from './MovieActionTypes'
import fetch from 'cross-fetch'

export function updateTitle (title) {
  return { type: UPDATE_TITLE, title }
}

export function logSearch (title) {
  return {
    type: LOG_SEARCH,
    title: title
  }
}

export function fetchMoviesBegin () {
  return { type: FETCH_MOVIES_BEGIN }
}

export function fetchMoviesSuccess (movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies }
  }
}

export function fetchMoviesFailure (error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
  }
}

// Async action creator for fetching movies.
export function fetchMovies (title) {
  let fetchURL = ''
  if (title === undefined || title === '') {
    fetchURL = 'https://grades.no/api/courses/'
  } else {
    fetchURL = 'https://grades.no/api/courses/' + title + '/grades/'
  }
  return dispatch => {
    // Use middleware to dispatch several functions and wait for the HTTP response.
    dispatch(fetchMoviesBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMoviesSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchMoviesFailure(error)))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
