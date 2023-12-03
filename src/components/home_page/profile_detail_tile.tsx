import dayjs from "dayjs";
import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";
import Image from "next/image";
import { KiwiMaruFont } from "@/fonts/google_fonts";

type Props = {
  isDarkMode: boolean;
};

export default function ProfileDetailTile(props: Props) {
  const myAge = calculateAge();
  const isPc = useMediaQuery(mediaQuery.pc);
  const isDarkMode = props.isDarkMode;

  function calculateAge() {
    const nowYear = Number(dayjs().format("YYYY"));
    const nowMonth = Number(dayjs().format("M"));
    const nowDay = Number(dayjs().format("DD"));
    if (nowMonth == 5 && nowDay >= 20) {
      return nowYear - 2002;
    } else if (nowMonth > 5) {
      return nowYear - 2002;
    } else {
      return nowYear - 2002 - 1;
    }
  }

  return (
    <div
      className={`${KiwiMaruFont.className} flex justify-center w-72 mt-28 rounded-md relative shadow-2xl`}
      style={{ height: 400 }}
    >
      <div id="back_ground">
        <Image
          className={`w-72 z-0 rounded-md shadow-lg md:mt-24 ${
            isPc ? "mt-0" : "mt-14"
          } `}
          src="/douga_gui.jpg" //すいかにかぶりついている画像
          alt="スイカを動画食い *動画食いとは手を使わずに口のみで食らうこと"
          width="0"
          height="0"
          sizes="100vw"
          style={{ opacity: 0.3, height: 400, width: 300 }}
        />
      </div>
      <div
        className={`flex flex-col z-10 w-72 items-center font-extrabold absolute md:top-24 ${
          isPc ? "top-0" : "top-24"
        } ${isDarkMode ? "text-white" : "text-black"}`}
        style={{
          WebkitTextStroke: isDarkMode ? "0.4px white" : undefined,
        }}
      >
        <Image
          className={`z-0 h-32 w-32 my-12 rounded-full shadow-l md:mt-24 ${
            isPc ? "mt-0" : "mt-14"
          } `}
          src="/hage.jpeg"
          alt="ハゲ"
          width="0"
          height="0"
          sizes="100vw"
          style={{ opacity: 0.9, width: 170, height: 170 }}
        />
        <p className="flex justify-center text-3xl">名前　別府大地</p>
        <div className="flex flex-row flex-wrap justify-center items-center ml-4 my-2">
          <p className="flex justify-center text-xl">生年月日</p>
          <p className="flex justify-center text-xl">　2002年5月20日</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center ml-4">
          <p className="flex justify-center text-xl">{`年齢　${myAge}歳`}</p>
          <p className="flex justify-center text-xl mx-4">血液型　 A型</p>
        </div>
      </div>
    </div>
  );
}
