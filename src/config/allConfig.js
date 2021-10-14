const allConfig = {
  softionAPI: "https://api-new.betbuq.com",
  softionLiveAPI: "wss://unified-live.betfire.com/live-feed",
  softionTracker: "https://s1.softion-live.eu/tracker2",
  esportLiveApi: "wss://esports.betfire.com/live-feed",
  betConstructWidget: true,
  routePrematch: "prematch",
  count: [1261, 341, 83],
  paymentHubAPI: "payment.betbuq.com",
  contentManagementAPI: "https://content.betbuq.com",
  skinName: "Betbuq",
  sportBookApi: "https://apisport.playlogiq.com",

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
      tag: "New ",
      target: "_self",
      id: 1,
    },
    Live: {
      name: "Livebetting",
      link: "/live",
      path: "/live/:path1?/:eventid?",
      tag: "New",
      target: "_self",
      id: 2,
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
      tag: "New Style",
      target: "_self",
      id: 3,
    },
    Contents: {
      name: "Bonus",
      link: "/pages/promos/General",
      path: "/pages/:path1?/:path2?/:path3?/:path4?",
      tag: "Bonus",
      target: "_self",
      id: 4,
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

  iconSport: ["fas fa-basketball-ball"],
  dangerText: "Opss! Sorry , no results for this criteria",
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

  //modal search prewmtch
  info: {
    1019: {
      data_evento: "2021-10-28 17:44:00",
      desc_manifestazione: "FIFA Premier League",
      desc_palinsesto: "England",
      desc_sport: "E-Football",
      indice_ricerca: "1019",
      slug: "8-384-1295-17394165-1019",
      sport: "8",
      team_casa: "Liverpool (Jekos)",
      team_ospite: "Tottenham Hotspur (Luntik)",
    },

    1139: {
      data_evento: "2021-10-30 17:40:00",
      desc_manifestazione: "ITT CUP Group B",
      desc_palinsesto: "Armenia",
      desc_sport: "Table Tennis",
      indice_ricerca: "1139",
      slug: "9-306-1168-17276099-1139",
      sport: "9",
      team_casa: "Hovhannes Julhakyan",
      team_ospite: "Andranik Sahakyan",
    },
    1279: {
      data_evento: "2021-10-18 17:40:00",
      desc_manifestazione: "TT Cup",
      desc_palinsesto: "Ukraine",
      desc_sport: "Table Tennis",
      indice_ricerca: "1279",
      slug: "9-228-1023-17401960-1279",
      sport: "9",
      team_casa: "Mikhail Marchuk",
      team_ospite: "Maksim Naumchuk",
    },

    1420: {
      data_evento: "2021-10-24 17:45:00",
      desc_manifestazione: "Win Cup",
      desc_palinsesto: "World",
      desc_sport: "Table Tennis",
      indice_ricerca: "1420",
      slug: "9-284-1099-17428918-1420",
      sport: "9",
      team_casa: "Vadym Khorolsky",
      team_ospite: "Aleksandr Antonenko",
    },

    1426: {
      data_evento: "2021-10-19 17:36:00",
      desc_manifestazione: "Esoccer Battle",
      desc_palinsesto: "World",
      desc_sport: "Football",
      indice_ricerca: "1426",
      slug: "1-237-2277-17539034-1426",
      sport: "1",
      team_casa: "Inter Milan (Kaison)",
      team_ospite: "Manchester City (cenblz)",
    },

    1435: {
      data_evento: "2021-10-12 17:40:00",
      desc_manifestazione: "ITF Men - Ithaca - Hard (Doubles)",
      desc_palinsesto: "USA",
      desc_sport: "Tennis",
      indice_ricerca: "1435",
      slug: "7-337-6731-17437811-1435",
      sport: "7",
      team_casa: "Toby Kodat/Mark Whitehouse",
      team_ospite: "Charles Broom/Henry Patten",
    },
  },

  list: {
    1019: "Liverpool (Jekos) v Tottenham Hotspur (Luntik) | 08 Oct 2021, 17:44",
    1139: "Hovhannes Julhakyan v Andranik Sahakyan | 08 Oct 2021, 17:40",
    1279: "Mikhail Marchuk v Maksim Naumchuk | 08 Oct 2021, 17:40",
    1420: "Vadym Khorolsky v Aleksandr Antonenko | 08 Oct 2021, 17:45",
    1426: "Inter Milan (Kaison) v Manchester City (cenblz) | 08 Oct 2021, 17:36",
    1435: "Toby Kodat/Mark Whitehouse v Charles Broom/Henry Patten | 08 Oct 2021, 17:40",
    1451: "Chelsea (Liha) v Atletico Madrid (Nicolas_Rage) | 08 Oct 2021, 17:36",
    1672: "Belgium (Arta) v Netherlands (Hank) | 08 Oct 2021, 17:45",
    1983: "Valya Asoyan v Asya Poghosyan | 08 Oct 2021, 17:40",
    2009: "1 Italy v 2 Netherlands | 08 Oct 2021, 17:39",
    2080: "Arthur Goradze v Sergey Kovalenko | 08 Oct 2021, 17:45",
  },
};

export default allConfig;
