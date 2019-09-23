import * as actionTypes from "../actions/ActionTypes";

const initialState={
  token:null,
  userId:null,
  error:null,
  loading:false,
  logIn:false
}

const authReducer=(state=initialState,action)=>{
  switch(action.type){
    case actionTypes.AUTH_START:
      return {...state,error:null,loading:true}
    case actionTypes.AUTH_SUCCESS:
      return {...state,token:action.idToken,userId:action.userId,error:null,loading:false,logIn:true}
    case actionTypes.AUTH_FAIL:
      return {...state,error:action.error,loading:false,logIn:false}
    case actionTypes.LOG_OUT:
      return {token:null,userId:null,logIn:false}
    case actionTypes.CHANGE_THE_LOGIN_STATE:
      return{...state,logIn:false}

    default:return state;

  }
}

export default authReducer;