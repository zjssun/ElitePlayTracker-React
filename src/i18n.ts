import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "avgRanks": "Avg ELO:",
      "training": "Private Scrims",
      "win": "WIN",
      "loss": "LOSS",
      "unknown": "X",
      "TripleKills":"Triple Kills",
      "QuadroKills":"Quadro Kills",
      "PentaKills":"Penta Kills",
      "Assists":"Assists",
      "January":"Jan.",
      "February":"Feb.",
      "March":"Mar.",
      "April":"Apr.",
      "May":"May.",
      "June":"Jun.",
      "July":"Jul.",
      "August":"Aug.",
      "September":"Sep.",
      "October":"Oct.",
      "November":"Nov.",
      "December":"Dec.",
      "day":" ",
      "NotFound":"Go TO Home Page",
      "NotFoundPlayer":"Not Found This Player",
      "NotStatistics":"unstats",
    }
  },
  zh: {
    translation: {
      "avgRanks": "对局均分:",
      "training": "训练赛",
      "win": "胜利",
      "loss": "落败",
      "unknown": "未知",
      "TripleKills":"三杀",
      "QuadroKills":"四杀",
      "PentaKills":"五杀",
      "Assists":"助攻",
      "January":"一月",
      "February":"二月",
      "March":"三月",
      "April":"四月",
      "May":"五月",
      "June":"六月",
      "July":"七月",
      "August":"八月",
      "September":"九月",
      "October":"十月",
      "November":"十一月",
      "December":"十二月" ,
      "day":"日",
      "NotFound":"返回首页",	
      "NotFoundPlayer":"没找到该玩家",
      "NotStatistics":"未统计",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "zh",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;