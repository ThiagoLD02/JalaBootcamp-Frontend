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
  },
});

export const { create } = counterSlice.actions;

export default counterSlice.reducer;
