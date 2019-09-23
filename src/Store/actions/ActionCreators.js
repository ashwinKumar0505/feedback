import * as  actionTypes from "./ActionTypes"
import axios from "axios"

export const storeTheFeedBack=(event,feedback,token,userId)=>{
  console.log(event)
  event.preventDefault();
  feedback={
    ...feedback,
    userId:userId
  }
  return dispatch => {
    console.log(token)
    axios
      .post("https://chat-page-da0db.firebaseio.com/feedBack.json?auth=" + token,feedback)
      .then(Response => {
            dispatch(store(feedback));
      })
      .catch(error =>{
        console.log(error)
      })
  // return {
  //   type:actionTypes.STORE_THE_FEEDBACK,
  //   data:feedback
  // }
  };
}
const store=(feedBack)=>{
   return{
    type:actionTypes.STORE_THE_FEEDBACK,
    feedBack:feedBack
  }
}
export const nameChangeHandler=(event)=>{
  return{
    type:actionTypes.NAME_CHANGE_HANDLER,
    name:event.target.value,
  }
}
export const subjectChangeHandler=(event)=>{
  return{
    type:actionTypes.SUBJECT_CHANGE_HANDLER,
    subject:event.target.value,
  }
}
export const emailChangeHandler=(event)=>{
  return{
    type:actionTypes.EMAIL_CHANGE_HANDLER,
    email:event.target.value,
  }
}
export const helpChangeHandler=(event)=>{
console.log("here")

  return{
    type:actionTypes.HELP_CHANGE_HANDLER,
    help:event.target.value,
  }
}

export const gettingTheFeedBacks=(data)=>{
  return {
    type:actionTypes.GETTING_THE_FEEDBACKS,
    data:data
  }
}
export const fetchingTheDetails=(token,userId)=>{
  return dispatch => {
     const queryParams="?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("https://chat-page-da0db.firebaseio.com/feedBack.json" + queryParams)
      .then(res => {
        const fetchedFeedBacks = [];
        for (let key in res.data) {
          fetchedFeedBacks.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(gettingTheFeedBacks(fetchedFeedBacks));
      })
      .catch(error => error);
  };
}


export const clearTheData=()=>{
  return {
    type:actionTypes.CLEAR_THE_DATA
  } 
}