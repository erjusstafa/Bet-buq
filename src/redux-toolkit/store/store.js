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
  reducers: {
    sortData: (state, action) => {
      return alert("sdfed");
    },
  },

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

export const { sortData } = act.actions;
export default act.reducer;
