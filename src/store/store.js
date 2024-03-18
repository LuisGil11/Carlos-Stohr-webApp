import { configureStore } from "@reduxjs/toolkit";
import { concursoSlice } from "./concursos/concursoSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    concurso: concursoSlice.reducer,
    ui: uiSlice.reducer,
  },
});
