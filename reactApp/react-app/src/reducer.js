import {combineReducers} from "redux"
const count = (state=3,action)=>{
    switch (action.type){
        case 'SUB':
            return state-action.text;
        default:
            return state
    }
};
const reducer = combineReducers({
    count
});
export default reducer;