import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter, Routes, Route } from "react-router-native";

import LanguagesMenu from "~/Components/LanguagesMenu";
import GlobalProvider from "~/Contexts/globalContext";
import Home from "~/Views/Account/Home";
import Login from "~/Views/Account/Login";
import Register from "~/Views/Account/Register";
import FAQ from "~/Views/FAQ";
import FAQCategory from "~/Views/FAQCategory";
import FAQResponse from "~/Views/FAQResponse";
import Page from "~/Views/Page";
import Plus from "~/Views/Plus";
import Search from "~/Views/Search";
import "~/locales/i18n";

export default function App() {
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    Helvetica: require("~/../assets/fonts/HelveticaNeueCyr.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    HelveticaMedium: require("~/../assets/fonts/HelveticaNeueCyr-Medium.ttf"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    HelveticaBold: require("~/../assets/fonts/HelveticaNeueCyr-Bold.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeRouter>
      <SafeAreaProvider>
        <GlobalProvider>
          <Page>
            <>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/search" element={<Search />} />
                <Route path="/plus" element={<Plus />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/faq/:type" element={<FAQCategory />} />
                <Route path="/faq/:type/:index" element={<FAQResponse />} />
              </Routes>
              <LanguagesMenu />
            </>
          </Page>
        </GlobalProvider>
      </SafeAreaProvider>
    </NativeRouter>
  );
}
