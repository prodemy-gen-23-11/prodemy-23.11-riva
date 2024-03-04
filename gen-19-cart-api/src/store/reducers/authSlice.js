import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {
    id: "",
    email: "",
    name: "",
    role: "",
  },
  isAdmin: false
};

function getStoredAuthState() {
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  const isAdmin = localStorage.getItem("admin");


  if (token) {
    return {
      token,
      user: JSON.parse(userString),
      isAdmin: Boolean(isAdmin),
    };
  }

  return { ...initialState };
}

const authSlice = createSlice({
  name: "auth",
  initialState: getStoredAuthState(),
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
      localStorage.setItem("token", token);
    },
    setUser(state, action) {
      const { id, email, name, role } = action.payload;
      state.user.id = id;
      state.user.email = email;
      state.user.name = name;
      state.user.role = role;
      state.isAdmin = role === "admin";
      localStorage.setItem("user", JSON.stringify({ id, email, name, role}));
      localStorage.setItem("admin", String(state.isAdmin))
    },


    resetAuthData(state) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.token = "";
      state.user = initialState.user;
      state.isAdmin = false;
    },
    
  },
});

export const { setToken, setUser, resetAuthData } = authSlice.actions;
export default authSlice.reducer;
