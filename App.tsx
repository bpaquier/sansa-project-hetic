import { NativeRouter, Routes, Route } from "react-router-native";

import About from "~/Views/About";
import Home from "~/Views/Home";
import Page from "~/Views/Page";

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
