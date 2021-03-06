import {combineReducers} from 'redux';

function currentCount(state=0, action){

  //the reducers decide if they care about the action dispatched
  if(action.type === "INCREASE_COUNTER"){
    return state +1;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state -1;
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    let newUsers= state.map((u)=>u);
    newUsers.push(action.value);
    return newUsers;
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(1);
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}
const rootReducer = combineReducers({
  currentCount, users, specialText
 });
 export default rootReducer;