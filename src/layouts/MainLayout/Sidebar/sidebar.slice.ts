import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../store";
import { loadState } from "../../../utils/localStorage";

interface SidebarState {
  isOpen: boolean;
}

const stateFromLocalStorage = loadState() as RootState

let initialState = {
  isOpen: true,
} as SidebarState;

if(stateFromLocalStorage && stateFromLocalStorage.sidebar){
  initialState = {
    ...stateFromLocalStorage.sidebar
  }
}

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSideBar: (state) => {
      state.isOpen = false;
    }
  },
});

export const { toggleSidebar, openSidebar, closeSideBar } = sidebarSlice.actions;
export const selectSidebarIsOpen = (state: RootState) => state.sidebar.isOpen;
export default sidebarSlice.reducer;
