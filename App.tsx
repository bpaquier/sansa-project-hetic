import { NativeRouter, Routes, Route } from "react-router-native";

import GlobalProvider from "~/Contexts/globalContext";
import Login from "~/Views/Account/Login";
import Register from "~/Views/Account/Register";
import Home from "~/Views/Home";
import Search from "~/Views/Search";
import Page from "~/Views/Page";
import Plus from "~/Views/Plus";

export default function App() {
  return (
    <NativeRouter>
      <GlobalProvider>
        <Page>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/plus" element={<Plus />} />
          </Routes>
        </Page>
      </GlobalProvider>
    </NativeRouter>
  );
}
