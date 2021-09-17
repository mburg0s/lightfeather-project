import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const supervisorSlice = createSlice({
  name: "supervisor",
  initialState: {
    supervisor: [],
  },
  reducers: {
    setSupervisor: (state, action) => {
      state.supervisor = action.payload;
    },

  },
});

export const { setSupervisor } = supervisorSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getSupervisor = () => (dispatch) => {
  axios.get("/api/supervisors").then((resp) => {
    //  console.log(resp.data, "datung");
    dispatch(setSupervisor(resp.data));
  });
};

export const addForm = (p) => (dispatch) => {
  // console.log(p,'pop')
  axios.post("/api/submit",{p}).then((resp) => {
    console.log(resp, "submit");
  });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
export const selectSupervisor = (state) => state.supervisor.supervisor;
export default supervisorSlice.reducer;