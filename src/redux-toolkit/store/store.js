import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allConfig from "../../config/allConfig";

export const thunkApiHome = createAsyncThunk("betBuq/thunkApiHome", async () => {
  let prapashtes = {
    home: "get_sliders",
    /*       liveCasino: `/get_slots/${allConfig.skinName}/casino_live/ios?lang=en`,
     */
  };

  return fetch(`${allConfig.contentManagementAPI}/${prapashtes.home}/`)
    .then((res) => res.json())
    .catch((err) => console.log("has error bro"));
});

export const LiveCasinoApi = createAsyncThunk("betBuq/LiveCasinoApi", async () => {
  let casinoLive = {
    casino: `get_slots/${allConfig.skinName}/casino_live/ios?lang=en`,
  };

  return fetch(`${allConfig.contentManagementAPI}/${casinoLive.casino}`)
    .then((res) => res.json())
    .catch((err) => console.log("has error bro"));
});

let initialState = {
  bet: { allConfig },
  sliderApiHome: [],
  LiveCasino: [],
  Favorites: localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : [],
  CategOrProvider: localStorage.getItem("catPro") ? JSON.parse(localStorage.getItem("catPro")) : [],
  userLog: false,
};

const act = createSlice({
  name: "betBuq",
  initialState,
  reducers: {
    filterGames: (state, action) => {
      /*   Object.values(state.LiveCasino?.result?.providers || {}).map((E) => {
        return Object.values(E.slots || {}).filter((Q) =>
          Q.name === "" ? Q : Q.name.toLowerCase().includes(action.payload.name.toLowerCase())
        );
      }); */
    },

    addFavorites: (state, action) => {
      const ekzistoIndex = state.Favorites.findIndex((item) => item.id === action.payload.id);

      if (ekzistoIndex >= 0) {
        state.Favorites[ekzistoIndex] = { ...state.Favorites[ekzistoIndex] };
      } else {
        state.Favorites = [
          ...state.Favorites,
          {
            id: action.payload.id,
            desktop_logo: action.payload.desktop_logo,
            name: action.payload.name,
          },
        ];
      }

      localStorage.setItem("fav", JSON.stringify(state.Favorites));
    },

    delFavorites: (state, action) => {
      const newList = state.Favorites.filter((I) => I.id !== action.payload.id);
      state.Favorites = newList;
      localStorage.setItem("fav", JSON.stringify(state.Favorites));
    },

    addCategProvid: (state, action) => {
      const ekzistoCatProv = state.CategOrProvider.findIndex((I) => I.id === action.payload.id);

      if (ekzistoCatProv >= 0) {
        state.CategOrProvider[ekzistoCatProv] = { ...state.CategOrProvider[ekzistoCatProv] };
      } else {
        state.CategOrProvider = [
          ...state.CategOrProvider,
          {
            id: action.payload.id,
            name: action.payload.name,
          },
        ];
      }

      localStorage.setItem("catPro", JSON.stringify(state.CategOrProvider));
    },

    delCategProvid: (state, action) => {
      const newListCategOrProv = state.CategOrProvider.filter((I) => I.id !== action.payload.id);
      state.CategOrProvider = newListCategOrProv;

      localStorage.setItem("catPro", JSON.stringify(state.CategOrProvider));
    },

    delAllProvidrCateg: (state, action) => {
      state.CategOrProvider = [];
      localStorage.setItem("catPro", JSON.stringify(state.Favorites));
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

export const { filterGames, addFavorites, delFavorites, addCategProvid, delCategProvid, delAllProvidrCateg } =
  act.actions;
export default act.reducer;
