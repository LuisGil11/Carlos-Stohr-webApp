import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false, tipoDeConcurso: "alAireLibre" };

export const concursoSlice = createSlice({
  name: "concursoSlice",
  initialState,
  reducers: {
    onSetTipoDeConcurso: (state, { payload }) => {
      state.tipoDeConcurso = payload;
    },
  },
});

export const { onSetTipoDeConcurso } = concursoSlice.actions;
