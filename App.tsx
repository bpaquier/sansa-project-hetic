import { NativeRouter, Routes, Route } from "react-router-native";

import Page from "~/Views/Page";
import Home from "~/Views/Home";
import About from "~/Views/About";
export default function App() {
  return (
    <NativeRouter>
      <Page>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Page>
    </NativeRouter>
  );
}
