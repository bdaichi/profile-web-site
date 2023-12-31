import { useEffect, useState, useCallback } from "react";
import AnimateHeight from "react-animate-height";
import { Element, scroller } from "react-scroll";

import NavBar from "@/components/common/nav_bar";
import Header from "@/components/common/header";

import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";
import {
  HinaMinchoFont,
  RocknRollOneFont,
  StickFont,
  YuseiMagicFont,
} from "@/fonts/google_fonts";

type heading = {
  feature: string;
  scrollId: string;
  synopsis: string;
  summary: string;
  anmationHeight: number[]; //配列の0番目に通常時、1番目に押下時の高さを代入しておく
};

export default function SpecialSkillDetailPage() {
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
      feature: "自分で髪を切ることができる",
      scrollId: "selfHairCut",
      synopsis:
        "約2年ほど前から自分で自分の髪を切るようになりました、今でもはもう慣れたもので30分で終わります、切りすぎて失敗なんてこともなくなりました。",
      summary:
        "髪を切る理由\n・美容院の世間話をして愛想笑いをする時間が苦手、何話そうかな、やべ！なんて言ったか聞き取れなかった...てきとーに笑うか...ははは\n・金がかからん！\n初期費用としてバリカンとハサミ代はかかるけど、美容院に行く時間もかからないし",
      anmationHeight: [isSp ? 140 : 190, isSp ? 320 : 350],
    },
    {
      feature: "パワーのレベルが高い",
      scrollId: "powerOfPower",
      synopsis: "きんにくんのストレッチを毎朝し続けて3年、体にある変化が...",
      summary:
        "毎朝行っているきんにくんの10分間ストレッチ、ストレッチが終わった後にきんにくんと一緒にパワー！を言わせていただく時間が設けられている。\nこのおかげでパワー！がきんにくんと同じレベルで言えるようになった、本人じゃん笑 え？きんにくんいた笑？と称賛された実績を持ちます。",
      anmationHeight: [isSp ? 120 : 170, isSp ? 280 : 300],
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
    } else {
      setIsDarkMode(false);
    }
  }, [isReloadDarkMode]);

  return (
    <div
      className={`flex justify-center flex-col items-center pb-56 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Header title="特技☆" />
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
          一応特技？があります
        </p>
      </div>
      <div
        className={`${HinaMinchoFont.className} flex justify-center items-start flex-col border relative my-12`}
        style={{
          height: 190,
          width: isSp ? 360 : 500,
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
              textShadow: isDarkMode && isPc ? "1px 4px 8px" : "none",
              WebkitTextStroke:
                isDarkMode && !isSp
                  ? `0.5px ${isDarkMode ? "white" : "black"}`
                  : undefined,
            }}
            onClick={() => scrollToStory(heading.scrollId)}
          >
            {heading.feature}
          </li>
        ))}
      </div>
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
                  className={`${StickFont.className}`}
                  style={{
                    fontSize: featureFontSize,
                    textShadow: isDarkMode
                      ? isSp
                        ? "0.5px 0.5px 1px"
                        : "1px 4px 8px"
                      : "none",
                    WebkitTextStroke: isSp
                      ? undefined
                      : `0.5px ${isDarkMode ? "white" : "black"}`,
                  }}
                >{`${index + 1}.${heading.feature}`}</p>
                <div
                  className={`${
                    viewHeadding == heading.feature && "border-b pb-2"
                  }`}
                >
                  <p
                    className={`${RocknRollOneFont.className} py-2`}
                    style={{
                      fontSize: synopsisFontSize,
                      textShadow: isDarkMode
                        ? isSp
                          ? "0.5px 0.5px 1px"
                          : "1px 1px 2px"
                        : "none",
                      WebkitTextStroke: isSp
                        ? undefined
                        : `0.5px ${isDarkMode ? "white" : "black"}`,
                    }}
                  >{`・${heading.synopsis}`}</p>
                </div>
                <div>
                  {viewHeadding == heading.feature ? (
                    <p
                      className={`${YuseiMagicFont.className} m-4 tracking-wider`}
                      style={{
                        whiteSpace: "pre-wrap",
                        fontSize: summaryFontSize,
                        textShadow: isDarkMode
                          ? isSp
                            ? "0.5px 0.5px 1px"
                            : "1px 1px 2px"
                          : "none",
                        WebkitTextStroke: isSp
                          ? undefined
                          : `0.5px ${isDarkMode ? "white" : "black"}`,
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
