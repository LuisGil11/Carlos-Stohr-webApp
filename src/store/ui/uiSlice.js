import { createSlice } from "@reduxjs/toolkit";

const initialState = { isModalOpen: false, tipoDeConcurso: "alAireLibre" };

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isModalOpen = true;
    },
    onCloseModal: (state) => {
      state.isModalOpen = false;
    },
    onSetTipoDeConcurso: (state, { payload }) => {
      state.tipoDeConcurso = payload;
    },
  },
});

export const { onOpenModal, onCloseModal, onSetTipoDeConcurso } =
  uiSlice.actions;
