import { useEffect, useState, useCallback } from "react";
import AnimateHeight from "react-animate-height";
import { Element, scroller } from "react-scroll";

import NavBar from "@/components/common/nav_bar";
import Header from "@/components/common/header";

import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";
import {
  HinaMinchoFont,
  KaiseiDecolFont,
  KiwiMaruFont,
  ReggaeOneFont,
  StickFont,
} from "@/fonts/google_fonts";

type heading = {
  feature: string;
  scrollId: string;
  synopsis: string;
  summary: string;
  anmationHeight: number[]; //配列の0番目に通常時、1番目に押下時の高さを代入しておく
};

export default function HobbyDetailPage() {
  const isPc = useMediaQuery(mediaQuery.pc);
  const isSp = useMediaQuery(mediaQuery.sp);
  const [isReloadDarkMode, setIsReloadDarkMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewHeadding, setViewHeadding] = useState("");

  const featureFontSize = isPc ? 24 : 14;
  const synopsisFontSize = isPc ? 20 : 12;
  const summaryFontSize = isPc ? 16 : 11;

  const headings: heading[] = [
    {
      feature: "京アニ大好き！！！",
      scrollId: "iLoveVeryVeryKyotoAnimation",
      synopsis:
        "京アニ大好きです！全作品見てます！！ホント作画がレベチですよね...数十年前のアニメとは思えないほどに作画が安定して、めっちゃ綺麗であったかくて...そんな京アニ作品の中でも好きなのが下記になります！",
      summary:
        "・境界の彼方\nブルーレイBOX所持、10週以上してます、メガネをかけた栗山さんが大好きです！\n・ヴァイオレット・エヴァーガーデン\nブルーレイ全巻持ってます！ポスターもアホほど持ってます！カードケースも使ってます！ガチ泣きします\n・CLANNAD\nマジ人生...\n・フルメタル・パニック！ \nそうすけがめっちゃ面白い！毎話爆笑！\n・小林さんちのメイドラゴン\n小林さんに一途なトールちゃんがめっちゃほんとに可愛い！！！\n・響け！ユーフォニアム\n初めてみた時作画に驚いた、レベル高すぎ...ストーリーも熱い泣ける \n・free\n青春！こんな最高な仲間がいる部活最高だろうなぁ...マジで泣ける、てか水の作画エグすぎ\n・けいおん\n面白い！！！ギターをやりたくなる...\n・日常\nヒャダインの曲が好き、めっちゃアホで腹筋崩壊する\n・中二病でも恋がしたい\n六花ちゃんが可愛すぎて、ほんとに無理、マジ尊い...\n・甘城ブリリアントパーク\nかなり振り切ったギャグがおもしろい、コロッケうまそう",
      anmationHeight: [190, 750],
    },
    {
      feature: "ラブライブ！大好き！！！",
      scrollId: "iLikeLoveLiveYes",
      synopsis:
        "ラブライブにハマったのは中学2年生の頃、学校の作文コンクールでラブライブについて熱く語っていた生徒がきっかけでラブライブ！を見ることにそして沼にハマっていったのです",
      summary:
        //TODO: 推しへの愛を言葉にして、追記する
        "・推し紹介\nラブライブ！\n　東條希ちゃん\nラブライブ！サンシャイン！\n　黒澤ルビィちゃん\n虹ヶ咲学園スクールアイドル同好会\n　桜坂しずくちゃん\nラブライブ！スーパースター！\n　嵐千砂都ちゃん\n蓮ノ空女学院スクールアイドルクラブ\n　乙宗梢ちゃん",
      anmationHeight: [160, 450],
    },
  ];

  const scrollToStory = useCallback((scrollId: string) => {
    scroller.scrollTo(scrollId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -200,
    });
  }, []);

  useEffect(() => {
    if (Number(localStorage.getItem("darkMode"))) {
      setIsDarkMode(true);
      console.log("true", Number(localStorage.getItem("darkMode")));
    } else {
      setIsDarkMode(false);
      console.log("false", Number(localStorage.getItem("darkMode")));
    }
  }, [isReloadDarkMode]);

  return (
    <div
      className={`flex justify-center flex-col items-center pb-56 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Header title="趣味♡" />
      <NavBar
        isReloadDarkMode={isReloadDarkMode}
        setIsReloadDarkMode={setIsReloadDarkMode}
        isDarkMode={isDarkMode}
      />
      <div
        className={`${isPc ? "py-12" : "py-6"} w-full bg-blue-400 shadow-xl ${
          isSp ? "mt-28" : "mt-32"
        }`}
      >
        <p
          className="mx-12 text-2xl text-white"
          style={{ fontFamily: "Osaka" }}
        >
          アニメについて語ります、漫画も大好きですが(700冊以上持ってます、自慢です)、また今度語ります
        </p>
        <p
          className="mx-12 text-xl text-white"
          style={{ fontFamily: "Osaka", whiteSpace: "pre-wrap" }}
        >
          {
            "　僕はアニメ大好き、漫画大好き、2次元大好き、オタクです\n　東京に引っ越してきた理由はこの趣味のためです！ライブ開場が近いですし、コミケに行ってみたい！"
          }
        </p>
      </div>
      <div
        className={`${HinaMinchoFont.className} flex justify-center items-start flex-col border relative my-12`}
        style={{
          height: 190,
          width: isSp ? 300 : 400,
          backgroundColor: "gray",
        }}
      >
        <div className="flex absolute h-10 w-24 justify-center items-center top-0 left-0 bg-white">
          <p className="text-center">目次</p>
        </div>
        <div className="mt-6"></div>
        {headings.map((heading) => (
          <li
            key={heading.feature}
            className="py-1 mx-10 pr-6 text-white border-b cursor-pointer"
            style={{
              fontSize: featureFontSize,

              textShadow: isDarkMode ? "1px 4px 8px" : "none",
              WebkitTextStroke: isDarkMode
                ? `0.5px ${isDarkMode ? "white" : "black"}`
                : undefined,
            }}
            onClick={() => scrollToStory(heading.scrollId)}
          >
            {heading.feature}
          </li>
        ))}
      </div>
      <p
        className={`${KiwiMaruFont.className} ${isSp ? "mx-4" : "mx-32"} ${
          isSp ? "text-base" : "text-xl"
        } text-center text-red-500`}
        style={{ whiteSpace: "pre-wrap" }}
      >
        {
          "アニメなどに興味のない方は飛ばしてください\nなんか楽しそうだなこいつ笑って感じで見ていただけると幸いです。\nでは語ります！！！"
        }
      </p>
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
        {headings.map((heading, index) => {
          return (
            <Element key={heading.feature} name={heading.scrollId}>
              <AnimateHeight
                height={
                  viewHeadding == heading.feature
                    ? heading.anmationHeight[1]
                    : heading.anmationHeight[0]
                }
                className={`flex flex-col ${
                  isSp ? "p-8 my-12 mx-4" : "p-8 my-12 mx-24"
                }  rounded-3xl justify-center border-2 border-blue-400 cursor-pointer`}
                style={{
                  boxShadow: `0px 10px 4px 4px ${
                    isDarkMode ? "rgba(0,153,255,0.5)" : "rgba(0, 0, 0, 0.5)"
                  }`,
                  overflowY: "scroll",
                }}
                onClick={() => {
                  if (viewHeadding == heading.feature) {
                    setViewHeadding("");
                  } else {
                    setViewHeadding(heading.feature);
                  }
                }}
              >
                <p
                  className={`${KaiseiDecolFont.className}`}
                  style={{
                    fontSize: featureFontSize,
                    textShadow: isDarkMode ? "1px 4px 8px" : "none",
                    WebkitTextStroke: `0.5px ${isDarkMode ? "white" : "black"}`,
                  }}
                >{`${index + 1}.${heading.feature}`}</p>
                <div
                  className={`${
                    viewHeadding == heading.feature && "border-b pb-2"
                  }`}
                >
                  <p
                    className={`${StickFont.className} py-2`}
                    style={{
                      fontSize: synopsisFontSize,
                      textShadow: isDarkMode ? "1px 1px 2px" : "none",
                      WebkitTextStroke: `0.5px ${
                        isDarkMode ? "white" : "black"
                      }`,
                    }}
                  >{`・${heading.synopsis}`}</p>
                </div>
                <div>
                  {viewHeadding == heading.feature ? (
                    <p
                      className={`${ReggaeOneFont.className} m-4 tracking-wider`}
                      style={{
                        whiteSpace: "pre-wrap",
                        fontSize: summaryFontSize,
                        textShadow: isDarkMode ? "1px 1px 2px" : "none",
                        WebkitTextStroke: `0.5px ${
                          isDarkMode ? "white" : "black"
                        }`,
                      }}
                    >
                      {heading.summary}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </AnimateHeight>
            </Element>
          );
        })}
      </div>
    </div>
  );
}
