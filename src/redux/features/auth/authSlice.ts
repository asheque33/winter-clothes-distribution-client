import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
interface UserObject {
  name: string;
  email: string;
  role: string;
  iat?: string;
  exp?: string;
}
type TAuthState = {
  user: null | UserObject;
  token: null | string;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectedUser = (state: RootState) => state.auth.user;
export const selectedToken = (state: RootState) => state.auth.token;
