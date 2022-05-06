import { NativeRouter, Routes, Route } from "react-router-native";

import GlobalProvider from "~/Contexts/globalContext";
import Home from "~/Views/Home";
import Login from "~/Views/Login";
import Page from "~/Views/Page";

export default function App() {
  return (
    <NativeRouter>
      <GlobalProvider>
        <Page>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Page>
      </GlobalProvider>
    </NativeRouter>
  );
}
