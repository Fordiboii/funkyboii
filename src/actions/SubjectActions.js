import {
  FETCH_SUBJECT_BEGIN,
  FETCH_SUBJECT_FAILURE,
  FETCH_SUBJECT_GRADES_SUCCESS,
  FETCH_SUBJECT_SUCCESS,
  LOG_SEARCH,
  UPDATE_SUBJECT,
  ACTIVE_SEMESTER_BUTTON
} from './SubjectActionTypes'
import fetch from 'cross-fetch'

export function updateSubject (subjectCode) {
  return { type: UPDATE_SUBJECT, subjectCode: subjectCode }
}

export function logSearch (subjectCode) {
  return {
    type: LOG_SEARCH,
    subjectCode: subjectCode
  }
}

export function fetchSubjectBegin () {
  return { type: FETCH_SUBJECT_BEGIN }
}

export function fetchSubjectSuccess (subject) {
  return {
    type: FETCH_SUBJECT_SUCCESS,
    payload: { subject }
  }
}

export function fetchSubjectGradesSuccess (subjectGrades) {
  return {
    type: FETCH_SUBJECT_GRADES_SUCCESS,
    payload: { subjectGrades }
  }
}

export function fetchSubjectFailure (error) {
  return {
    type: FETCH_SUBJECT_FAILURE,
    payload: { error }
  }
}

// Async action creator for fetching movies.
export function fetchSubjectGrades (subject) {
  let fetchURL = ''
  if (subject === undefined || subject === '') {
    fetchURL = 'https://grades.no/api/courses/'
  } else {
    fetchURL = 'https://grades.no/api/courses/' + subject + '/grades'
  }
  return dispatch => {
    // Use middleware to dispatch several functions and wait for the HTTP response.
    dispatch(fetchSubjectBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSubjectGradesSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchSubjectFailure(error)))
  }
}

export function fetchSubject (subject) {
  let fetchURL = ''
  if (subject === undefined || subject === '') {
    fetchURL = 'https://grades.no/api/courses/'
  } else {
    fetchURL = 'https://grades.no/api/courses/' + subject
  }
  return dispatch => {
    // Use middleware to dispatch several functions and wait for the HTTP response.
    dispatch(fetchSubjectBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSubjectSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchSubjectFailure(error)))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response.status)
  }
  return response
}

export function activeSemesterButton (semester) {
  return {
    type: ACTIVE_SEMESTER_BUTTON,
    activeSemester: semester
  }
}