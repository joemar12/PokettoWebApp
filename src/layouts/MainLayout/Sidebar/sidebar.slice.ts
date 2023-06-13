import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../store";

interface SidebarState {
  isOpen: boolean;
}

const initialState = {
  isOpen: true,
} as SidebarState;

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
