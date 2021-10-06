const allConfig = {
  softionAPI: "https://api-new.betbuq.com",
  softionLiveAPI: "wss://unified-live.betfire.com/live-feed",
  softionTracker: "https://s1.softion-live.eu/tracker2",
  esportLiveApi: "wss://esports.betfire.com/live-feed",
  betConstructWidget: true,
  routePrematch: "prematch",

  paymentHubAPI: "payment.betbuq.com",
  contentManagementAPI: "https://content.betbuq.com",
  skinName: "Betbuq",
  skin: {
    id: 3,
    name: "Betbuq",
    currency: "EUR",
    defaultCountry: "ES",
    "currency-symbol": "€",
  },

  descriptionBox: "Insert the events name on at least one team in the form below",
  getSlider: true,
  slider: {
    slider1: {
      title: "WELCOME BONUS SPORT",
      subtitle: "10 euros immediately + 50% bonus up to 250 EURO",
      image_url: "/storage/slider/16093421317398.jpeg",
      btn_text: "JOIN",
      btn_url: "https://betbuq.com/pages/promos/general/welcome-bonus",
      btn_target: "_self",
      order: 2,
      type: "center",
      active: "yes",
    },

    slider2: {
      title: "Cashout",
      subtitle: "Cashout your bets anytime",
      image_url: "/storage/slider/16234141092628.jpeg",
      btn_text: "JOIN",
      btn_url: "https://www.betbuq.com/prematch",
      btn_target: "_self",
      order: 3,
      type: "center",
      active: "yes",
    },
  },

  login: {
    Name: {
      icon: "fas fa-user",
      placeholderEN: "Username",
      placeholderIT: "Cognome",
    },
    Password: {
      icon: "fas fa-key",
      placeholderIT: "Pasword",
      placeholderEN: "Password",
    },
  },
  linkSlots: {
    link1: {
      name: "SportBook",
      title: "Come and make your bet",
      icon: "fas fa-futbol",
      link: "/",
    },
    link2: {
      name: "Livechat",
      title: "Chat with us",
      icon: "fab fa-rocketchat",
      link: "/",
    },
    link3: {
      name: "Bet Now",
      title: "Place your bet",
      icon: "fas fa-stopwatch",
      link: "/",
    },
  },
  routes: {
    Prematch: {
      name: "Sport",
      link: "/prematch",
      path: "/prematch/:path1?/:eventSlug?",
      tag: "New Style",
      target: "_self",
    },
    Live: {
      name: "Livebetting",
      link: "/live",
      path: "/live/:path1?/:eventid?",
      tag: "New",
      target: "_self",
    },
    // Esports: {
    //   name: 'Esports', link: '/esports', path: "/esports", tag: "", target: '_self'
    // },
    Casino: {
      name: "Casino",
      link: "/casino",
      path: "/casino/:path1?/:path2?",
      tag: "Bonus",
      target: "_self",
    },
    LiveCasino: {
      name: "Live Casino",
      link: "/live-casino",
      path: "/live-casino/:path1?/:path2?",
      tag: "",
      target: "_self",
    },
    Contents: {
      name: "Bonus",
      link: "/pages/promos/General",
      path: "/pages/:path1?/:path2?/:path3?/:path4?",
      tag: "",
      target: "_self",
    },
    /*  Contact: {
             name: "contact",
             link: "/contact",
             path: "/contact/",
             tag: "",
             target: "_self"
         } */
  },
  casino: {
    "slot-view": true,
  },
  "skin-view-on-prematch-disabled": false,
  mobileV2: false,
  "show-odds-type-settings": true,
  checkTicketMob: true,
  recallTicketMob: true,
  userPaymentsPage: {
    "show-deposit": true,
    "show-withdraw": "user-only",
    "show-deposit-voucher": false,
    "show-withdraw-voucher": false,
  },
  userPaymentsHistoryPage: {
    "show-voucher-history": false,
  },
  allowNonBlockingPending: false,

  socials: [
    { social: "facebook", url: "https://www.facebook.com/betbuq/" },
    {
      social: "instagram",
      url: "https://www.instagram.com/betbuqofficial/",
    },
    //{social:'twitter', url:''},
    //{social:'youtube', url:''}
  ],
  languages: {
    en: true,
    es: true,
    it: true,
    pt: true,
    he: true,
    fr: true,
  },

  NavigationWrapper: [
    {
      text: "Sport Home",
      link: "/prematch",
    },
    {
      text: "Daily Events",
      link: `prematch/${null}`,
    },
    {
      text: "All Events",
      link: "/prematch/All",
    },
    {
      text: "In-Play Calendar",
      link: "/live/calendar",
    },
  ],

  paths: {},
  //useSoftionWirecard: 'https://betbuq.com',
  defaults: {
    prematchExist: true,
    // open games in new tab by provider name
    "casino-new-tab": ["XPRESS", "KIRON"],
    "events-tab-desktop-version-on-mobile": true,
    "cashout-on-betslip": true,
    suffix: "+34",
    "show-save-if-is-logged": true,
    "voucher-max-deposit": 10000,
    "voucher-withdrawable-amount": 10000,
    "voucher-predefined-amounts": [100, 500, 1000, 5000, 10000],
    "voucher-hidden": "club-only",
    "live-bet-timer": 13,
    "enable-seamless-tracker": true,
    "show-ticket-fastbet": "club-only",
    "show-recall-ticket": true,
    "show-ticket-checker": "club-only",
    "hide-quickbet-helper": false,
    "allow-guest-ticket-save": true, //se true permette di Salvare i ticket anche da sloggati
    "hide-ticket-call-button": false, //se true togli la ricerca delle prenotate
    "display-crazy-hour-timer": true, //Mostra il timer del crazy hour
    "live-tracker-expanded": false, //true: campetto live si apre in modalità espansa
    "show-playlogiq-symbol-footer": false, //Se true mostra il logo playlogiq nel footer
    "show-licenseDescription-footer": false, //If is true, show license description on footer
    "show-ticket-save-button": "club-only", //se true mostra bottone Salva sul ticket
    "live-page-version": "menu-top",
    "live-page-version-markets-view-row": false,
    "enable-softion-tracker": false,
    "enable-softion-streaming": "only-logged",
    "ticket-default-import-values": [10, 15, 20, 25, 30, 50, 100, 200],
    "live-page-select-market-filter": {
      1: ["1X2", "Total"],
      2: ["Handicap"],
      5: ["Winner", "Total Games"],
    },
    "live-tournaments-order": [
      "England - Premier League",
      "England - Championship",
      "England - Fa Cup",
      "Italy - Serie A",
      "Italy - Serie B",
      "Italy - Coppa Italia",
      "Spain - La Liga",
      "Spain - Segunda Division",
      "Spain - Copa del Rey",
      "Germany - Bundesliga",
      "Germany - 2. Bundesliga",
      "Germany - DFB-Pokal",
      "France - Ligue 1",
      "France - Ligue 2",
      "France - Coupe de France",
      "Netherlands - Eredivisie",
      "Netherlands - Eerste Divisie",
      "Belgium - First Division A",
      "Europe - ",
      "World - ",
    ],
  },
};

export default allConfig;
