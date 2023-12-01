import { useRouter } from "next/router";
import { mediaQuery, useMediaQuery } from "@/custom_hooks/useMediaQuery";
import Image from "next/image";

type Props = {
  designPattern: number;
  image: string;
  text: string;
  isDarkMode: boolean;
};

export default function ProfileHeadingTile(props: Props) {
  const { designPattern, image, text, isDarkMode } = props;
  const isPc = useMediaQuery(mediaQuery.pc);
  const isSp = useMediaQuery(mediaQuery.sp);
  const router = useRouter();

  const tileSize = isPc
    ? { height: 360, width: 800 }
    : isSp
    ? { height: 100, width: 290 }
    : { height: 300, width: 600 };
  const contentSize = isPc
    ? { height: 360, width: 650 }
    : isSp
    ? { height: 100, width: 200 }
    : { height: 300, width: 500 };
  const imageSize = isPc
    ? { height: 360, width: 800 }
    : isSp
    ? { height: 100, width: 290 }
    : { height: 300, width: 600 };
  const fontSize = isPc ? 35 : isSp ? 12 : 20;

  switch (designPattern) {
    case 0:
      return (
        <div
          onClick={() => router.push("/programming_detail_page")}
          className="flex justify-center items-center cursor-pointer"
          style={{
            boxShadow: `${isPc ? "10px" : "-10px"} 10px 5px 2px ${
              isDarkMode ? "rgba(0, 153, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
            }`,
            ...tileSize,
            marginLeft: isPc ? 380 : 30,
            borderRadius: "15px 15px 15px 15px", //tailwindでborder-xlが効かないので,style設定してる
          }}
        >
          <div
            className="flex absolute z-10 bg-white border items-center"
            style={{
              ...contentSize,
              left: isPc ? 380 : 30,
              clipPath: "polygon(0 0px, 50% 0, 100% calc(100% - 0px), 0 100%)",
              borderRadius: "15px 0px 0px 15px", //tailwindでborder-lが効かないので,style設定してる
            }}
          >
            <p
              style={{
                fontSize: fontSize,
                marginLeft: isSp ? 10 : 80,
                textShadow: "1px 2px 1.5px",
                WebkitTextStroke: `0.5px`,
                color: "#0066ff",
              }}
            >
              {text}
            </p>
          </div>
          <Image
            src={image}
            alt="designPattern00"
            width={300}
            height={200}
            style={{
              marginLeft: isPc ? 263 : isSp ? 10 : 150,
              ...imageSize,
              opacity: 0.5,
              borderRadius: "30px 15px 15px 0px", //tailwindでborder-rが効かないので,style設定してる
            }}
          />
        </div>
      );
    case 1:
      return (
        <div
          className="flex justify-center items-center cursor-pointer"
          style={{
            boxShadow: `-10px 10px 5px 2px ${
              isDarkMode ? "rgba(0, 153, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
            }`,
            ...tileSize,
            marginLeft: isPc ? 50 : isSp ? 70 : 30,
            borderRadius: "15px 15px 15px 15px", //tailwindでborder-xlが効かないので,style設定してる
          }}
          onClick={() => router.push("/special_skill_detail_page")}
        >
          <div
            className="flex absolute z-10 bg-white border items-center justify-end"
            style={{
              ...contentSize,
              width: contentSize.width + 10,
              left: isPc ? 190 : isSp ? 150 : 130,
              clipPath:
                "polygon(50% 0px, 100% 0, 100% calc(100% - 0px), 0 100%)",
              borderRadius: "0px 15px 15px 0px", //tailwindでborder-rが効かないので,style設定してる
            }}
          >
            <p
              style={{
                fontSize: fontSize,
                marginLeft: isSp ? 120 : isPc ? 380 : 300,
                textShadow: "1px 2px 1.5px",
                WebkitTextStroke: `0.5px`,
                color: "#0066ff",
              }}
            >
              {text}
            </p>
          </div>
          <Image
            src={image}
            alt="designPattern01"
            width="0"
            height="0"
            priority
            sizes="100vw"
            style={{
              marginRight: isPc ? 120 : 100,
              ...imageSize,
              opacity: 0.5,
              borderRadius: "15px 0px 0px 15px", //tailwindでborder-lが効かないので,style設定してる
            }}
          />
        </div>
      );

    default:
      return (
        <div
          className="flex justify-center items-center cursor-pointer"
          style={{
            boxShadow: `${isPc ? "0px" : "-10px"} 10px 5px 2px ${
              isDarkMode ? "rgba(0, 153, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
            }`,
            ...tileSize,
            marginLeft: isPc ? 300 : 30,
            borderRadius: "15px 15px 15px 15px", //tailwindでborder-xlが効かないので,style設定してる
          }}
          onClick={() => router.push("/hobby_detail_page")}
        >
          <div
            className="flex absolute z-10 bg-white border items-center justify-center rounded-r-xl"
            style={{
              ...contentSize,
              left: isPc ? 300 : isSp ? 50 : 30,
              clipPath: "polygon(60% 0px, 50% 0, 100% calc(100% - 0px), 0 60%)",
              borderRadius: "15px 15px 15px 15px", //tailwindでborder-rが効かないので,style設定してる
            }}
          >
            <p
              style={{
                fontSize: fontSize,
                textShadow: "1px 2px 1.5px",
                WebkitTextStroke: `0.5px`,
                color: "#0066ff",
              }}
            >
              {text}
            </p>
          </div>
          <Image
            src={image}
            alt="designPattern02"
            width={300}
            height={200}
            style={{
              ...imageSize,
              opacity: 0.5,
              borderRadius: "15px 15px 15px 15px", //tailwindでborder-xlが効かないので,style設定してる
            }}
          />
        </div>
      );
  }
}
