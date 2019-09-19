import * as  actionTypes from "./ActionTypes"
import axios from "axios"

export const storeTheFeedBack=(event,feedback)=>{
  console.log(event)
  event.preventDefault();
  return dispatch => {
    axios
      .post("https://chat-page-da0db.firebaseio.com/feedBack.json",feedback)
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
export const fetchingTheDetails=()=>{
  return dispatch => {
    axios
      .get("https://chat-page-da0db.firebaseio.com/feedBack.json")
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