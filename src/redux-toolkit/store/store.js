import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allConfig from "../../config/allConfig";

export const thunkApiHome = createAsyncThunk(
  "bet-buq/thunkApiHome",
  async () => {
    let prapashtes = {
      home: "get_sliders",
      /*       liveCasino: `/get_slots/${allConfig.skinName}/casino_live/ios?lang=en`,
       */
    };

    return fetch(`${allConfig.contentManagementAPI}/${prapashtes.home}/`)
      .then((res) => res.json())
      .catch((err) => console.log("has error bro"));
  }
);

/* export const fullApiHome = createAsyncThunk("bet-buq/thunk", async () => {
  return fetch(" https://api-new.betbuq.com/prematch/main?json&l=pt/")
    .then((res) => res.json())
    .catch((err) => console.log("has error bro allApi"));
}); */

export const LiveCasinoApi = createAsyncThunk(
  "bet-buq/LiveCasinoApi",
  async () => {
    let casinoLive = {
      casino: `get_slots/${allConfig.skinName}/casino_live/ios?lang=en`,
    };

    return fetch(`${allConfig.contentManagementAPI}/${casinoLive.casino}`)
      .then((res) => res.json())
      .catch((err) => console.log("has error bro"));
  }
);

let initialState = {
  bet: { allConfig },
  sliderApiHome: [],
  LiveCasino: [],
};

const act = createSlice({
  name: "bet-buq",
  initialState,
  reducers: {},

  extraReducers: {
    [thunkApiHome.fulfilled]: (state, { payload }) => {
      state.sliderApiHome = payload;
      state.status = "success";
    },

    [LiveCasinoApi.fulfilled]: (state, { payload }) => {
      state.LiveCasino = payload;
      state.status = "success";
    },
  },
});

export default act.reducer;

/* -------------------------------------------------------------------------------------------- */
/* 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allConfig from "../../config/allConfig";

export const thunkApiHome = createAsyncThunk(
  "bet-buq/thunkApiHome",
  async (dt) => {
    return fetch(`${allConfig.contentManagementAPI}/${dt}`)
      .then((res) => res.json())
      .catch((err) => console.log("has err"));
  }
);

let initialState = {
  bet: { allConfig },
  sliderApiHome: [],
  LiveCasino: [],
};

const act = createSlice({
  name: "bet-buq",
  initialState,
  reducers: {},

  extraReducers: {
    [thunkApiHome.fulfilled]: (state, action) => {
      state.sliderApiHome = action.payload;
      state.LiveCasino = action.payload;

     
    },
  },
});

export default act.reducer;
 */
