import * as type from "./type";
const requestData = category => ({
  type: type.REQUEST_DATA,
  category
});
export const receiveData = (data, category) => ({
  type: type.RECEIVE_DATA,
  data,
  category
});
export const testData = (data, category) => ({
  type: type.TEST_DATA,
  data,
  category
});
