import { useEffect } from "react";

import * as ScreenOrientation from "expo-screen-orientation";
import { Dimensions } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";

import LanguagesMenu from "~/Components/LanguagesMenu";
import GlobalProvider from "~/Contexts/globalContext";
import theme from "~/Styles/theme.styles";
import Home from "~/Views/Account/Home";
import Login from "~/Views/Account/Login";
import Register from "~/Views/Account/Register";
import Page from "~/Views/Page";
import Plus from "~/Views/Plus";
import Search from "~/Views/Search";
import "~/locales/i18n";

export default function App() {
  const globalWidth = Dimensions?.get("window")?.width;
  useEffect(() => {
    if (globalWidth > theme?.sizes?.breakPoint) {
      ScreenOrientation?.lockAsync(5);
    } else {
      ScreenOrientation?.lockAsync(3);
    }
  }, [globalWidth]);

  return (
    <NativeRouter>
      <GlobalProvider>
        <Page>
          <>
            <Routes>
              <Route index element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/plus" element={<Plus />} />
            </Routes>
            <LanguagesMenu />
          </>
        </Page>
      </GlobalProvider>
    </NativeRouter>
  );
}
