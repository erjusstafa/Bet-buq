import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import allConfig from "../../config/allConfig";
//thunkApiHome
export const thunkApiHome = createAsyncThunk("betBuq/thunkApiHome", async () => {
  let prapashtes = {
    home: "get_sliders",
    /*       liveCasino: `/get_slots/${allConfig.skinName}/casino_live/ios?lang=en`,
     */
  };
  return fetch(`${allConfig.contentManagementAPI}/${prapashtes.home}/`)
    .then((res) => res.json())
    .catch((err) => console.log(" error bro"));
});

//CasinoApi
export const CasinoApi = createAsyncThunk("betBuq/CasinoApi", async () => {
  return fetch("https://stagingbackoffice.playlogiq.com/Betbuq/get_slots/casino/ios?lang=en")
    .then((res) => res.json())
    .catch((err) => console.log(" error bro"));
});

//LiveCasinoApi
export const LiveCasinoApi = createAsyncThunk("betBuq/LiveCasinoApi", async () => {
  let casinoLive = {
    casino: `get_slots/${allConfig.skinName}/casino_live/ios?lang=en`,
  };
  return fetch(`${allConfig.contentManagementAPI}/${casinoLive.casino}`)
    .then((res) => res.json())
    .catch((err) => console.log(" error bro"));
});

//PrematchApi
export const PrematchApi = createAsyncThunk("betbuq/PrematchApi", async () => {
  let prematchP = {
    link: "main?json&l=en",
  };
  return fetch(`https://api-new.betbuq.com/prematch/${prematchP["link"]}`)
    .then((res) => res.json())
    .catch((err) => console.log("has error bro"));
});

let initialState = {
  bet: { allConfig },
  sliderApiHome: [],
  CasinoData: [],
  CategProvidCasinoModal: localStorage.getItem("CasinoModal") ? JSON.parse(localStorage.getItem("CasinoModal")) : [],
  CasinoModal: localStorage.getItem("cas") ? JSON.parse(localStorage.getItem("cas")) : [],
  CasinoFav: localStorage.getItem("casFav") ? JSON.parse(localStorage.getItem("casFav")) : [],
  LiveCasino: [],
  Favorites: localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : [],
  CategOrProvider: localStorage.getItem("catPro") ? JSON.parse(localStorage.getItem("catPro")) : [],
  userLog: false,
  PrematchData: [],
};

const act = createSlice({
  name: "betBuq",
  initialState,
  reducers: {
    //LIVE CASINO
    addFavorites: (state, action) => {
      const ekzistoIndex = state.Favorites.findIndex((item) => item.id === action.payload.id);

      if (ekzistoIndex >= 0) {
        /*         state.Favorites[ekzistoIndex] = { ...state.Favorites[ekzistoIndex] };
         */

        let Fav = action.Favorites.filter((F) => F.id !== action.payload.id);
        action.Favorites = Fav;
        localStorage.setItem("fav", JSON.stringify(state.Favorites));
      } else {
        state.Favorites = [
          ...state.Favorites,
          {
            id: action.payload.id,
            desktop_logo: action.payload.desktop_logo,
            name: action.payload.name,
          },
        ];
        localStorage.setItem("fav", JSON.stringify(state.Favorites));
      }
    },

    delFavorites: (state, action) => {
      const newList = state.Favorites.filter((I) => I.id !== action.payload.id);
      state.Favorites = newList;
      localStorage.setItem("fav", JSON.stringify(state.Favorites));
    },

    addCategProvid: (state, action) => {
      const ekzistoCatProv = state.CategOrProvider.findIndex((I) => I.id === action.payload.id);

      if (ekzistoCatProv >= 0) {
        /*  state.CategOrProvider[ekzistoCatProv] = {
          ...state.CategOrProvider[ekzistoCatProv],
        }; */

        let myCatProv = state.CategOrProvider.filter((R) => R.id !== action.payload.id);
        state.CategOrProvider = myCatProv;
        localStorage.setItem("catPro", JSON.stringify(state.CategOrProvider));
      } else {
        state.CategOrProvider = [
          ...state.CategOrProvider,
          {
            id: action.payload.id,
            name: action.payload.name,
          },
        ];

        localStorage.setItem("catPro", JSON.stringify(state.CategOrProvider));
      }
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

    sortItemCateg: (state, { payload }) => {
      Object.values(state?.CasinoData?.result?.providers || {}).map((H, index) =>
        Object.values(H.slots || {}).sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
      );
    },

    //CASINO
    addFavouriteCasino: (state, action) => {
      const ekzistoIndex = state.CasinoFav.findIndex((item) => item.id === action.payload.id);
      if (ekzistoIndex >= 0) {
        const nextCasinoFav = state.CasinoFav.filter((item) => item.id !== action.payload.id);
        state.CasinoFav = nextCasinoFav;
      } else {
        state.CasinoFav = [
          ...state.CasinoFav,
          {
            id: action.payload.id,
            desktop_logo: action.payload.desktop_logo,
            name: action.payload.name,
          },
        ];
      }
      localStorage.setItem("casFav", JSON.stringify(state.CasinoFav));
    },

    delFavouriteCasino: (state, action) => {
      const newCasinoFav = state.CasinoFav.filter((I) => I.id !== action.payload.id);
      state.CasinoFav = newCasinoFav;
      localStorage.setItem("casFav", JSON.stringify(state.CasinoFav));
    },

    addFavouriteCasinoModal: (state, action) => {
      const ekzistoIndexCasinoModal = state.CasinoModal.findIndex((item) => item.id === action.payload.id);

      if (ekzistoIndexCasinoModal >= 0) {
        const nextCasinoFav = state.CasinoModal.filter((item) => item.id !== action.payload.id);
        state.CasinoModal = nextCasinoFav;
      } else {
        state.CasinoModal = [
          ...state.CasinoModal,
          {
            id: action.payload.id,
            desktop_logo: action.payload.desktop_logo,
            name: action.payload.name,
          },
        ];
      }
      localStorage.setItem("cas", JSON.stringify(state.CasinoModal));
    },

    delFavoritesCasinoModal: (state, action) => {
      const newList = state.CasinoModal.filter((I) => I.id !== action.payload.id);
      state.CasinoModal = newList;
      localStorage.setItem("cas", JSON.stringify(state.CasinoModal));
    },

    addCategProvidCasinoModal: (state, action) => {
      const findItem = state.CategProvidCasinoModal.findIndex((T) => T.id === action.payload.id);

      if (findItem >= 0) {
        let filterAdded = state.CategProvidCasinoModal.filter((G) => G.id !== action.payload.id);
        state.CategProvidCasinoModal = filterAdded;

        localStorage.setItem("CasinoModal", JSON.stringify(state.CategProvidCasinoModal));
      } else {
        state.CategProvidCasinoModal = [
          ...state.CategProvidCasinoModal,
          {
            id: action.payload.id,
            name: action.payload.name,
            desktop_logo: action.payload.desktop_logo,
          },
        ];
      }

      localStorage.setItem("CasinoModal", JSON.stringify(state.CategProvidCasinoModal));
    },

    delCategProvidCasino: (state, action) => {
      const newListCategOrProv = state.CategProvidCasinoModal.filter((I) => I.id !== action.payload.id);
      state.CategProvidCasinoModal = newListCategOrProv;

      localStorage.setItem("CasinoModal", JSON.stringify(state.CategOrProvider));
    },

    delAllProvidrCategCasino: (state, action) => {
      state.CategProvidCasinoModal = [];
      localStorage.setItem("CasinoModal", JSON.stringify(state.CategProvidCasinoModal));
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

    [PrematchApi.fulfilled]: (state, { payload }) => {
      state.PrematchData = payload;
      state.status = "success";
    },

    [CasinoApi.fulfilled]: (state, { payload }) => {
      state.CasinoData = payload;
      state.status = "success";
    },
  },
});

export const {
  addFavorites,
  delFavorites,
  addCategProvid,
  delCategProvid,
  delAllProvidrCateg,
  sortItemCateg,
  addFavouriteCasino,
  delFavouriteCasino,
  addFavouriteCasinoModal,
  delFavoritesCasinoModal,
  addCategProvidCasinoModal,
  delCategProvidCasino,
  delAllProvidrCategCasino,
} = act.actions;
export default act.reducer;