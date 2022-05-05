import { NativeRouter, Routes, Route } from "react-router-native";

import Home from "~/Views/Home";
import Login from "~/Views/Login";
import Page from "~/Views/Page";

export default function App() {
  return (
    <NativeRouter>
      <Page>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Page>
    </NativeRouter>
  );
}
