import { combineReducers } from "redux";
import flashCardReducer from "./flashCard";
export default combineReducers({
  flashCards: flashCardReducer,
});
