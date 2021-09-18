import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allConfig from "../../config/allConfig";

export const thunkApiHome = createAsyncThunk("bet-buq/thunk", async () => {
  return fetch(" https://content.betbuq.com/get_sliders/")
    .then((res) => res.json())
    .catch((err) => console.log("has error bro"));
});

export const fullApiHome = createAsyncThunk("bet-buq/thunk", async () => {
  return fetch(" https://api-new.betbuq.com/prematch/main?json&l=pt/")
    .then((res) => res.json())
    .catch((err) => console.log("has error bro allApi"));
});

let initialState = {
  bet: { allConfig },
  myApi: [],
  allApi: [],
};
const act = createSlice({
  name: "bet-buq",
  initialState,
  reducers: {},

  extraReducers: {
    [thunkApiHome.pending]: (state, { payload }) => {
      state.status = "load";
    },

    [thunkApiHome.fulfilled]: (state, { payload }) => {
      state.myApi = payload;
      state.status = "success";
    },
    [thunkApiHome.rejected]: (state, { payload }) => {
      state.status = "failed";
    },
  },
});

export default act.reducer;
