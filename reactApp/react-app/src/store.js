import { createStore } from "redux"
import reducer from "./reducer";
const inintialState = {
    count:9,
};
const store = createStore(reducer,inintialState);
export default store;