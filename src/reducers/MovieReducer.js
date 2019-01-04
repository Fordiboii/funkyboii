import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  LOG_SEARCH,
  UPDATE_TITLE
} from '../actions/MovieActionTypes'

// The toggleSort button is set to grey, as it is not "activated" yet
const initialState = {
  title: '',
  searchHistory: [],
  items: [],
  loading: false,
  error: null,
  filterQuery: '',
  filterItems: [],
  toggleSort: 'grey',
  nextPage: 0
}

// Reducer handling all the actions concerning the movies
export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return Object.assign({}, state, {
        title: action.title
      })
    case LOG_SEARCH:
      // Update search history by appending to the list.
      return Object.assign({}, state, {
        searchHistory: [...state.searchHistory, {searchedTitle: action.title}]
      })
    case FETCH_MOVIES_BEGIN:
      /**
       * Mark state as loading so frontend knows to display loading wheel.
       * Reset any errors when starting new fetch.
       */
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case FETCH_MOVIES_SUCCESS:
      /**
       * When finished, set loading to false.
       * We update the items with what was received.
       */
      return Object.assign({}, state, {
        loading: false,
        items: action.payload.movies,
        nextPage: 1,
        filterItems: action.payload.movies,
        toggleSort: 'grey',
        filterQuery: ''
      })
    case FETCH_MOVIES_FAILURE:
      /**
       * Set loading to false and save error so we can display it.
       * Also, we reset items list upon error encounter.
       */
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error.message,
        items: [],
        nextPage: 1
      })
    default:
      return state
  }
}