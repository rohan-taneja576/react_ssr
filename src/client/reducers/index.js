import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import { usersReducer } from "./usersReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  users: usersReducer,
  auth: AuthReducer,
  admins: adminReducer,
});
