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
import MobileOnboarding from "~/Views/MobileOnboarding";
import "~/locales/i18n";

export default function App() {
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
                <Route path="/onboarding" element={<MobileOnboarding />} />
              </Routes>
              <LanguagesMenu />
            </>
          </Page>
        </GlobalProvider>
      </SafeAreaProvider>
    </NativeRouter>
  );
}
