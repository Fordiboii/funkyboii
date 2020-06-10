import {
  FETCH_SUBJECT_BEGIN,
  FETCH_SUBJECT_FAILURE,
  FETCH_SUBJECT_SUCCESS,
  FETCH_SUBJECT_GRADES_SUCCESS,
  LOG_SEARCH,
  UPDATE_SUBJECT,
  ACTIVE_SEMESTER_BUTTON,
} from "../actions/SubjectActionTypes";

// The toggleSort button is set to grey, as it is not "activated" yet
const initialState = {
  activeSemester: 0,
  subjectCode: "",
  searchHistory: [],
  items: [],
  grades: [],
  loading: false,
  error: null,
};

// Reducer handling all the actions concerning the movies
export const SubjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_SEMESTER_BUTTON:
      return Object.assign({}, state, {
        activeSemester: action.activeSemester,
      });
    case UPDATE_SUBJECT:
      return Object.assign({}, state, {
        subjectCode: action.subjectCode,
      });
    case LOG_SEARCH:
      // Update search history by appending to the list.
      return Object.assign({}, state, {
        searchHistory: [
          ...state.searchHistory,
          { searchedTitle: action.subjectCode },
        ],
      });
    case FETCH_SUBJECT_BEGIN:
      /**
       * Mark state as loading so frontend knows to display loading wheel.
       * Reset any errors when starting new fetch.
       */
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case FETCH_SUBJECT_SUCCESS:
      /**
       * When finished, set loading to false.
       * We update the items with what was received.
       */
      return Object.assign({}, state, {
        loading: false,
        items: action.payload,
      });
    case FETCH_SUBJECT_GRADES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        grades: action.payload,
      });
    case FETCH_SUBJECT_FAILURE:
      /**
       * Set loading to false and save error so we can display it.
       * Also, we reset items list upon error encounter.
       */
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
