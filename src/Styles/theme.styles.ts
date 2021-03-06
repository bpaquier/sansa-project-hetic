const theme = {
  color: {
    primary: {
      blue: `#55789B`,
      blueExtraLight: `#F0F7FF`,
      blueLight: `#E3EAF2`,
      blueDark: `#305677`,
      blueExtraDark: `#002D4B`,
      orange: `#E68430`,
      orangeLight: `#FFB678`,
      orangeDark: `#CF7D38`,
      paper: `#F7F3EA`,
      white: `#FBFBFB`,
      yellow: `#FFD200`
    },
    semantic: {
      success: `#D4EDDA`,
      successBorder: `#C3E6CB`,
      successText: `#155724`,
      info: `#CCE5FF`,
      infoBorder: `#B8DAFF`,
      infoText: `#0064B8`,
      warning: `#FFF3CD`,
      warningBorder: `#FFEEBA`,
      warningText: `#896404`,
      danger: `#F8D7DA`,
      dangerBorder: `#F5C6CB`,
      dangerText: `#9D1C24`
    },
    neutral: {
      black100: `#1F1F1F`,
      black60: `#545454`,
      black40: `#808080`,
      black20: `#AEAEAE`,
      black10: `#D6D6D6`,
      black5: `#E8E8E8`,
      white80: `#F8F8F8`,
      white60: `#F3F3F3`,
      white40: `#F1F1F1`,
      white20: `#EDEDED`
    },
    icon: {
      system: `#808080`,
      categories: {
        primary: `#808080`,
        secondary: `#282828`
      }
    },
    categories: {
      home: `#3B4E3C`,
      food: `#E09E9C`,
      health: `#99BC96`,
      medicine: `#527A9A`,
      hygiene: `#51A6B9`,
      advice: `#DE945C`,
      activities: `#D4494C`,
      technology: `#233454`
    },
    components: {
      backgroundApp: `#F4F4F4`
    }
  },
  sizes: {
    breakPoint: 750,
    mobilePageMarginBottom: 200,
    icon: {
      system: 24,
      categories: 16
    },
    bornContent: {
      topBarHeight: 100,
      tagsHeight: 50
    },
    navigation: {
      mobileHeight: 100
    }
  },
  boxShadow: {
    panel: `0px 1px 4px rgba(0, 0, 0, 0.15)`,
    panelAndroid: {
      shadowColor: "#242424",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 2
    },
    navigationAndroid: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9
    },
    overlay: `0px 4px 12px rgba(0, 0, 0, 0.1)`,
    popin: `0px 8px 24px rgba(0, 0, 0, 0.1)`
  },
  grid: {
    columns: 24,
    maxWidth: 5000,
    borneGutter: 32,
    mobileGutter: 20
  },
  fontSizes: {
    titleXL: "32px",
    titleL: "24px",
    titleM: "20px",
    paragraph: "16px",
    small: "12px"
  },
  fontFamily: {
    bold: "HelveticaBold",
    medium: "HelveticaMedium",
    regular: "Helvetica"
  },
  shape: {
    radius: {
      input: 16,
      button: "36px",
      checkbox: 4,
      card: 8
    }
  },
  spacing: (numerator: number) => `calc(${numerator} * 4)px;`,
  globalSpacing: {
    small: "32px",
    medium: "48px",
    large: "72px"
  }
};

export default theme;
