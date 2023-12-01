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

const fontOptionTemplate = (
  fontFamlimiy: string
): {
  weight: "400";
  subsets?: "latin"[] | undefined;
  variable: `--${string}`;
  display?: Display | undefined;
} => {
  return {
    weight: "400",
    subsets: ["latin"],
    variable: `--font-${fontFamlimiy}`,
    display: "swap",
  };
};

//丸くて可愛い感じ、でもちょっとあざとい
export const KiwiMaruFont = Kiwi_Maru(fontOptionTemplate("KiwiMaru"));

//ゴツゴツしてて太い
export const DelaGothicOneFont = Dela_Gothic_One(
  fontOptionTemplate("DelaGothicOne")
);

//お化け屋敷とかで使われてそうな、細くてなよなよしてる感じ
export const NewTegominFont = New_Tegomin(fontOptionTemplate("NewTegomin"));

//和菓子屋さんとかで使われてそう！(小並感)
export const HinaMinchoFont = Hina_Mincho(fontOptionTemplate("HinaMincho"));

//シンプルに可愛い
export const KosugiFont = Kosugi(fontOptionTemplate("Kosugi"));

//ちょっとアホっぽい、はなたれ小学生男子って感じ
export const StickFont = Stick(fontOptionTemplate("Stick"));

//生き生きとした軽快で、躍動感がある
export const RocknRollOneFont = RocknRoll_One(
  fontOptionTemplate("RocknRollOne")
);

//その名の通り油性マジックで書いた感じ
export const YuseiMagicFont = Yusei_Magic(fontOptionTemplate("YuseiMagic"));

//なんか旅行サイトで使われてることが多いよね？って感じ
export const KaiseiDecolFont = Kaisei_Decol(fontOptionTemplate("KaiseiDecol"));

//なんかインドカレーのメニュー表とかで使われてる感じ
export const ReggaeOneFont = Reggae_One(fontOptionTemplate("ReggaeOne"));
