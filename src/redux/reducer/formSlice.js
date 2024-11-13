// src/store/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
    selectedOption: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;
