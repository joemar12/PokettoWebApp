import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Account } from "./types";
import { loadState } from "../../utils/localStorage";

interface AccountsState {
  userAccounts: Account[];
  isLoading: boolean;
  isSuccess: boolean;
  error: string;
}

const stateFromLocalStorage = loadState() as RootState;

let initialState = {
  userAccounts: [],
  isLoading: false,
  isSuccess: false,
  error: ""
} as AccountsState;

if (stateFromLocalStorage && stateFromLocalStorage.accounts) {
  initialState = {
    ...stateFromLocalStorage.accounts
  };
}

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    getUserAccountsFetch: (state) => {
      state.isLoading = true;
    },
    getUserAccountsSuccess: (state, action: PayloadAction<Array<Account>>) => {
      state.userAccounts = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    },
    getUserAccountsFailure: (state, action: PayloadAction<string>) => {
      state.isSuccess = false;
      state.error = action.payload;
    }
  }
});

export const {
  getUserAccountsFetch,
  getUserAccountsSuccess,
  getUserAccountsFailure
} = accountsSlice.actions;
export const selectUserAccounts = (state: RootState) =>
  state.accounts.userAccounts;
export default accountsSlice.reducer;
