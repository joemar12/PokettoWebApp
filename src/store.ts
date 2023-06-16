import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import accountsReducer from "./features/Accounts/accounts.slice";
import sidebarReducer from "./layouts/MainLayout/Sidebar/sidebar.slice";
import { saveState } from "./utils/localStorage";

const rootReducer = combineReducers({
  accounts: accountsReducer,
  sidebar: sidebarReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  saveState({
    accounts: store.getState().accounts,
    sidebar: store.getState().sidebar,
  })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
