import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSaving: false,
  isGanadoresFormOpen: false,
  tipoDeConcurso: "fundastohr",
  concursoTab: "fundastohr",
  subCategoria: "",
  infoConcurso: null,
  resultados: [],
  nuevosResultados: null,
  formState: {
    edicion: new Date().getFullYear(),
    id: null,
    tipoDeConcurso: "fundastohr",
    subCategoria: "",
    infantil: {
      primero: "",
      segundo: "",
      tercero: "",
      menciones: "",
    },
    juvenil: {
      primero: "",
      segundo: "",
      tercero: "",
      menciones: "",
    },
    adulto: {
      primero: "",
      segundo: "",
      tercero: "",
      menciones: "",
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
    onSetConcursoTab: (state, { payload }) => {
      state.concursoTab = payload;
    },

    onOpenGanadoresForm: (state) => {
      state.isGanadoresFormOpen = true;
    },

    onCloseGanadoresForm: (state) => {
      state.isGanadoresFormOpen = false;
      state.formState = {
        edicion: new Date().getFullYear(),
        id: null,
        tipoDeConcurso: "fundastohr",
        subCategoria: "",
        infantil: {
          primero: "",
          segundo: "",
          tercero: "",
          menciones: "",
        },
        juvenil: {
          primero: "",
          segundo: "",
          tercero: "",
          menciones: "",
        },
        adulto: {
          primero: "",
          segundo: "",
          tercero: "",
          menciones: "",
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

    resultadoDeleted: (state) => {
      state.resultados = state.resultados.filter(
        (resultado) => resultado.id !== state.nuevosResultados.id
      );
    },

    resultadosUpdated: (state, { payload }) => {
      state.isSaving = false;
      state.resultados = state.resultados.map((resultado) => {
        if (resultado.id === payload.id) {
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
  resultadoDeleted,
  resultadosUpdated,
  setResultados,
  onSetFormState,
  onSetConcursoTab,
} = concursoSlice.actions;
