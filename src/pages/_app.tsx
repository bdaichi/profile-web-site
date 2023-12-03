import "@/app/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import "@/fonts/google_fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
