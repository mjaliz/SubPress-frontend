import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import userReducer from "./user";

export default combineReducers({
  user: userReducer,
  entities: entitiesReducer,
});
