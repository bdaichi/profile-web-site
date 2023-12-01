import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/common/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      KiwiMaru: ["var(--font-KiwiMaru)"],
      DelaGothicOne: ["var(--font-DelaGothicOne)"],
      NewTegomin: ["var(--font-NewTegomin)"],
      HinaMincho: ["var(--font-HinaMincho)"],
      Kosugi: ["var(--font-Kosugi)"],
      Stick: ["var(--font-Stick)"],
      RocknRollOne: ["var(--font-RocknRollOne)"],
      YuseiMagic: ["var(--font-YuseiMagic)"],
      KaiseiDecol: ["var(--font-KaiseiDecol)"],
      ReggaeOne: ["var(--font-ReggaeOne)"],
    },
  },
  plugins: [],
};
export default config;
