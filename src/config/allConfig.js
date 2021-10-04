const allConfig = {
  softionAPI: "https://api-new.betbuq.com",
  softionLiveAPI: "wss://unified-live.betfire.com/live-feed",
  softionTracker: "https://s1.softion-live.eu/tracker2",
  esportLiveApi: "wss://esports.betfire.com/live-feed",
  betConstructWidget: true,

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

  paths: {},
  //useSoftionWirecard: 'https://betbuq.com',
  defaults: {
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
    "betfire-esports-live-preferred-markets": {
      1: [
        {
          path: "2932945919.0" /*3078366771*/,
          name: "1",
        },
        {
          path: "2932945919.1",
          name: "X",
        },
        {
          path: "2932945919.2",
          name: "2",
        },
      ],
      2: [
        {
          path: "1648255980.0",
          name: "1",
        },
        {
          path: "1648255980.1",
          name: "X",
        },
        {
          path: "1648255980.2",
          name: "2",
        },
      ],
      3: [
        {
          path: "1599062285.0",
          name: "1",
        },
        {
          path: "1599062285.1",
          name: "2",
        },
      ],
      4: [
        {
          path: "2932945919.0",
          name: "1",
        },
        {
          path: "2932945919.1",
          name: "2",
        },
      ],
      5: [
        {
          path: "193356058.0",
          name: "1",
        },
        {
          path: "193356058.1",
          name: "2",
        },
      ],
      6: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      8: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      11: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
    },
    "live-page-display-markets": {
      1: [
        //soccer
        {
          nameToDisp: "1x2",
          nameToCheck: "Match Result",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
        {
          nameToDisp: "Next Goal",
          nameToCheck: "Next Goal",
        },
      ],
      2: [
        //basketball
        {
          nameToDisp: "Handicap",
          nameToCheck: "Handicap",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
        {
          nameToDisp: "Draw No bet",
          nameToCheck: "Draw No bet",
        },
      ],
      4: [
        //Ice hockey
        {
          nameToDisp: "1x2",
          nameToCheck: "Match Result",
        },
        {
          nameToDisp: "Handicap",
          nameToCheck: "Handicap",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
      ],
      5: [
        //Teniss
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "Total Games",
          nameToCheck: "Total Games",
        },
        {
          nameToDisp: "Handicap",
          nameToCheck: "Handicap",
        },
      ],
      20: [
        //TABLE Teniss
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "Point handicap",
          nameToCheck: "Point handicap",
        },
        {
          nameToDisp: "Total points",
          nameToCheck: "Total points",
        },
      ],
      23: [
        //Volleyball
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "Point handicap",
          nameToCheck: "Point handicap",
        },
        {
          nameToDisp: "Total points",
          nameToCheck: "Total points",
        },
      ],
      31: [
        //Badminton
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "Point handicap",
          nameToCheck: "Point handicap",
        },
        {
          nameToDisp: "Total point",
          nameToCheck: "Total point",
        },
      ],
      21: [
        //Cricket
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "FIRST INNING TOTAL",
          nameToCheck: "FIRST INNING TOTAL",
        },
        {
          nameToDisp: "Total point",
          nameToCheck: "Total point",
        },
      ],
      29: [
        //Futsal
        {
          nameToDisp: "1X2",
          nameToCheck: "Match Result",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
        {
          nameToDisp: "Total point",
          nameToCheck: "Total point",
        },
      ],
      6: [
        //Handball
        {
          nameToDisp: "1x2",
          nameToCheck: "Match Result",
        },
        {
          nameToDisp: "Handicap",
          nameToCheck: "Handicap",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
      ],
      111: [
        //Handball
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "Handicap",
          nameToCheck: "Handicap",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
      ],
      109: [
        //Handball
        {
          nameToDisp: "Winner",
          nameToCheck: "Winner",
        },
        {
          nameToDisp: "Handicap",
          nameToCheck: "Handicap",
        },
        {
          nameToDisp: "Total",
          nameToCheck: "Total",
        },
      ],
    },
    "live-preferred-markets-betconstruct": {
      1: [
        { path: "14.1", name: "1" },
        { path: "14.2", name: "X" },
        { path: "14.3", name: "2" },
      ],
      2: [
        { path: "34.1", name: "1" },
        { path: "34.2", name: "2" },
      ],
      6: [
        { path: "180.1", name: "1" },
        { path: "180.2", name: "2" },
      ],
      7: [
        { path: "5.1", name: "1" },
        { path: "5.2", name: "2" },
      ],
      8: [
        { path: "99.1", name: "1" },
        { path: "99.2", name: "X" },
        { path: "99.3", name: "2" },
      ],
      9: [
        { path: "39.1", name: "1" },
        { path: "39.2", name: "2" },
      ],
      10: [
        { path: "7.1", name: "1" },
        { path: "7.2", name: "2" },
      ],
      11: [
        { path: "86.1", name: "1" },
        { path: "86.2", name: "X" },
        { path: "86.3", name: "2" },
      ],
      12: [
        { path: "36.1", name: "1" },
        { path: "36.2", name: "2" },
      ],
      13: [
        { path: "13.1", name: "1" },
        { path: "13.2", name: "2" },
        { path: "13.3", name: "X" },
      ],
      14: [
        { path: "96.1", name: "1" },
        { path: "96.2", name: "2" },
      ],
      15: [
        { path: "82.1", name: "1" },
        { path: "82.2", name: "X" },
        { path: "82.3", name: "2" },
      ],
      17: [
        { path: "171.1", name: "1" },
        { path: "171.2", name: "2" },
      ],
      18: [
        { path: "5981.1", name: "1" },
        { path: "5981.2", name: "X" },
        { path: "5981.3", name: "2" },
      ],
      19: [
        { path: "1569.1", name: "1" },
        { path: "1569.2", name: "2" },
      ],
      21: [
        { path: "1548.1", name: "1" },
        { path: "1548.2", name: "2" },
      ],
      22: [
        { path: "179.1", name: "1" },
        { path: "179.2", name: "2" },
      ],
      23: [
        { path: "4718.1", name: "1" },
        { path: "4718.2", name: "2" },
      ],
      25: [
        { path: "161.1", name: "1" },
        { path: "161.2", name: "2" },
      ],
      26: [
        { path: "4.1", name: "1" },
        { path: "4.2", name: "2" },
      ],
      27: [
        { path: "234.1", name: "1" },
        { path: "234.2", name: "2" },
      ],
      29: [
        { path: "192.1", name: "1" },
        { path: "192.2", name: "X" },
        { path: "192.3", name: "2" },
      ],
      30: [
        { path: "716.1", name: "1" },
        { path: "716.2", name: "2" },
      ],
      31: [
        { path: "725.1", name: "1" },
        { path: "725.2", name: "2" },
      ],
      32: [
        { path: "105.1", name: "1" },
        { path: "105.2", name: "X" },
        { path: "105.3", name: "2" },
      ],
      34: [
        { path: "97.1", name: "1" },
        { path: "97.2", name: "2" },
      ],
      35: [
        { path: "35.1", name: "1" },
        { path: "35.2", name: "2" },
      ],
      36: [
        { path: "193.1", name: "1" },
        { path: "193.2", name: "X" },
        { path: "193.3", name: "2" },
      ],
      37: [
        { path: "95.1", name: "1" },
        { path: "95.2", name: "X" },
        { path: "95.3", name: "2" },
      ],
      38: [
        { path: "1550.1", name: "Team 1" },
        { path: "1550.2", name: "X" },
        { path: "1550.3", name: "Team 2" },
      ],
      39: [
        { path: "848.1", name: "Team 1" },
        { path: "848.2", name: "Team 2" },
      ],
      40: [
        { path: "781.1", name: "Team 1" },
        { path: "781.2", name: "X" },
        { path: "781.3", name: "Team 2" },
      ],
      42: [
        { path: "8452.1", name: "1" },
        { path: "8452.2", name: "2" },
      ],
      43: [
        { path: "7429.1", name: "1" },
        { path: "7429.2", name: "X" },
        { path: "7429.3", name: "2" },
      ],
      44: [
        { path: "196.1", name: "1" },
        { path: "196.2", name: "2" },
      ],
      45: [
        { path: "724.1", name: "1" },
        { path: "724.2", name: "X" },
        { path: "724.3", name: "2" },
      ],
      46: [
        { path: "90.1", name: "1" },
        { path: "90.2", name: "X" },
        { path: "90.3", name: "2" },
      ],
      47: [
        { path: "52.1", name: "1" },
        { path: "52.2", name: "2" },
      ],
      48: [
        { path: "92.1", name: "1" },
        { path: "92.2", name: "2" },
        { path: "92.3", name: "X" },
      ],
      49: [
        { path: "191.1", name: "1" },
        { path: "191.2", name: "X" },
        { path: "191.3", name: "2" },
      ],
      50: [
        { path: "603.1", name: "1" },
        { path: "603.2", name: "2" },
      ],
      52: [
        { path: "4326.1", name: "1" },
        { path: "4326.2", name: "2" },
      ],
      53: [
        { path: "195.1", name: "1" },
        { path: "195.2", name: "2" },
      ],
      58: [
        { path: "6678.1", name: "1" },
        { path: "6678.2", name: "2" },
      ],
      62: [
        { path: "12249.1", name: "1" },
        { path: "12249.2", name: "X" },
        { path: "12249.3", name: "2" },
      ],
      63: [
        { path: "4636.1", name: "1" },
        { path: "4636.2", name: "X" },
        { path: "4636.3", name: "2" },
      ],
      68: [
        { path: "5977.1", name: "1" },
        { path: "5977.2", name: "2" },
      ],
      70: [
        { path: "6439.1", name: "1" },
        { path: "6439.2", name: "2" },
      ],
      77: [
        { path: "14495.1", name: "1" },
        { path: "14495.2", name: "2" },
      ],
      80: [
        { path: "8926.1", name: "1" },
        { path: "8926.2", name: "2" },
      ],
      81: [
        { path: "8946.1", name: "1" },
        { path: "8946.2", name: "2" },
      ],
      83: [
        { path: "16696.1", name: "1" },
        { path: "16696.2", name: "2" },
      ],
      84: [
        { path: "16737.1", name: "1" },
        { path: "16737.2", name: "2" },
      ],
      85: [
        { path: "16759.1", name: "1" },
        { path: "16759.2", name: "2" },
      ],
      98: [
        { path: "13928.1", name: "1" },
        { path: "13928.2", name: "2" },
        { path: "13928.3", name: "X" },
      ],
      105: [
        { path: "14520.1", name: "1" },
        { path: "14520.2", name: "X" },
        { path: "14520.3", name: "2" },
      ],
    },
    "live-preferred-markets-sportRadar": {
      1: [
        {
          path: "177556.0" /*3078366771*/,
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      2: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      4: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      5: [
        {
          path: "193356058.0",
          name: "1",
        },
        {
          path: "193356058.1",
          name: "2",
        },
      ],
      6: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      8: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
      11: [
        {
          path: "177556.0",
          name: "1",
        },
        {
          path: "177556.1",
          name: "X",
        },
        {
          path: "177556.2",
          name: "2",
        },
      ],
    },
  },
};

export default allConfig;
