import {combineReducers} from "redux";
import home from "./home";


const _reducers = combineReducers({
  home
})

_reducers.prototype

function reducers(state: any, action: any) {
  return _reducers(state, action)
}

export default reducers
