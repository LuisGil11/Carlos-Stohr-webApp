import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGanadoresFormOpen: false,
  tipoDeConcurso: "alAireLibre",
  concursos: [],
};

// concursos: [
//   {
//     edicion: "",
//     ganadores: [{ posicion: "", nombre: "" }],
//   },
// ];

export const concursoSlice = createSlice({
  name: "concursoSlice",
  initialState,
  reducers: {
    onSetTipoDeConcurso: (state, { payload }) => {
      state.tipoDeConcurso = payload;
    },

    addNewGanador: (state, { payload }) => {},

    onOpenGanadoresForm: (state) => {
      state.isGanadoresFormOpen = true;
    },
    onCloseGanadoresForm: (state) => {
      state.isGanadoresFormOpen = false;
    },
  },
});

export const {
  onSetTipoDeConcurso,
  onOpenGanadoresForm,
  onCloseGanadoresForm,
} = concursoSlice.actions;
