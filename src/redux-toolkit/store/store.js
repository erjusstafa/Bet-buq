import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allConfig from "../../config/allConfig";

export const thunkApiHome = createAsyncThunk(
  "betBuq/thunkApiHome",
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
  "betBuq/LiveCasinoApi",
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
  userLog: false,
};

const act = createSlice({
  name: "betBuq",
  initialState,
  reducers: {
    allGames: (state, action) => {
      const sortArr = Object.values(
        state.LiveCasino["result"].providers?.slots || {}
      ).sort((a, b) => {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        console.log("nameA", nameA);

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });

      return sortArr;
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

export const { allGames } = act.actions;
export default act.reducer;
