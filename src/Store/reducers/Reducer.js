import * as actionTypes from "../actions/ActionTypes";
const initialState = {
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
    case actionTypes.GETTING_THE_FEEDBACKS:
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
