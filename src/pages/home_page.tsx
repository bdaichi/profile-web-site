import NavBar from "@/components/common/nav_bar";
import { useEffect, useState } from "react";
import Header from "@/components/common/header";
import ReactPlayer from "react-player";
import ProfileDetailTile from "@/components/home_page/profile_detail_tile";
import ProfileHeadingTile from "@/components/home_page/profile_heading_tile";
import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";

export default function ProfilePage() {
  const [isReloadDarkMode, setIsReloadDarkMode] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  //マグマ動画のフィルター上に表示する選択肢、押下時するとフィルターを解除することができる
  const choices = ["どんとこい！", "ありがとう", "パワー！！！"];
  const [magumaFilterFlg, setMagumaFilterFlg] = useState(true);
  const isPc = useMediaQuery(mediaQuery.pc);
  const isSp = useMediaQuery(mediaQuery.sp);

  const [hasWindow, setHasWindow] = useState(false); //react-playerでhydrationErrorが出ないように 参考記事： https://github.com/cookpete/react-player/issues/1474

  useEffect(() => {
    if (Number(localStorage.getItem("darkMode"))) {
      setIsDarkMode(true);
      console.log("true", Number(localStorage.getItem("darkMode")));
    } else {
      setIsDarkMode(false);
      console.log("false", Number(localStorage.getItem("darkMode")));
    }
  }, [isReloadDarkMode]);

  //react-playerでhydrationErrorが出ないように 参考記事： https://github.com/cookpete/react-player/issues/1474
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        height: "120%",
        paddingBottom: 30,
      }}
    >
      <Header title="プロフィール" />
      <NavBar
        isReloadDarkMode={isReloadDarkMode}
        setIsReloadDarkMode={setIsReloadDarkMode}
        isDarkMode={isDarkMode}
      />
      <div className="flex justify-center z-0 flex-row flex-wrap items-center pb-12 border-b">
        <div className="mt-12">
          <ProfileDetailTile isDarkMode={isDarkMode} />
        </div>
        <div className={`m-8 ${isPc ? "mt-40" : "mt-12"}`}>
          <div
            className={`flex flex-row items-center justify-center flex-wrap mx-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p
              className="text-xl"
              style={{ fontFamily: "Hiragino Kaku Gothic StdN" }}
            >
              マグマ式
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "Hiragino Mincho ProN" }}
            >
              　{/* ← 空白がある */}
              ※粉チーズの中身は差し替えております、とてもマグマです(？)ご注意ください
            </p>
          </div>
          <div className="flex relative">
            <>
              {magumaFilterFlg ? (
                <div
                  className={`flex absolute z-10 bg-opacity-90 bg-white flex-col items-center justify-center`}
                  style={{
                    height: isSp ? 250 : 530,
                    width: isSp ? 350 : 800,
                    top: isSp ? 40 : 10,
                    left: isSp ? 10 : 0,
                  }}
                >
                  <p style={{ fontFamily: "Hiragino Mincho ProN" }}>
                    半裸の変態がなにかしております。少々危険な動画です。
                  </p>
                  <p
                    style={{ fontFamily: "Hiragino Mincho ProN" }}
                    className="my-4"
                  >
                    閲覧しますか？
                  </p>
                  <div className="flex flex-row items-center">
                    {choices.map((choice) => (
                      <p
                        key={choice}
                        className={`${
                          isSp ? "text-xs" : "text-md"
                        } p-2 mx-3 border-b-2 border-r-2 shadow-2xl shadow-blue-600/50 rounded-md border-blue-400 cursor-pointer`}
                        style={{
                          fontFamily: "Hiragino Kaku Gothic StdN",
                          whiteSpace: "pre-wrap",
                        }}
                        onClick={() => setMagumaFilterFlg(false)}
                      >
                        {choice}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
            <>
              {hasWindow ? (
                <ReactPlayer
                  url="maguma.MP4"
                  controls={true}
                  height={isSp ? 280 : 480}
                  width={isSp ? 350 : 800}
                  style={{ marginLeft: isSp ? 10 : 0 }}
                />
              ) : (
                <></>
              )}
            </>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center"
        style={{ backgroundColor: isDarkMode ? "black" : "white" }}
      >
        <div className={`${isSp ? "my-6" : "my-8"}`}></div>
        <ProfileHeadingTile
          designPattern={0}
          image="programming_img.jpeg"
          text="プログラミング関連"
          isDarkMode={isDarkMode}
        />
        <div className={`${isSp ? "my-6" : "my-12"}`}></div>
        <ProfileHeadingTile
          designPattern={1}
          image="hair_cut_img.jpg"
          text="特技"
          isDarkMode={isDarkMode}
        />
        <div className={`${isSp ? "my-6" : "my-12"}`}></div>
        <ProfileHeadingTile
          designPattern={2}
          image="otaku_img.JPG"
          text="趣味"
          isDarkMode={isDarkMode}
        />
        <div className="my-12"></div>
      </div>
    </div>
  );
}
