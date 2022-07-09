import React from "react";
import MainPage from "../components/MainPage/MainPage";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      starWarsColor: "#FBCF3A",
      starWarsGradient:
        "90deg, rgba(251,229,58,1) 0%, rgba(251,207,58,1) 57%, rgba(251,158,58,1) 83%",
    },
  },
});

const PrincipalPage = () => (
  <NextUIProvider theme={theme}>
    <MainPage />
  </NextUIProvider>
);

export default PrincipalPage;
