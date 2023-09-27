import { createSlice } from "@reduxjs/toolkit";

const applyForm = createSlice({
  name: "applyform", 
  initialState: {
    name: "",
    email: "",
    contact: "",
    currentCompany: "",
    salary: "",
    skills: "",
  },
  reducers: {
    setForm: (state, action) => {
      return {
        ...state,
        ...action.payload, 
      };
    },
  },
});

export const { setForm } = applyForm.actions;
export default applyForm.reducer;
