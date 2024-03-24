import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  isGanadoresFormOpen: false,
  tipoDeConcurso: "fundastohr",
  infoConcurso: null,
  resultados: [],
  nuevosResultados: null,
  formState: {
    edicion: new Date().getFullYear(),
    tipoDeConcurso: "fundastohr",
    subCategoria: "",
    infantil: {
      primero: "",
      segundo: "",
      tercero: "",
      costumbrista: "",
      especial: "",
    },
    juvenil: {
      primero: "",
      segundo: "",
      tercero: "",
      costumbrista: "",
      especial: "",
    },
    adulto: {
      primero: "",
      segundo: "",
      tercero: "",
      costumbrista: "",
      especial: "",
    },
  },
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

    onOpenGanadoresForm: (state) => {
      state.isGanadoresFormOpen = true;
    },

    onCloseGanadoresForm: (state) => {
      state.isGanadoresFormOpen = false;
      state.formState = {
        edicion: new Date().getFullYear(),
        tipoDeConcurso: "fundastohr",
        subCategoria: "",
        infantil: {
          primero: "",
          segundo: "",
          tercero: "",
          costumbrista: "",
          especial: "",
        },
        juvenil: {
          primero: "",
          segundo: "",
          tercero: "",
          costumbrista: "",
          especial: "",
        },
        adulto: {
          primero: "",
          segundo: "",
          tercero: "",
          costumbrista: "",
          especial: "",
        },
      };
    },

    setNuevosResultados: (state, { payload }) => {
      state.nuevosResultados = payload;
    },

    addNuevosResultados: (state, { payload }) => {
      state.resultados.push(payload);
      state.resultados.sort((a, b) => a.edicion - b.edicion);
      state.isSaving = false;
    },

    setResultados: (state, action) => {
      state.resultados = action.payload;
    },

    setSaving: (state) => {
      state.isSaving = true;
    },
    resultadosUpdated: (state, { payload }) => {
      state.isSaving = false;
      state.resultados = state.resultados.map((resultado) => {
        if (resultado.edicion === payload.edicion) {
          return payload;
        }
        return resultado;
      });
    },
    onSetFormState: (state, { payload }) => {
      console.log(payload);
      state.formState = payload;
    },
  },
});

export const {
  onSetTipoDeConcurso,
  onOpenGanadoresForm,
  onCloseGanadoresForm,
  setNuevosResultados,
  addNuevosResultados,
  setSaving,
  resultadosUpdated,
  setResultados,
  onSetFormState,
} = concursoSlice.actions;
