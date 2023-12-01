import "@/app/globals.css";
import { Display } from "next/dist/compiled/@next/font";
import {
  Kiwi_Maru,
  Dela_Gothic_One,
  New_Tegomin,
  Hina_Mincho,
  Kosugi,
  Stick,
  RocknRoll_One,
  Yusei_Magic,
  Kaisei_Decol,
  Reggae_One,
} from "next/font/google";

//丸くて可愛い感じ、でもちょっとあざとい
export const KiwiMaruFont = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-KiwiMaru",
  display: "swap",
});

//ゴツゴツしてて太い
export const DelaGothicOneFont = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-DelaGothicOne",
  display: "swap",
});

//お化け屋敷とかで使われてそうな、細くてなよなよしてる感じ
export const NewTegominFont = New_Tegomin({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-NewTegomin",
  display: "swap",
});

//和菓子屋さんとかで使われてそう！(小並感)
export const HinaMinchoFont = Hina_Mincho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-HinaMincho",
  display: "swap",
});

//シンプルに可愛い
export const KosugiFont = Kosugi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Kosugi",
  display: "swap",
});

//ちょっとアホっぽい、はなたれ小学生男子って感じ
export const StickFont = Stick({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Stick",
  display: "swap",
});

//生き生きとした軽快で、躍動感がある
export const RocknRollOneFont = RocknRoll_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-RocknRollOne",
  display: "swap",
});

//その名の通り油性マジックで書いた感じ
export const YuseiMagicFont = Yusei_Magic({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-YuseiMagic",
  display: "swap",
});

//なんか旅行サイトで使われてることが多いよね？って感じ
export const KaiseiDecolFont = Kaisei_Decol({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-KaiseiDecol",
  display: "swap",
});

//なんかインドカレーのメニュー表とかで使われてる感じ
export const ReggaeOneFont = Reggae_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ReggaeOne",
  display: "swap",
});
