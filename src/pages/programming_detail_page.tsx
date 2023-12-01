import { useEffect, useState, useCallback } from "react";
import AnimateHeight from "react-animate-height";
import { Element, scroller } from "react-scroll";

import NavBar from "@/components/common/nav_bar";
import Header from "@/components/common/header";

import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";
import { HinaMinchoFont, KosugiFont } from "@/fonts/google_fonts";

type heading = {
  feature: string;
  scrollId: string;
  synopsis: string;
  summary: string;
  anmationHeight: number[]; //配列の0番目に通常時、1番目に押下時の高さを代入しておく
};

export default function ProgrammingDetailPage() {
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
      feature: "きっかけ編",
      scrollId: "prologue",
      synopsis:
        "PCできる人かっけ〜！プログラミングできたら尚かっこよくね！？とりあえずやってみよう！...なにこれめっちゃ楽しい！！！",
      summary:
        "まず、プログラミングをはじめたきっかけですが、中学生の頃パソコンができる人に憧れがあり、キーボード見ずに高速でカタカタ打ってるのかっけー！という浅い考えを持っておりました。そこでパソコンについて学べる高校に行きたい！となり、尚志館高等学校の商業科に入ります。\n1.情報処理について学べる\n2.勉強特待生で合格したので授業料が大幅免除\n3.バイトができる\n4. なにより家から近い！(徒歩10分)\nという浅い考えのもと入学を決めました。\nそして高校3年生になった時にプログラミングに興味を持ちます、まずはフローチャートや流れ図の問題を解いてみて、凄く楽しいとハマります。就職を希望しておりましたが、ちょうどコロナが流行り始め、求人が少ない状態であったため専門学校に行きます。\n\n専門学校編へ続く",
      anmationHeight: [170, isSp ? 550 : 570],
    },
    {
      feature: "専門学校編",
      scrollId: "specialSchoolStory",
      synopsis:
        "え！？長期インターンできないんですか！？どうしよう...短期インターンを探すしか、いや....専門学校1年間通ったけど、高校の復習しかしてねぇな、あと1年通うより採用されたインターンのとこで働いたほうがいいんじゃね？実務経験詰めるし、勉強にもなるし、良いことばっかじゃん！さよなら専門学校！",
      summary:
        "私が入った専門学校は鹿児島環境・情報専門学校です。\nここに入学した理由はプログラミングについて学べることだけでなく、給付型奨学金制度 (授業料免除、月7万円の返済不要の奨学金を国からもらえる)を受けることができたからです。\n2年制の学校なので、1年生の終わりから就職活動を開始いたしました。\n自らインターンを探し、3社ほど面接を申し込んだのですが、運良く最初に面接を受けた〇〇株式会社にて採用され、長期インターンをさせていただくことにしました。\nインターンに採用されたことを担任に伝えると、「半年以上の長期インターンは認めてないよ？できない」と言われてしまい、驚きました！一応事前に進路担当の先生に確認はしておりましたが、そのときに詳細な期間を聞いておらず、私は長期=半年以上、先生は長期=1週間くらいと認識にズレがありました...\n短期インターンを考えましたが、ふと1年間学校に通って自身の成長に繋がったのか疑問が湧きました。専門学校での授業は、高校で学んだことの復習でつまらなく感じ、家でのNext.js, React, TypeScriptのWebアプリ開発だけが楽しみだった1年間...もう1年通うよりも働いた方がいい？と考え、インターン先の社長に今の自分の考えを話し、学校側に中退した場合に奨学金は返済が必要になるかなどの確認をし、働いたほうがメリットがあると結論が出たので、専門学校を中退いたしました。\n\n転職活動編へ続く",
      anmationHeight: [240, isSp ? 800 : 750],
    },
    {
      feature: "転職活動編",
      scrollId: "jobChangeStory",
      synopsis:
        "社長「経済的理由で、ちょっともう社員として雇い続けるのが難しい、せっかく東京来てもらったけど...申し訳ない」私「◯◯( 開発しているアプリ名 ) が大人気アプリになる瞬間が見たかったです🥲転職活動します...」",
      summary:
        "開発開始からわずか2ヶ月でリリースし、リリース後半年で1万ユーザーを達成、順風満帆に見えましたが、その影にはある組織の陰謀が蠢いていたのです....\n\n始まりは今年の2月、flutterで新規アプリを開発する計画が立てられましたが、flutterの経験がある開発者は誰一人おりませんでした。その中で私は「私の兄がflutterの経験が豊富です」と口を滑らせてしまい、「よし！じゃあ別府くんに開発を任せた！」となり、3月にflutterの開発環境、デザインパターン選定、新規登録、ログイン機能などの初期的業務から着手しました。\nそして2ヶ月後、なんとか最低限の機能の実装が完了し、iOS,Androidでリリースすることができました！！！Androidは私の方でリリース作業をすることになり、少し大変でした笑\nただ、これがゴールではなく、むしろスタート地点！人気アプリにするためにがんばるぞい！\n\nリリースして約2ヶ月が経過した頃、中々ユーザーが集まらず、どうユーザーを獲得するか悩んでいた時に、私が友達招待コード機能を発案します！\n友達招待コード機能の内容をざっくり説明すると下記になります。\n1. ユーザーが運営より与えられた招待コードを誰かに共有し招待する\n2. 被招待者(1で招待された人)がアカウント作成時に招待コードを登録する\n3. 招待者、被招待者の両方に特典が与えられる\nこの機能を社長に提案し、具体的な実装内容を計画、他の開発者の方と力を合わせ実装し、なんと2〜3ヶ月ほどで数千のユーザーを獲得することが出来ました！！！一部ユーザーが招待コードをSNSで共有することで大きく広まったみたいです。\nそして11月(アプリリリースから約半年)にユーザー登録数が1万を超えました！すごい！\nすべてが順調とまではいきませんでしたが、このまま頑張ればユーザー数10万人も夢じゃないと考えていたある日、事件が起こります...そして急遽私は転職活動をすることになったのです....\n詳細はここで記載しては情報漏洩とかでなんかダメな気がするので、割愛させていただきますが、会社の経済的状況が良くなく(これは流石に記載してもいい？)、私は◯◯社の社員として働かせていただくことが不可能になり、転職活動をすることを決意いたしました。",
      anmationHeight: [200, isSp ? 1100 : 900],
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
      className={`flex justify-center flex-col items-center pb-32 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Header title="プログラミング" />
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
          語るも涙、聞くも涙な 私のプログラミングエピソードを載せております！
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

              textShadow: isDarkMode ? "1px 2px 4px" : "none",
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
      <div
        className={`${KosugiFont.className} ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
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
                  style={{
                    fontSize: featureFontSize,
                    textShadow: isDarkMode ? "1px 2px 4px" : "none",
                    WebkitTextStroke: `0.5px ${isDarkMode ? "white" : "black"}`,
                  }}
                >{`${index + 1}.${heading.feature}`}</p>
                <div
                  className={`${
                    viewHeadding == heading.feature && "border-b pb-2"
                  }`}
                >
                  <p
                    className="font-bold text-xl my-2"
                    style={{
                      fontSize: synopsisFontSize,
                      textShadow: isDarkMode ? "1px 1px 2px" : "none",
                      WebkitTextStroke: `0.5px ${
                        isDarkMode ? "white" : undefined
                      }`,
                    }}
                  >
                    あらすじ
                  </p>
                  <p
                    className="font-bold"
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
                      className="m-4 tracking-wider"
                      style={{
                        whiteSpace: "pre-wrap",
                        fontSize: summaryFontSize,
                        textShadow: isDarkMode ? "2px 2px 3px" : "none",
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
