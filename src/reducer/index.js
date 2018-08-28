import { combineReducers } from "redux";
import * as type from "../actions/type";

const handleData = (state = { isFetching: true, data: {} }, action) => {
  switch (action.type) {
    case type.REQUEST_DATA:
      return { ...state, isFetching: true };
    case type.RECEIVE_DATA:
      return { ...state, isFetching: false, data: action.data };
    default:
      return { ...state };
  }
};
const httpData = (state, action) => {
  console.log(
    `httpData -> type:${action.type} category:${action.category} data:${
      action.data
    }`
  );
  //console.log(`httpData ->${state}`)
  console.log(state);
  switch (action.type) {
    case type.RECEIVE_DATA:
    case type.REQUEST_DATA:
      //console.log(state)
      return {
        ...state,
        [action.category]: handleData(state[action.category], action)
      };
    default:
      return { ...state };
  }
};
const testData = (state, action) => {
  console.log(
    `testData -> type:${action.type} category:${action.category} data:${
      action.data
    }`
  );
  //console.log(`testData ->${state}`)
  console.log(state);
  switch (action.type) {
    case type.TEST_DATA:
      //console.log(state)
      return {
        ...state,
        [action.category]: { ...state, isFetching: false, data: action.data }
      };
    default:
      return { ...state };
  }
};
export default combineReducers({
  httpData,
  testData
});
