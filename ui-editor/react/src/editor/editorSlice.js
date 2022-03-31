import { createSlice } from '@reduxjs/toolkit'

export const editorSlice = createSlice({
  name: 'jsx-editor',
  initialState: {
    core: null,
  },
  reducers: {},
})

export const { actions: editorActions, reducer: editorReducer } = editorSlice
