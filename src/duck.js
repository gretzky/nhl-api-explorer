import axios from "axios";

const FETCH = "FETCH";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const api = axios.create({
  baseURL: "https://statsapi.web.nhl.com/api/v1"
});

const fetchTeams = () => async dispatch => {
  dispatch({ type: FETCH });
  try {
    const response = await api
      .get("/teams/6/?expand=team.roster")
      .then(response => response.data)
      .then(data =>
        dispatch({
          type: SUCCESS,
          team: data.teams[0].name,
          roster: data.teams[0].roster.roster
        })
      );

    Promise.resolve(response);
  } catch (err) {
    dispatch({ type: ERROR, error: err });
  }
};

const initialState = {
  isFetching: false,
  team: {},
  roster: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        team: action.team,
        roster: action.roster
      };
    case ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export { fetchTeams };
export default reducer;
