import * as actionTypes from "../actions/ActionTypes";
const initialState = {
  feedBack: {
    name: "",
    subject: "",
    email: "",
    help: "",
  },
  data:[],
  isLoaded:false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_THE_FEEDBACK:
      const prevData=[...state.data,action.feedBack];
      return {
        ...state,
        data:prevData
      }
    case actionTypes.NAME_CHANGE_HANDLER:
      return {
        ...state,
        feedBack: {
          ...state.feedBack,
          name: action.name,
        },
      };
    case actionTypes.SUBJECT_CHANGE_HANDLER:
      return {
        ...state,
        feedBack: {
          ...state.feedBack,
          subject: action.subject,
        },
      };
    case actionTypes.EMAIL_CHANGE_HANDLER:
      return {
        ...state,
        feedBack: {
          ...state.feedBack,
          email: action.email,
        },
      };
    case actionTypes.HELP_CHANGE_HANDLER:
      return {
        ...state,
        feedBack: {
          ...state.feedBack,
          help: action.help,
        },
      };
    case actionTypes.GETTING_THE_FEEDBACKS:
      console.log("here to get")
      return {
        ...state,
        data:action.data,
        isLoaded:true
      }
    case actionTypes.CLEAR_THE_DATA :
      return {
        ...state,
        data:[],
        isLoaded:false
      }
    default:
      return state;
  }
};
export default reducer;
