import homeSlice from "./homeSlice.js"
import { configureStore } from '@reduxjs/toolkit'



export const store = configureStore({
    reducer: {
      home: homeSlice,
    },
  })