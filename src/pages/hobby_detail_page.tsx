import { useEffect, useState, useCallback } from "react";
import AnimateHeight from "react-animate-height";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Element, scroller } from "react-scroll";

import NavBar from "@/components/common/nav_bar";
import Header from "@/components/common/header";

import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";
import {
  KaiseiDecolFont,
  KiwiMaruFont,
  ReggaeOneFont,
  StickFont,
} from "@/fonts/google_fonts";
import Image from "next/image";

type heading = {
  feature: string;
  scrollId: string;
  synopsis: string;
  animetions: animation[];
  anmationHeight: number[]; //配列の0番目に通常時、1番目に押下時の高さを代入しておく
};

//アニメ情報
type animation = {
  title: string; //作品名
  workImage: string; //作品画像
  favoriteCharactor: favoriteCharactor; //推しキャラ情報
  workHighLight: string; //作品の見どころ
  descriptionVoiceFile?: string | undefined; //声でアニメを説明
};

//推しへ情報
type favoriteCharactor = {
  name: string;
  nickName: string;
  image: string;
  birth?: string | undefined; //ニッチなキャラだと生年月日がわからない場合がある
  messageToFavChar: string;
};

export default function HobbyDetailPage() {
  const [isHideVoiceDescription, setIsHideVoiceDescription] = useState(0);
  const isPc = useMediaQuery(mediaQuery.pc);
  const isSp = useMediaQuery(mediaQuery.sp);
  const isTablet = useMediaQuery(mediaQuery.tablet);
  const [isReloadDarkMode, setIsReloadDarkMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewHeadding, setViewHeadding] = useState("");
  const [isVisibleSoundDescription, setIsVisibleSoundDescription] =
    useState(""); //アニメタイトル横のサウンドボタンにカーソルを合わせると、音読機能の説明文を表示 bool型にすると全部のサウンドボタンの横に説明文が表示されるので、代入するのはアニメのタイトル

  const featureFontSize = isPc ? 24 : 14;
  const synopsisFontSize = isPc ? 20 : 12;
  const summaryFontSize = isPc ? 16 : 11;

  const headings: heading[] = [
    {
      feature: "京アニ大好き！！！",
      scrollId: "iLoveVeryVeryKyotoAnimation",
      synopsis:
        "京アニ大好きです！全作品見てます！！ホント作画がレベチですよね...数十年前のアニメとは思えないほどに作画が安定して、めっちゃ綺麗であったかくて...そんな京アニ作品の中でも好きな作品をいくつか紹介させていただきます！",
      animetions: kyotoAnimations,
      anmationHeight: [190, isTablet ? 4950 : isPc ? 2900 : 6100],
    },
    {
      feature: "ラブライブ！大好き！！！",
      scrollId: "iLikeLoveLiveYes",
      synopsis:
        "ラブライブにハマったのは中学2年生の頃、学校の作文コンクールでラブライブについて熱く語っていた生徒がきっかけでラブライブ！を見ることにそして沼にハマっていったのです",
      animetions: loveLoiveAnimations,
      anmationHeight: [160, isTablet ? 2400 : isPc ? 1400 : 2800],
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

  const hideSoundDescription = useCallback(() => {
    setIsVisibleSoundDescription("");
    localStorage.setItem("isHideDescription", "1");
  }, []);

  const playDescription = useCallback((voiceUrl: string | undefined) => {
    const unregistedVoiceUrl =
      Math.floor(Math.random() * 10) % 5 == 0
        ? "/animations/voice/unregisted_ver_miyahara.wav" //1/9の確率で宮原が再生される
        : "/animations/voice/unregisted_ver_1.wav";
    const audioSrc = voiceUrl == undefined ? unregistedVoiceUrl : voiceUrl;
    const audio = new Audio(audioSrc);
    audio.play();
  }, []);

  //useEffectとuseStateを使用して代入しないとエラーになる
  useEffect(() => {
    setIsHideVoiceDescription(
      Number(localStorage.getItem("isHideDescription")) ?? 0
    );
  }, []);

  useEffect(() => {
    if (Number(localStorage.getItem("darkMode"))) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [isReloadDarkMode]);

  useEffect(() => {
    if (viewHeadding == headings[0].feature) {
      setIsVisibleSoundDescription(kyotoAnimations[0].title);
    } else {
      setIsVisibleSoundDescription(loveLoiveAnimations[0].title);
    }
    setTimeout(() => setIsVisibleSoundDescription(""), 5000);
  }, [viewHeadding]);

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
        className={`${KiwiMaruFont.className} flex justify-center items-start flex-col border relative my-12`}
        style={{
          height: 190,
          width: isSp ? 300 : 500,
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
        {headings.map((heading) => {
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
                }  rounded-3xl justify-center border-2 border-blue-400`}
                style={{
                  boxShadow: `0px 10px 4px 4px ${
                    isDarkMode ? "rgba(0,153,255,0.5)" : "rgba(0, 0, 0, 0.5)"
                  }`,
                  overflowY: "scroll",
                }}
              >
                <p
                  className={`${KaiseiDecolFont.className} cursor-pointer`}
                  style={{
                    fontSize: featureFontSize,
                    textShadow: isDarkMode ? "1px 4px 8px" : "none",
                    WebkitTextStroke: `0.5px ${isDarkMode ? "white" : "black"}`,
                  }}
                  onClick={() => {
                    if (viewHeadding == heading.feature) {
                      setViewHeadding("");
                    } else {
                      setViewHeadding(heading.feature);
                    }
                  }}
                >{`${heading.feature}`}</p>
                <div
                  className={`${
                    viewHeadding == heading.feature && "border-b pb-2"
                  } cursor-pointer`}
                  onClick={() => {
                    if (viewHeadding == heading.feature) {
                      setViewHeadding("");
                    } else {
                      setViewHeadding(heading.feature);
                    }
                  }}
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
                    <div>
                      {heading.animetions.map((animtaion) => (
                        <div className="flex flex-col" key={animtaion.title}>
                          <div
                            className={`flex flex-row flex-wrap ${
                              isSp && "items-center justify-center"
                            } m-3 relative`}
                            style={{ height: "auto" }}
                          >
                            <Image
                              src={animtaion.workImage}
                              alt={animtaion.title}
                              width="0"
                              height="0"
                              sizes="100vw"
                              style={{
                                marginTop: isPc ? 15 : 0,
                                width: 170,
                                height: 250,
                              }}
                            />
                            <div
                              className={`${
                                KaiseiDecolFont.className
                              } ml-2 flex flex-col ${
                                isSp && "items-center justify-center relative"
                              }`}
                              style={{
                                width: isPc ? 700 : 200,
                              }}
                            >
                              <div
                                className={`flex flex-row items-center ${
                                  isSp && "my-2"
                                }`}
                              >
                                <p
                                  className="flex text-center pb-1"
                                  style={{ fontSize: featureFontSize }}
                                >
                                  {animtaion.title}
                                </p>
                                <div
                                  //PCのカーソルを合わせたときのみ動作させる、スマホなどではクリック時に動作してしまうので、なにも処理しない
                                  onMouseEnter={() =>
                                    isTablet || isSp
                                      ? {}
                                      : setIsVisibleSoundDescription(
                                          animtaion.title
                                        )
                                  }
                                  //PCのカーソルを合わせたときのみ動作させる、スマホなどではクリック時に動作してしまうので、なにも処理しない
                                  onMouseLeave={() =>
                                    isTablet || isSp
                                      ? {}
                                      : setIsVisibleSoundDescription("")
                                  }
                                  className={`flex items-center justify-center border rounded-full ${
                                    isSp ? "mx-1 w-6 h-6" : "mx-2 w-8 h-8"
                                  } ${
                                    animtaion.descriptionVoiceFile != null &&
                                    "bg-white"
                                  } cursor-pointer`}
                                  onClick={() =>
                                    playDescription(
                                      animtaion.descriptionVoiceFile
                                    )
                                  }
                                >
                                  <VolumeUpIcon
                                    style={{
                                      height: 15,
                                      width: 15,
                                      color:
                                        animtaion.descriptionVoiceFile != null
                                          ? "blue"
                                          : undefined,
                                    }}
                                  />
                                </div>
                                {isVisibleSoundDescription == animtaion.title &&
                                !isHideVoiceDescription ? (
                                  <div
                                    className={`${
                                      KiwiMaruFont.className
                                    } flex absolute flex-col p-2 ${
                                      isDarkMode ? "bg-black" : "bg-white"
                                    } rounded-md border`}
                                    style={{
                                      height: "auto",
                                      width: isSp ? 200 : 300,
                                      left: isSp ? 0 : 200,
                                      top: isTablet ? 260 : 50,
                                      boxShadow: `0px 0px 10px 5px ${
                                        isDarkMode
                                          ? "rgba(255, 255, 255, 0.5)"
                                          : "rgba(0, 0, 0, 0.5)"
                                      }`,
                                    }}
                                  >
                                    <p
                                      onClick={() =>
                                        setIsVisibleSoundDescription("")
                                      }
                                    >
                                      紹介文を読むのがめんどくさい！そんな時はサウンドボタンを押してください！(※イヤホンをつけるか、周囲に人がいないことをご確認ください)
                                    </p>
                                    <p
                                      className="text-blue-600 p-1 text-center"
                                      onClick={() => hideSoundDescription()}
                                    >
                                      もう表示しない　
                                    </p>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                              <div
                                className={`flex flex-row flex-wrap  ${
                                  isSp && "items-center justify-center mt-2"
                                }`}
                              >
                                <Image
                                  src={animtaion.favoriteCharactor.image}
                                  alt={animtaion.favoriteCharactor.name}
                                  width="0"
                                  height="0"
                                  sizes="100vw"
                                  style={{ width: 60, height: 90 }}
                                />
                                <div
                                  className={`flex flex-col ml-2 ${
                                    isSp && "mt-3"
                                  }`}
                                >
                                  <div className="flex flex-row flex-wrap">
                                    <p className="ml-1">
                                      {animtaion.favoriteCharactor.nickName}
                                    </p>
                                    <p className="ml-1">{` (本名：${animtaion.favoriteCharactor.name})`}</p>
                                  </div>
                                  <p className="ml-1">{`誕生日：${
                                    animtaion.favoriteCharactor.birth ?? "不明"
                                  }`}</p>
                                  <p>
                                    {
                                      animtaion.favoriteCharactor
                                        .messageToFavChar
                                    }
                                  </p>
                                </div>
                              </div>
                              <p
                                className={`${ReggaeOneFont.className} m-4 tracking-wider`}
                                style={{
                                  whiteSpace: "pre-wrap",
                                  fontSize: summaryFontSize,
                                  textShadow: isDarkMode
                                    ? "1px 1px 2px"
                                    : "none",
                                  WebkitTextStroke: `0.5px ${
                                    isDarkMode ? "white" : "black"
                                  }`,
                                }}
                              >
                                {animtaion.workHighLight == ""
                                  ? "comming soon..."
                                  : animtaion.workHighLight}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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

//京アニ紹介
const kyotoAnimations: animation[] = [
  {
    title: "境界の彼方",
    workImage: "/animations/kyokai_no_kanata.JPG",
    favoriteCharactor: {
      name: "栗山 未来",
      nickName: "栗山さん",
      image: "/animations/kuriyama_mirai.jpg",
      birth: "3月31日",
      messageToFavChar:
        "ゆるふわ系の髪質、あどけない顔立ち、幼さを残した胸元、まさに理想の女の子！要するにメガネをかけた栗山さんが大好きです！",
    },
    workHighLight: "",
  },
  {
    title: "ヴァイオレット・エヴァーガーデン",
    workImage: "/animations/violet_ever_garden.JPG",
    favoriteCharactor: {
      name: "ヴァイオレット・エヴァーガーデン",
      nickName: "ヴァイオレットちゃん",
      image: "/animations/violet.jpg",
      birth: undefined,
      messageToFavChar:
        "何事にも真っすぐで正直なヴァイオレットちゃん、少佐を思う気持ちがほんとに純粋で、とても健気で...見てるこっちが浄化されそう",
    },
    workHighLight:
      "愛 を少しでも知ることができる作品です。毎話泣いてました。特に5話、7話、10話、12話は号泣でした。ほんとうに感謝しか無い。見たくなってきたわ",
  },
  {
    title: "CLANNAD",
    workImage: "/animations/clannad.jpg",
    favoriteCharactor: {
      name: "古河 渚",
      nickName: "なぎさちゃん",
      image: "/animations/hurukawa_nagisa.jpg",
      birth: "12月24日",
      messageToFavChar:
        "体は弱いけど、その分誰よりも心が強いと感じる、不器用だけど一生懸命で自分より他の人優先で、そしてなにより笑顔がめっちゃかわいい、もうなにあれ！？可愛すぎ、ホント無理！！！",
    },
    workHighLight: "人生",
  },
  {
    title: "小林さんちのメイドラゴン",
    workImage: "/animations/kobayashisanchino_maidragon.JPG",
    favoriteCharactor: {
      name: "トール",
      nickName: "トールちゃん",
      image: "/animations/torl.jpg",
      birth: undefined,
      messageToFavChar: "小林さんに一途なトールちゃんめっちゃかわいい！！！",
    },
    workHighLight: "",
  },
  {
    title: "響け！ユーフォニアム",
    workImage: "/animations/hibike_ufonium.JPG",
    favoriteCharactor: {
      name: "中川 夏紀",
      nickName: "夏紀先輩",
      image: "/animations/nakagawa_natsuki.jpg",
      birth: "6月23日",
      messageToFavChar:
        "1期の10話をみて完全に心をノックアウトされました。可愛すぎじゃ",
    },
    workHighLight: "",
  },
  {
    title: "Free!",
    workImage: "/animations/free.JPG",
    favoriteCharactor: {
      name: "松岡 凛",
      nickName: "りんちゃん",
      image: "/animations/matsuoka_rin.jpg",
      birth: "2月2日",
      messageToFavChar:
        "誰よりも仲間思いな優しいりんちゃん、泣き虫なところが面白いw",
    },
    workHighLight: "",
  },
  {
    title: "けいおん！",
    workImage: "/animations/k_on.jpg",
    favoriteCharactor: {
      name: "秋山 澪",
      nickName: "みおたん",
      image: "/animations/akiyama_mio.jpg",
      birth: "1月15日",
      messageToFavChar: "も、萌え萌えキュンでござるっぅ！！！",
    },
    workHighLight: "",
  },
  {
    title: "中二病でも恋がしたい！",
    workImage: "/animations/chunibyoudemo_koigashitai.JPG",
    favoriteCharactor: {
      name: "小鳥遊 六花",
      nickName: "六花ちゃん",
      image: "/animations/takanashi_rikka.jpg",
      birth: "6月12日",
      messageToFavChar:
        "もうほんと可愛すぎ！！！マジで可愛い！！脳がバグるほどに可愛い！！！尊い、辛い、無理...",
    },
    workHighLight: "",
  },
  {
    title: "日常",
    workImage: "/animations/nichijo.JPG",
    favoriteCharactor: {
      name: "小木",
      nickName: "小木",
      image: "/animations/ogi.jpg",
      birth: "2月16日",
      messageToFavChar: "脇役だけど、面白すぎる",
    },
    workHighLight: "",
  },
];

//ラブライブ紹介
const loveLoiveAnimations: animation[] = [
  {
    title: "ラブライブ！",
    workImage: "/animations/love_live.JPG",
    favoriteCharactor: {
      name: "東條希",
      nickName: "希ちゃん",
      image: "/animations/tojo_nozomi.jpg",
      birth: "6月9日",
      messageToFavChar:
        "いやほんとに女神、マジ神聖、マジ嫁、めっちゃ優しい、みんなのことを誰よりも思ってる、いやほんとやばいわ",
    },
    workHighLight: "",
    descriptionVoiceFile: "/animations/voice/love_live.wav",
  },
  {
    title: "ラブライブ！サンシャイン!!",
    workImage: "/animations/love_live_sunshine.JPG",
    favoriteCharactor: {
      name: "黒澤ルビィ",
      nickName: "ルビィちゃん",
      image: "/animations/kurosawa_ruby.jpg",
      birth: "9月21日",
      messageToFavChar:
        "弱気なところもあるけど、ここってところは譲らない(特にダイヤ様のことになると)そんなルビィちゃんが好き",
    },
    workHighLight: "",
  },
  {
    title: "ラブライブ！スーパースター!!",
    favoriteCharactor: {
      name: "嵐千砂都",
      nickName: "ちさとちゃん",
      image: "/animations/arashi_chisato.jpg",
      birth: "2月25日",
      messageToFavChar:
        "努力家でほんとに尊敬できる、自分にはってそういう考えを捨ててとりあえずやるって思考がほんとに好き",
    },
    workImage: "/animations/love_live_super_star.JPG",
    workHighLight: "",
  },
  {
    title: "蓮ノ空女学院スクールアイドルクラブ",
    favoriteCharactor: {
      name: "乙宗梢",
      nickName: "梢先輩",
      image: "/animations/otomune_kozue.PNG",
      birth: "6月15日",
      messageToFavChar:
        "声が良い、流石うい様、あと画伯なところが面白い、これも流石うい様",
    },
    workImage: "/animations/hasunosora_school_idol.JPG",
    workHighLight: "",
  },
];
