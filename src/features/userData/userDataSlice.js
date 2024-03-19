import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "userData",
  // se eu deixasse um array vazio, como eu definiria quais campos tem no objeto Matheus??
  initialState: [
    {
      name: "Example",
      email: "Example@mail.com",
      number: 33988112233,
      password: "password",
    },
  ],
  reducers: {
    create: (state, action) => {
      const payload = action.payload;
      const newUser = {
        name: payload.name,
        email: payload.email,
        number: payload.number,
        password: payload.password,
      };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      const email = action.payload;
      console.log(email);
      const index = state.findIndex((user) => user.email === email);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    update: (state, action) => {
      const payload = action.payload;
      const index = state.findIndex((user) => user.email === payload.email);
      if (index !== -1) {
        state[index] = payload;
      }
    },
  },
});

export const { create, deleteUser, update } = counterSlice.actions;

export default counterSlice.reducer;
