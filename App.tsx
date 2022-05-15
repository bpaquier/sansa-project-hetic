import { NativeRouter, Routes, Route } from "react-router-native";

import GlobalProvider from "~/Contexts/globalContext";
import Login from "~/Views/Account/Login";
import Register from "~/Views/Account/Register";
import Home from "~/Views/Home";
import Page from "~/Views/Page";

export default function App() {
  return (
    <NativeRouter>
      <GlobalProvider>
        <Page>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Page>
      </GlobalProvider>
    </NativeRouter>
  );
}
