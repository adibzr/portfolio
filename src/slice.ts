import { createSlice } from "@reduxjs/toolkit";
import { info, projectsEn, projectsEs } from "./assets/projects/projects";

interface init {
  spanish: boolean;
  projects: info[];
}

const initialState: init = {
  spanish: false,
  projects: projectsEn,
};

//==============action=================
export const changeLenguaje = (): any => {
  return (dispatch: any) => {
    dispatch(setLenguaje());
  };
};
export const changeProjectLan = (): any => {
  return (dispatch: any) => {
    dispatch(setProjects());
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
    setProjects: (state) => {
      state.projects = state.spanish ? projectsEs : projectsEn;
    },
  },
});

export default lenguaje.reducer;
export const { setLenguaje, setProjects } = lenguaje.actions;
