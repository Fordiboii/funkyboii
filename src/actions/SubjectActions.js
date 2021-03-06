import {
  FETCH_SUBJECT_BEGIN,
  FETCH_SUBJECT_FAILURE,
  FETCH_SUBJECT_GRADES_SUCCESS,
  FETCH_SUBJECT_SUCCESS,
  LOG_SEARCH,
  UPDATE_SUBJECT,
  ACTIVE_SEMESTER_BUTTON,
} from "./SubjectActionTypes";
import fetch from "cross-fetch";

const BASE_URL = "https://grades.no/api/courses/";

export function updateSubject(subjectCode) {
  return { type: UPDATE_SUBJECT, subjectCode: subjectCode };
}

export function logSearch(subjectCode) {
  return {
    type: LOG_SEARCH,
    subjectCode: subjectCode,
  };
}

export function fetchSubjectBegin() {
  return { type: FETCH_SUBJECT_BEGIN };
}

export function fetchSubjectSuccess(subject) {
  return {
    type: FETCH_SUBJECT_SUCCESS,
    payload: { subject },
  };
}

export function fetchSubjectGradesSuccess(subjectGrades) {
  return {
    type: FETCH_SUBJECT_GRADES_SUCCESS,
    payload: { subjectGrades },
  };
}

export function fetchSubjectFailure(error) {
  return {
    type: FETCH_SUBJECT_FAILURE,
    payload: error,
  };
}

// Async action creator for fetching movies.
export function fetchSubjectGrades(subject) {
  let fetchURL = "";
  const GRADES = "/grades";
  if (subject === undefined || subject === "") {
    console.log("Subject search input undefined or empty");
  } else {
    fetchURL = BASE_URL + subject + GRADES;
    return (dispatch) => {
      // Use middleware to dispatch several functions and wait for the HTTP response.
      dispatch(fetchSubjectBegin());
      return fetch(fetchURL)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchSubjectGradesSuccess(json));
          return json;
        })
        .catch((error) => {
          console.log(error)
        });
    };
  }
}

export function fetchSubject(subject) {
  let fetchURL = "";
  if (subject === undefined || subject === "") {
    console.log("Subject search input undefined or empty");
  } else {
    fetchURL = BASE_URL + subject;
    return (dispatch) => {
      // Use middleware to dispatch several functions and wait for the HTTP response.
      dispatch(fetchSubjectBegin());
      return fetch(fetchURL)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchSubjectSuccess(json));
          return json;
        })
        .catch((error) => {
          error = error.toString()
          dispatch(fetchSubjectFailure(error))
        });
    };
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}

export function activeSemesterButton(semester) {
  return {
    type: ACTIVE_SEMESTER_BUTTON,
    activeSemester: semester,
  };
}
