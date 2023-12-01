import { Button } from "@mui/material";
import Brightness2RoundedIcon from "@mui/icons-material/Brightness2Rounded";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import CssBaseline from "@mui/material/CssBaseline";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";
import { KiwiMaru } from "@/fonts/google_fonts";

type Props = {
  isReloadDarkMode: boolean;
  setIsReloadDarkMode: Dispatch<SetStateAction<boolean>>;
  isDarkMode: boolean;
};

export default function NavBar(props: Props) {
  const router = useRouter();

  const routerHomePage = () => {
    router.push("/home_page");
  };

  const setDarkMode = () => {
    localStorage.setItem("darkMode", "1");
    props.setIsReloadDarkMode(true);
  };

  const cancellationDarkMode = () => {
    localStorage.setItem("darkMode", "0");
    props.setIsReloadDarkMode(true);
  };

  useEffect(() => {
    if (props.isReloadDarkMode) {
      props.setIsReloadDarkMode(false);
    }
  }, [props.isReloadDarkMode]);

  return (
    <div className="flex flex-col">
      <Button onClick={routerHomePage}>
        <div
          className="fixed top-0 flex flex-col z-20 border-b pb-6 p-12"
          style={{
            width: "100%",
            maxWidth: 1500,
            borderColor: "#7fffff",
            backgroundColor: props.isDarkMode ? "black" : "white",
          }}
        >
          <CssBaseline />
          <div
            className={`${KiwiMaru.className} flex felx-row flex-wrap justify-center text-4xl tracking-widest md:my-8`}
            style={{
              textShadow: "1px 8px 5px",
              WebkitTextStroke: `0.5px ${props.isDarkMode ? "white" : "black"}`,
              color: "#7fffff",
            }}
          >
            <p>別府 大地</p>
            <p> について</p>
          </div>
        </div>
      </Button>
      <div>
        {!props.isDarkMode ? (
          <>
            <Button onClick={setDarkMode}>
              <p
                className="rounded-full w-5 h-5 bg-white border fixed top-0 mt-3.5 right-20 mr-1 z-50"
                style={{ borderColor: "black" }}
              ></p>
            </Button>
            <div className="fixed top-3 right-4 z-40 flex flex-row items-center">
              <Brightness7RoundedIcon style={{ color: "red" }} />
              <p className="rounded-full w-16 h-6 border border-black mx-1">
                　
              </p>
              <Brightness2OutlinedIcon style={{ color: "black" }} />
            </div>
          </>
        ) : (
          <>
            <Button onClick={cancellationDarkMode}>
              <p
                className="rounded-full w-5 h-5 bg-white border fixed top-0 mt-3.5 right-12 z-50"
                style={{ borderColor: "white" }}
              ></p>
            </Button>
            <div className="fixed top-3 right-4 z-40 flex flex-row items-center">
              <Brightness5OutlinedIcon style={{ color: "white" }} />
              <p className="rounded-full w-16 h-6 bg-blue-500 mx-1">　</p>
              <Brightness2RoundedIcon style={{ color: "blue" }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
