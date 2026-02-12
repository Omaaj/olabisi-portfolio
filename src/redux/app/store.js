import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nationalityReducer from "../features/nationality/nationalitySlice";
import welcomeReducer from "../features/welcome/welcomeSlice";
import contactInboxReducer from "../features/contactInbox/contactInboxSlice";

const rootReducer = combineReducers({
  nationality: nationalityReducer,
  welcome: welcomeReducer,
  contactInbox: contactInboxReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
