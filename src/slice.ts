import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spanish: false,
};

//==============action=================
export const changeLenguaje = (): any => {
  return (dispatch: any) => {
    dispatch(setLenguaje());
  };
};
//==========reducer================
export const lenguaje = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLenguaje: (state) => {
      state.spanish = !state.spanish;
    },
  },
});

export default lenguaje.reducer;
export const { setLenguaje } = lenguaje.actions;
