import { NativeRouter, Routes, Route } from "react-router-native";

import LanguagesMenu from "~/Components/LanguagesMenu";
import GlobalProvider from "~/Contexts/globalContext";
import Login from "~/Views/Account/Login";
import Register from "~/Views/Account/Register";
import Home from "~/Views/Home";
import Page from "~/Views/Page";
import Plus from "~/Views/Plus";
import Search from "~/Views/Search";
import "~/locales/i18n";

export default function App() {
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
